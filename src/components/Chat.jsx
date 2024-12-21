function Chat() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center items-center">
        <div className="bg-gray-700 shadow-lg rounded-xl p-10 w-80 text-center">
          <h1 className="text-3xl font-bold text-cyan-400">Gluco Meter</h1>
          <p className="text-gray-300 mt-4">
            Advanced glucose tracking for your health needs.
          </p>
          <div className="mt-6 flex flex-col space-y-4">
            <button className="bg-cyan-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-cyan-400 transition shadow-lg">
              Calibration
            </button>
            <button className="bg-emerald-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-emerald-400 transition shadow-lg">
              Measurement
            </button>
          </div>
        </div>
        <footer className="mt-8 text-gray-500 text-sm">
          &copy; 2024 Gluco Meter. All rights reserved.
        </footer>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center items-center">
        <div className="bg-gray-700 shadow-xl rounded-lg p-8 w-96 text-center">
          <h1 className="text-3xl font-bold text-cyan-400">Measurement</h1>
          <p className="text-gray-300 mt-4">
            Click the "Measure" button to begin taking a non-invasive glucose
            reading. Once the reading is received, you can calculate the final
            value.
          </p>
          <button className="mt-6 bg-cyan-500 text-gray-900 py-2 px-8 rounded-lg hover:bg-cyan-400 transition shadow-md">
            Measure
          </button>
        </div>
        <footer className="mt-8 text-gray-500 text-sm">
          &copy; 2024 Gluco Meter. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Chat;
