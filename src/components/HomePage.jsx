import { Link } from "react-router-dom";
import BluetoothComponent from "../api/BluetoothComponent";

const HomePage = () => {
  return (
    <div className="min-h-screen py-28 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative Background Elements */}

      {/* Content */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4 z-10">
        Gluco Meter
      </h1>

      {/* Introductory Paragraph */}
      <p className="text-center text-gray-700 text-lg max-w-md mb-8 z-10">
        Track your blood glucose levels effortlessly. Calibrate your device and
        measure with ease for better health management.
      </p>

      <div className="flex space-x-4 z-10">
        {/* <Link to="/measurement">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
            Login
          </button>
        </Link> */}
        <Link to="/calibration">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Calibration
          </button>
        </Link>
        <Link to="/measurement">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
            Measurement
          </button>
        </Link>
        <Link to="/arduino">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
            Arduino
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
