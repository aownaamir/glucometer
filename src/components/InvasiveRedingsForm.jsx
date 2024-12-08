function InvasiveRedingsForm({
  invasiveReadings,
  setInvasiveReadings,
  handleNext,
}) {
  const handleInvasiveChange = (index, value) => {
    const updatedReadings = [...invasiveReadings];
    updatedReadings[index] = value;
    setInvasiveReadings(updatedReadings);
  };

  return (
    <form className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full z-10 space-y-6">
      <p className="text-gray-600">
        Please enter 10 invasive glucose readings to calibrate your device.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.values(invasiveReadings).map((reading, index) => (
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
              value={invasiveReadings[index]}
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
  );
}

export default InvasiveRedingsForm;
