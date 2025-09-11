import { useState } from "react";

const TripForm = ({ onSubmit }) => {
  const [trip, setTrip] = useState({
    name: "",
    destinations: "",
    persons: 1,
    days: 1,
    budget: "",
    preferences: ""
  });

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(trip);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Add Trip</h2>

      <input type="text" name="name" placeholder="Trip Name" value={trip.name}
        onChange={handleChange} className="w-full border p-2 rounded mb-3" required />

      <input type="text" name="destinations" placeholder="Destinations (comma separated)"
        value={trip.destinations} onChange={handleChange}
        className="w-full border p-2 rounded mb-3" required />

      <div className="flex gap-3">
        <input type="number" name="persons" placeholder="Persons" value={trip.persons}
          onChange={handleChange} className="w-1/2 border p-2 rounded mb-3" />
        <input type="number" name="days" placeholder="Days" value={trip.days}
          onChange={handleChange} className="w-1/2 border p-2 rounded mb-3" />
      </div>

      <input type="number" name="budget" placeholder="Budget (USD)" value={trip.budget}
        onChange={handleChange} className="w-full border p-2 rounded mb-3" />

      <textarea name="preferences" placeholder="Preferences (adventure, food, etc.)"
        value={trip.preferences} onChange={handleChange}
        className="w-full border p-2 rounded mb-3"></textarea>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Save Trip
      </button>
    </form>
  );
};
export default TripForm;
