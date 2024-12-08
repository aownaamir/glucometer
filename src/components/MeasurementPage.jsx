import { useState } from "react";
import Spinner from "./Spinner";

const MeasurementPage = () => {
  const [isMeasuring, setIsMeasuring] = useState(false); // State to track if measuring is in progress
  const [isCalculating, setIsCalculating] = useState(false); // State to track if calculation is in progress
  const [reading, setReading] = useState(null); // State to store the glucose reading
  const [finalReading, setFinalReading] = useState(null); // State to store the final calculated reading

  const handleMeasure = () => {
    setIsMeasuring(true);
    setReading(null); // Reset the reading before starting the measurement
    setFinalReading(null); // Reset final reading before calculation

    // Simulate Bluetooth communication (this should be replaced with actual Bluetooth interaction)
    setTimeout(() => {
      // Simulating a non-invasive reading received from Arduino
      const simulatedReading = Math.floor(Math.random() * (150 - 70 + 1)) + 70; // Simulated reading between 70 and 150
      setReading(simulatedReading);
      setIsMeasuring(false);
    }, 3000); // Simulate a delay for the reading (3 seconds)
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    // Simulate Bluetooth communication to calculate the final reading (this should be replaced with actual Bluetooth interaction)
    setTimeout(() => {
      // Simulating the final calculated reading
      const finalCalculatedReading = reading + 10; // Add 10 to simulate some calculation
      setFinalReading(finalCalculatedReading);
      setIsCalculating(false);
    }, 3000); // Simulate a delay for the calculation (3 seconds)
  };

  return (
    <div className="min-h-screen py-28 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center relative overflow-hidden px-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 z-10">
        Measurement
      </h1>
      {/* Instructions */}
      <p className="text-gray-600 mb-6 z-10 text-center max-w-lg">
        Click the "Measure" button to begin taking a non-invasive glucose
        reading. Once the reading is received, you can calculate the final
        value.
      </p>
      {/* Measure Button */}
      {!isMeasuring && !reading && !finalReading && !isCalculating && (
        <button
          onClick={handleMeasure}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Measure
        </button>
      )}
      {/* Spinner or Reading Display */}
      {isMeasuring && <Spinner />} {/* Show spinner when measuring */}
      {reading && !isCalculating && !finalReading && (
        <div className="text-center mt-6">
          <p className="text-xl font-semibold text-gray-700">
            Non-invasive reading: {reading} mg/dL
          </p>
          <button
            onClick={handleCalculate}
            className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Calculate
          </button>
        </div>
      )}
      {/* Final Reading */}
      {finalReading && (
        <div className="text-center mt-6">
          <p className="text-xl font-semibold text-gray-700">
            Final Glucose Level: {finalReading} mg/dL
          </p>
        </div>
      )}
      {/* Spinner while calculating */}
      {isCalculating && <Spinner />}
    </div>
  );
};

export default MeasurementPage;
