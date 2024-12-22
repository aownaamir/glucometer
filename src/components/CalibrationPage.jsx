import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";
import InvasiveRedingsForm from "./InvasiveRedingsForm";
import NonInvasiveReadingsForm from "./NonInvasiveReadingsForm";
import Calibrate from "./Calibrate";
import { invasiveData, voltageData } from "../data/data";
import { defaultCalibrateApi } from "../api/arduino";
import Navigators from "./Navigators";
// import Spinner from "./Spinner"; // Assuming you have a Spinner component

const initInvasiveValues = {
  0: 94,
  1: 99,
  2: 101,
  3: 108,
  4: 111,
  5: 117,
  6: 120,
  7: 127,
  8: 128,
  9: 130,
};
const initNonInvasiveValues = {
  0: 2.99,
  1: 3.07,
  2: 3.11,
  3: 2.91,
  4: 2.87,
  5: 2.99,
  6: 3.01,
  7: 3.14,
  8: 2.89,
  9: 2.87,
};
const initNonInvasiveLoaders = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
};

const initState = {
  invasiveReadings: initInvasiveValues,
  voltageReadings: initNonInvasiveValues,
  nonInvasiveLoaders: initNonInvasiveLoaders,
};

const CalibrationPage = () => {
  const [step, setStep] = useState(1); // Track the current step (1, 2, or 3)
  const [state, setState] = useState(initState);
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [calibrationSuccess, setCalibrationSuccess] = useState(false);
  const {
    invasiveReadings,
    voltageReadings,
    nonInvasiveLoaders: loaders,
  } = state;

  const handleInvasiveChange = (e) =>
    setState((pV) => ({
      ...pV,
      invasiveReadings: {
        ...pV.invasiveReadings,
        [e.target.name]: Number(e.target.value),
      },
    }));
  const handleNonInvasiveChange = (e, i, value) => {
    // console.log(value ? Number(value) : Number(e.target.value));
    setState((pV) => ({
      ...pV,
      voltageReadings: {
        ...pV.voltageReadings,
        [e ? e.target.name : i]: `${
          e ? Number(e.target.value) : Number(value)
        }`,
      },
    }));
  };
  const handleLoaderChange = (index, value) =>
    setState((pV) => ({
      ...pV,
      nonInvasiveLoaders: {
        ...pV.nonInvasiveLoaders,
        [index]: value,
      },
    }));

  const handleNext = () => {
    if (step === 1 && Object.values(invasiveReadings).every((r) => r !== "")) {
      setStep(2);
    } else if (
      step === 2 &&
      Object.values(voltageReadings).every((r) => r !== "")
    ) {
      setStep(3);
    }
  };

  const handleDefaultCalibrate = async () => {
    setStep(3);
    setIsCalibrating(true);
    setCalibrationSuccess(false);
    try {
      const response = await defaultCalibrateApi();
      console.log(response);
      setIsCalibrating(false);
      setCalibrationSuccess(true);
    } catch (err) {
      console.log(err);
      setIsCalibrating(false);
    }
  };

  return (
    <div className="min-h-screen py-28 bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 z-10">
        Calibration
      </h1>
      {!isCalibrating && !calibrationSuccess && (
        <button
          onClick={handleDefaultCalibrate}
          className="my-7 bg-emerald-500 text-gray-900 py-2 px-6 rounded-lg hover:bg-emerald-400 transition shadow-lg"
        >
          Use Default Calibration
        </button>
      )}
      {!calibrationSuccess && !isCalibrating && (
        <ProgressIndicator step={step} />
      )}
      <div>
        {step === 1 && (
          <InvasiveRedingsForm
            invasiveReadings={invasiveReadings}
            handleInvasiveChange={handleInvasiveChange}
            handleNext={handleNext}
            loaders={loaders}
          />
        )}
        {step === 2 && (
          <NonInvasiveReadingsForm
            voltageReadings={voltageReadings}
            handleNonInvasiveChange={handleNonInvasiveChange}
            handleNext={handleNext}
            loaders={loaders}
            handleLoaderChange={handleLoaderChange}
          />
        )}
        {step === 3 && (
          <Calibrate
            isCalibrating={isCalibrating}
            setIsCalibrating={setIsCalibrating}
            calibrationSuccess={calibrationSuccess}
            setCalibrationSuccess={setCalibrationSuccess}
            invasiveReadings={invasiveReadings}
            voltageReadings={voltageReadings}
          />
        )}
      </div>
      <Navigators />
    </div>
  );
};

export default CalibrationPage;
