import { useState } from "react";
import Spinner from "./Spinner";
import { measureApi, calculateApi, modeApi } from "../api/arduino";
import Refresh from "../../public/Refresh";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoStop } from "react-icons/io5";
import Navigators from "./Navigators";

const MeasurementPage = () => {
  const [isMeasuring, setIsMeasuring] = useState(false); //
  const [isCalculating, setIsCalculating] = useState(false);
  const [reading, setReading] = useState(null);
  const [finalReading, setFinalReading] = useState(null);
  const [fasting, setFasting] = useState(true);
  const [loading, setLoading] = useState(false);

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

  const handleMode = async () => {
    setFasting((pV) => !pV);
    setLoading(true);
    try {
      const response = await modeApi({ fasting: !fasting });
      console.log(response);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
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
          <div className="flex flex-col">
            {/* <button
              onClick={handleMode}
              className="mt-6 bg-cyan-500 text-gray-900 py-2 px-8 rounded-lg hover:bg-cyan-400 transition shadow-md"
            >
              {loading ? (
                <Spinner type="small" />
              ) : (
                `${fasting ? "Fasting" : "Post meal"}`
              )}
            </button> */}
            <div className="mt-6 py-2 flex justify-between items-center">
              <p className="text-gray-300">
                My condition: &nbsp;&nbsp;{" "}
                <span className="font-semibold text-cyan-400">
                  {!loading && `${fasting ? "Fasting" : "Post meal"}`}{" "}
                </span>
              </p>
              <button
                onClick={handleMode}
                className="bg-emerald-500 text-gray-900 py-2 px-8 rounded-lg hover:bg-emerald-400 transition shadow-lg"
              >
                {loading ? <Spinner /> : "Revert"}
              </button>
            </div>
            <button
              onClick={handleMeasure}
              className="mt-6 bg-cyan-500 text-gray-900 py-2 px-8 rounded-lg hover:bg-cyan-400 transition shadow-md"
            >
              Measure
            </button>
          </div>
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
      <Navigators />
      <footer className="mt-8 text-gray-500 text-sm">
        &copy; 2024 Gluco Meter. All rights reserved.
      </footer>
    </div>
  );
};

export default MeasurementPage;
