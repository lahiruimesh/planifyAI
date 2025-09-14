import { useEffect, useState } from "react";
import api from "../Services/api";

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    api.get("/trip")   // backend route: /api/trip
      .then((res) => setTrips(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trips</h1>
      <ul className="space-y-2">
        {trips.map((trip) => (
          <li key={trip.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold">{trip.name}</h2>
            <p>Destinations: {trip.destinations}</p>
            <p>Days: {trip.days}</p>
            <p>Budget: ${trip.budget}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trips;
