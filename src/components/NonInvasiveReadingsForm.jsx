import { TbHexagonLetterM } from "react-icons/tb";
import { takeReadingApi } from "../api/arduino";
import Spinner from "./Spinner";
function NonInvasiveReadingsForm({
  voltageReadings,
  handleNonInvasiveChange,
  handleNext,
  loaders,
  handleLoaderChange,
}) {
  const takeReading = async (e, index) => {
    e.preventDefault();
    handleLoaderChange(index, true); //isLoading: true
    try {
      const { reading } = await takeReadingApi();
      console.log("THE READ: ", index, reading);
      handleNonInvasiveChange(null, index, reading);
      handleLoaderChange(index, false);
    } catch (err) {
      handleLoaderChange(index, false);
      console.log(err);
    }
  };

  return (
    <form className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full z-10 space-y-6 ">
      <p className="text-gray-300">
        Now, enter the 10 non-invasive voltage readings from your sensor.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.values(voltageReadings).map((reading, index) => (
          <div key={index} className=" flex justify-between relative">
            <label
              htmlFor={`voltage-reading-${index}`}
              className=" text-gray-400 font-medium flex items-end"
            >
              Reading {index + 1}
            </label>
            <input
              type="number"
              name={index}
              id={`voltage-reading-${index}`}
              value={voltageReadings[index]}
              onChange={(e) => handleNonInvasiveChange(e, null, null)}
              disabled={loaders[index]}
              className="w-[60%] p-3 bg-transparent text-gray-300 border-b-2 border-gray-600 focus:ring-2 focus:ring-cyan-400 disabled:text-gray-800"
            />
            <button
              onClick={(e) => takeReading(e, index)}
              disabled={loaders[index]}
              className="text-cyan-500 text-[22px] rounded-full absolute right-0 top-4"
            >
              {!loaders[index] ? <TbHexagonLetterM /> : <Spinner scale={1.0} />}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={handleNext}
          className="w-2/3 px-6 py-3 bg-cyan-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-cyan-400 transition"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default NonInvasiveReadingsForm;
