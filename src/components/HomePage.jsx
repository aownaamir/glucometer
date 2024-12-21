import { Link } from "react-router-dom";
import BluetoothComponent from "../api/BluetoothComponent";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center items-center">
      <div className="bg-gray-700 shadow-lg rounded-xl p-10 w-80 text-center">
        <h1 className="text-3xl font-bold text-cyan-400">Gluco Meter</h1>
        <p className="text-gray-300 mt-4">
          Advanced glucose tracking for your health needs.
        </p>
        <div className="mt-6 flex flex-col space-y-4">
          <Link to="/calibration">
            <button className="w-full bg-cyan-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-cyan-400 transition shadow-lg">
              Calibration
            </button>
          </Link>
          <Link to="/measurement">
            <button className="w-full bg-emerald-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-emerald-400 transition shadow-lg">
              Measurement
            </button>
          </Link>
        </div>
      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        &copy; 2024 Gluco Meter. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
