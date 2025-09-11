const TripCard = ({ trip }) => (
  <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
    <h3 className="text-xl font-bold text-gray-800">{trip.name}</h3>
    <p className="text-gray-600">Destinations: {trip.destinations}</p>
    <p className="text-gray-600">Days: {trip.days} | Persons: {trip.persons}</p>
    <p className="text-gray-800 font-semibold">Budget: ${trip.budget}</p>
    <a href={`/trip/${trip.id}`} className="mt-3 inline-block text-blue-600 hover:underline">
      View Details →
    </a>
  </div>
);
export default TripCard;
