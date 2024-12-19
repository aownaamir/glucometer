import { useState } from "react";
import Spinner from "./Spinner";
import { measureApi } from "../api/arduino";
import Refresh from "../../public/Refresh";

const MeasurementPage = () => {
  const [isMeasuring, setIsMeasuring] = useState(false); //
  const [isCalculating, setIsCalculating] = useState(false);
  const [reading, setReading] = useState(null);
  const [finalReading, setFinalReading] = useState(null);

  const handleMeasure = async () => {
    setIsMeasuring(true);
    setReading(null);
    setFinalReading(null);

    try {
      const { glucoseLevel } = await measureApi();
      setReading(glucoseLevel);
      setIsMeasuring(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const finalCalculatedReading = reading + 10;
      setFinalReading(finalCalculatedReading);
      setIsCalculating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-28 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center relative overflow-hidden px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 z-10">
        Measurement
      </h1>
      <p className="text-gray-600 mb-6 z-10 text-center max-w-lg">
        Click the "Measure" button to begin taking a non-invasive glucose
        reading. Once the reading is received, you can calculate the final
        value.
      </p>
      {!isMeasuring && !reading && !finalReading && !isCalculating && (
        <button
          onClick={handleMeasure}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Measure
        </button>
      )}
      {isMeasuring && <Spinner />}
      {reading && !isCalculating && !finalReading && (
        <div className="text-center mt-6 flex flex-col items-center justify-center">
          <p className="text-xl font-semibold text-gray-700">
            Non-invasive reading: {`${reading}`} mg/dL
          </p>
          <div className="flex flex-col items-center">
            <button
              onClick={handleCalculate}
              className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Calculate
            </button>
            <button
              onClick={handleMeasure}
              className="mt-4 text-white font-medium rounded-full flex items-center hover:rotate-180 hover:scale-110 transition-all duration-300"
            >
              <Refresh className="w-14 h-14 fill-blue-600" />
            </button>
          </div>
        </div>
      )}
      {finalReading && (
        <div className="text-center mt-6">
          <p className="text-xl font-semibold text-gray-700">
            Final Glucose Level: {finalReading} mg/dL
          </p>
        </div>
      )}
      {isCalculating && <Spinner />}
    </div>
  );
};

export default MeasurementPage;
