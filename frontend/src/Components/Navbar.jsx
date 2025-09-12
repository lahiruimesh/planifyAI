import { Link } from "react-router-dom";
import logo from '../Assets/PlanifyLogo.png';

function Navbar() {
  return (
    <nav className="bg-white text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/"><img className="h-10" src= { logo } alt="Logo"/></Link>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/dashboard" className="text-blue-600 font-bold transition">Dashboard</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-600 font-bold transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-blue-600 font-bold transition">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="text-blue-600 font-bold transition">Login</Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-3 py-1 rounded-lg font-medium hover:bg-gray-100 transition"
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
