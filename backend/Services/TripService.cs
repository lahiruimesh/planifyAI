using backend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace backend.Services
{
    public class TripService
    {
        private readonly IMongoCollection<Trip> _trips;

        public TripService(IOptions<MongoDBSettings> mongoSettings)
        {
            var settings = mongoSettings.Value;
            
            // Debug output
            Console.WriteLine($"Connection String: {settings?.ConnectionString}");
            Console.WriteLine($"Database Name: {settings?.DatabaseName}");
            Console.WriteLine($"Collection Name: {settings?.TripsCollection}");
            
            if (settings?.ConnectionString == null)
            {
                throw new InvalidOperationException("MongoDB ConnectionString is not configured. Check appsettings.json");
            }
            
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _trips = database.GetCollection<Trip>(settings.TripsCollection);
        }

        public List<Trip> GetAll() => _trips.Find(trip => true).ToList();

        public Trip? GetById(string id) =>
            _trips.Find(trip => trip.Id == id).FirstOrDefault();

        public Trip Create(Trip trip)
        {
            _trips.InsertOne(trip);
            return trip;
        }

        public void Delete(string id) =>
            _trips.DeleteOne(trip => trip.Id == id);
    }
}
