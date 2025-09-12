using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backend.Models
{
    public class Trip
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        
        public required string Name { get; set; }
        public required string Start { get; set; }
        public required string End { get; set; }
        public required string Destinations { get; set; }
        public int Persons { get; set; }
        public int Days { get; set; }
        public decimal Budget { get; set; }
        public required string Preferences { get; set; }
    }
}