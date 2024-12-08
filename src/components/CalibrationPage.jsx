import React, { useState } from "react";
import Spinner from "./Spinner";
// import Spinner from "./Spinner"; // Assuming you have a Spinner component

const CalibrationPage = () => {
  const [step, setStep] = useState(1); // Track the current step (1, 2, or 3)
  const [invasiveReadings, setInvasiveReadings] = useState(Array(10).fill(""));
  const [voltageReadings, setVoltageReadings] = useState(Array(10).fill(""));
  const [isCalibrating, setIsCalibrating] = useState(false); // To track if calibration is in progress
  const [calibrationSuccess, setCalibrationSuccess] = useState(false); // To track if calibration is successful

  const handleInvasiveChange = (index, value) => {
    const updatedReadings = [...invasiveReadings];
    updatedReadings[index] = value;
    setInvasiveReadings(updatedReadings);
  };

  const handleVoltageChange = (index, value) => {
    const updatedReadings = [...voltageReadings];
    updatedReadings[index] = value;
    setVoltageReadings(updatedReadings);
  };

  const handleNext = () => {
    if (step === 1 && invasiveReadings.every((r) => r !== "")) {
      setStep(2);
    } else if (step === 2 && voltageReadings.every((r) => r !== "")) {
      setStep(3);
    }
  };

  const handleCalibrate = () => {
    setIsCalibrating(true);
    // Simulate the calibration process (replace with actual logic)
    setTimeout(() => {
      setIsCalibrating(false);
      setCalibrationSuccess(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r py-28 from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center relative overflow-hidden px-6">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 z-10">
        Calibration
      </h1>

      {/* Progress Indicator */}
      <div className="w-full max-w-lg flex mb-6 z-10 relative">
        <div className="w-full h-2 bg-gray-300 rounded-full">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              step === 1
                ? "bg-gradient-to-r from-blue-500 to-blue-700"
                : step === 2
                ? "bg-gradient-to-r from-indigo-500 to-indigo-700"
                : "bg-gradient-to-r from-green-500 to-green-700"
            }`}
            style={{ width: `${(step - 1) * 50}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1 - Invasive Readings */}
      {step === 1 && (
        <form className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full z-10 space-y-6">
          <p className="text-gray-600">
            Please enter 10 invasive glucose readings to calibrate your device.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {invasiveReadings.map((reading, index) => (
              <div key={index}>
                <label
                  htmlFor={`invasive-reading-${index}`}
                  className="block text-gray-700 font-medium mb-1"
                >
                  Invasive Reading {index + 1}
                </label>
                <input
                  type="number"
                  id={`invasive-reading-${index}`}
                  value={reading}
                  onChange={(e) => handleInvasiveChange(index, e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={handleNext}
              className="w-2/3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </form>
      )}

      {/* Step 2 - Voltage Readings */}
      {step === 2 && (
        <form className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full z-10 space-y-6">
          <p className="text-gray-600">
            Now, enter the 10 non-invasive voltage readings from your sensor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {voltageReadings.map((reading, index) => (
              <div key={index}>
                <label
                  htmlFor={`voltage-reading-${index}`}
                  className="block text-gray-700 font-medium mb-1"
                >
                  Voltage Reading {index + 1}
                </label>
                <input
                  type="number"
                  id={`voltage-reading-${index}`}
                  value={reading}
                  onChange={(e) => handleVoltageChange(index, e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={handleNext}
              className="w-2/3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </form>
      )}

      {/* Step 3 - Calibration */}
      {step === 3 && (
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
                    Click the button below to calibrate your device with the
                    entered readings.
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
      )}
    </div>
  );
};

export default CalibrationPage;
