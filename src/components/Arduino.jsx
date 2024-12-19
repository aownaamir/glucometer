import { sendDataToArduino } from "../api/arduino";

function Arduino() {
  function handleClick() {
    sendDataToArduino();
  }
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Connect to Bluetooth</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Connect
      </button>
      {/* {deviceName && <p>Connected to: {deviceName}</p>} */}
    </div>
  );
}

export default Arduino;
