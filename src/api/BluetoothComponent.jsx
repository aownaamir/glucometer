import { useState } from "react";

const BluetoothComponent = () => {
  const [device, setDevice] = useState(null);
  const [data, setData] = useState(null);

  const connectToDevice = async () => {
    try {
      // Request a Bluetooth device
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true, // Or specify filters
        optionalServices: ["battery_service"], // Specify required GATT services
      });

      setDevice(device);

      // Connect to the device's GATT server
      const server = await device.gatt.connect();

      // Get a specific service
      const service = await server.getPrimaryService("battery_service");

      // Get a specific characteristic
      const characteristic = await service.getCharacteristic("battery_level");

      // Read the value of the characteristic
      const value = await characteristic.readValue();
      const batteryLevel = value.getUint8(0);

      setData(`Battery Level: ${batteryLevel}%`);
    } catch (error) {
      console.error("Bluetooth Error:", error);
    }
  };

  return (
    <div className="min-h-screen py-28 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center relative overflow-hidden">
      <h1 className="text-4xl font-bold text-blue-700 mb-4 z-10">
        Bluetooth Demo
      </h1>
      <button
        onClick={connectToDevice}
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
      >
        {device ? `Connected to ${device.name}` : "Connect to Bluetooth"}
      </button>
      {data && (
        <p className="text-center text-gray-700 text-lg max-w-md mb-8 z-10">
          {data}
        </p>
      )}
    </div>
  );
};

export default BluetoothComponent;
