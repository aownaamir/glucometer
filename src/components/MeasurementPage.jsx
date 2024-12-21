import { useState } from "react";
import Spinner from "./Spinner";
import { measureApi, calculateApi } from "../api/arduino";
import Refresh from "../../public/Refresh";
import { Link } from "react-router-dom";

const MeasurementPage = () => {
  const [isMeasuring, setIsMeasuring] = useState(false); //
  const [isCalculating, setIsCalculating] = useState(false);
  const [reading, setReading] = useState(null);
  const [finalReading, setFinalReading] = useState(null);

  function handleRefresh() {
    // !isMeasuring && !reading && !finalReading && !isCalculating
    setIsMeasuring(false);
    setReading(null);
    setFinalReading(null);
    setIsCalculating(false);
  }

  const handleMeasure = async () => {
    setIsMeasuring(true);
    setReading(null);
    setFinalReading(null);

    try {
      const { voltage } = await measureApi();
      setReading(voltage);
      setIsMeasuring(false);
    } catch (err) {
      setIsMeasuring(false);
      console.log(err);
    }
  };

  const handleCalculate = async () => {
    setIsCalculating(true);

    try {
      const { glucoseLevel } = await calculateApi();
      setFinalReading(glucoseLevel);
      setIsCalculating(false);
    } catch (err) {
      setIsCalculating(false);
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center items-center">
      <div className="bg-gray-700 shadow-xl rounded-lg p-8 w-96 text-center">
        <h1 className="text-3xl font-bold text-cyan-400">Measurement</h1>
        <p className="text-gray-300 mt-4">
          Click the "Measure" button to begin taking a non-invasive glucose
          reading. Once the reading is received, you can calculate the final
          value.
        </p>
        {!isMeasuring && !reading && !finalReading && !isCalculating && (
          <button
            onClick={handleMeasure}
            className="mt-6 bg-cyan-500 text-gray-900 py-2 px-8 rounded-lg hover:bg-cyan-400 transition shadow-md"
          >
            Measure
          </button>
        )}
        {isMeasuring && <Spinner type="big" />}
        {reading && !isCalculating && !finalReading && (
          <div className="text-center mt-6 flex flex-col">
            <p className="text-xl font-semibold text-white">
              Non-invasive reading: {`${reading}`} V
            </p>
            <div className="mt-6 flex flex-col space-y-4">
              <button
                onClick={handleMeasure}
                className="w-full bg-emerald-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-emerald-400 transition shadow-lg"
              >
                Re-measure
              </button>
              <button
                onClick={handleCalculate}
                className="w-full bg-cyan-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-cyan-400 transition shadow-lg"
              >
                Calculate
              </button>
            </div>
          </div>
        )}
        {isCalculating && <Spinner type="big" />}
        {finalReading && (
          <div className="text-center flex flex-col mt-6">
            <p className="text-xl font-semibold text-white">
              Final Glucose Level: {finalReading} mg/dL
            </p>
            <div className="mt-6 flex flex-col space-y-4">
              <Link to="/">
                <button className="w-full bg-cyan-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-cyan-400 transition shadow-lg">
                  Home
                </button>
              </Link>
              <button
                onClick={handleRefresh}
                className="w-full bg-emerald-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-emerald-400 transition shadow-lg"
              >
                Measurement
              </button>
            </div>
          </div>
        )}
      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        &copy; 2024 Gluco Meter. All rights reserved.
      </footer>
    </div>
  );
};

export default MeasurementPage;
