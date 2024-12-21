import { useState } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { calibrateApi } from "../api/arduino";

function Calibrate({
  invasiveReadings,
  voltageReadings,
  isCalibrating,
  setIsCalibrating,
  calibrationSuccess,
  setCalibrationSuccess,
}) {
  const data = [
    { invasive: { ...invasiveReadings } },
    { voltages: { ...voltageReadings } },
  ];

  const handleCalibrate = async () => {
    setIsCalibrating(true);

    try {
      const response = await calibrateApi(data);
      console.log(response);
      // setReading(voltage);
      setIsCalibrating(false);
      setCalibrationSuccess(true);
    } catch (err) {
      setIsCalibrating(false);
      console.log(err);
    }
  };

  // calibrationSuccess && console.log(data);

  return (
    <div className="bg-gray-800  shadow-lg rounded-lg p-6 max-w-lg w-full z-10 space-y-6">
      {isCalibrating ? (
        <div className="text-center">
          <Spinner type="big" />
          <p className="mt-4 text-gray-400">Calibrating, please wait...</p>
        </div>
      ) : (
        <div className="text-center">
          {calibrationSuccess ? (
            <div>
              <p className="text-lg text-gray-300 font-semibold">
                Calibration Successful!
              </p>
              <Link to="/">
                <button className="w-full mt-7 bg-cyan-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-cyan-400 transition shadow-lg">
                  Home
                </button>
              </Link>
            </div>
          ) : (
            <>
              <p className="text-gray-300 mb-6">
                Click the button below to calibrate your device with the entered
                readings.
              </p>
              <button
                onClick={handleCalibrate}
                className="w-2/3 px-6 py-3 bg-cyan-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-cyan-400 transition"
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
