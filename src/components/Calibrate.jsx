import { useState } from "react";
import Spinner from "./Spinner";

function Calibrate({ invasiveReadings, voltageReadings }) {
  const [isCalibrating, setIsCalibrating] = useState(false); // To track if calibration is in progress
  const [calibrationSuccess, setCalibrationSuccess] = useState(false);
  const data = [
    { invasive: { ...invasiveReadings } },
    { voltages: { ...voltageReadings } },
  ];

  const handleCalibrate = () => {
    setIsCalibrating(true);
    // Simulate the calibration process (replace with actual logic)
    setTimeout(() => {
      setIsCalibrating(false);
      setCalibrationSuccess(true);
    }, 3000);
  };

  calibrationSuccess && console.log(data);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full z-10 space-y-6">
      {isCalibrating ? (
        <div className="text-center">
          <Spinner />
          <p className="mt-4 text-gray-600">Calibrating, please wait...</p>
        </div>
      ) : (
        <div className="text-center">
          {calibrationSuccess ? (
            <p className="text-lg text-green-600 font-semibold">
              Calibration Successful!
            </p>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                Click the button below to calibrate your device with the entered
                readings.
              </p>
              <button
                onClick={handleCalibrate}
                className="w-2/3 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Calibrate
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Calibrate;
