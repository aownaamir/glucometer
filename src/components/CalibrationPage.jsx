import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";
import InvasiveRedingsForm from "./InvasiveRedingsForm";
import NonInvasiveReadingsForm from "./NonInvasiveReadingsForm";
import Calibrate from "./Calibrate";
import { invasiveData, voltageData } from "../data/data";
// import Spinner from "./Spinner"; // Assuming you have a Spinner component

const CalibrationPage = () => {
  const [step, setStep] = useState(1); // Track the current step (1, 2, or 3)
  const [invasiveReadings, setInvasiveReadings] = useState(invasiveData);
  const [voltageReadings, setVoltageReadings] = useState(voltageData);

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

  return (
    <div className="min-h-screen bg-gradient-to-r py-28 from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center relative overflow-hidden px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 z-10">
        Calibration
      </h1>
      <ProgressIndicator step={step} />
      {step === 1 && (
        <InvasiveRedingsForm
          invasiveReadings={invasiveReadings}
          setInvasiveReadings={setInvasiveReadings}
          handleNext={handleNext}
        />
      )}
      {step === 2 && (
        <NonInvasiveReadingsForm
          voltageReadings={voltageReadings}
          setVoltageReadings={setVoltageReadings}
          handleNext={handleNext}
        />
      )}
      {step === 3 && (
        <Calibrate
          invasiveReadings={invasiveReadings}
          voltageReadings={voltageReadings}
        />
      )}
    </div>
  );
};

export default CalibrationPage;
