import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold tracking-wide">TripPlanner</h1>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-200 transition">Dashboard</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200 transition">Login</Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-3 py-1 rounded-md font-medium hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
