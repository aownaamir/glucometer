function InvasiveRedingsForm({
  invasiveReadings,
  handleInvasiveChange,
  handleNext,
  loaders,
}) {
  return (
    <form className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-lg w-full z-10 space-y-6 ">
      <p className="text-gray-300">
        Please enter 10 invasive glucose readings to calibrate your device.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {Object.values(invasiveReadings).map((reading, index) => (
          <div key={index} className=" flex justify-between">
            <label
              htmlFor={`invasive-reading-${index}`}
              className=" text-gray-400 font-medium flex items-end"
            >
              Reading {index + 1}
            </label>
            <input
              type="number"
              name={index}
              id={`invasive-reading-${index}`}
              value={invasiveReadings[index]}
              onChange={handleInvasiveChange}
              disabled={loaders[index]}
              className="w-[60%] p-3 bg-transparent text-gray-300 border-b-2 border-gray-600 focus:ring-2 focus:ring-cyan-400"
            />
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

export default InvasiveRedingsForm;
