function ProgressIndicator({ step }) {
  return (
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
  );
}

export default ProgressIndicator;
