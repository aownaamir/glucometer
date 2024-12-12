import React, { useState } from "react";

const BluetoothComponent = () => {
  const [deviceName, setDeviceName] = useState(null);

  const connectToBluetooth = async () => {
    try {
      // Request a Bluetooth device
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ["battery_service"], // Add the UUIDs of services you need
      });

      setDeviceName(device.name);

      // Connect to the device
      const server = await device.gatt.connect();

      // Access a specific service
      const service = await server.getPrimaryService("battery_service");

      // Access a specific characteristic
      const characteristic = await service.getCharacteristic("battery_level");

      // Read the value
      const value = await characteristic.readValue();
      const batteryLevel = value.getUint8(0);

      alert(`Battery level is ${batteryLevel}%`);
    } catch (error) {
      console.error("Bluetooth connection failed:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Connect to Bluetooth</h1>
      <button
        onClick={connectToBluetooth}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Connect
      </button>
      {deviceName && <p>Connected to: {deviceName}</p>}
    </div>
  );
};

export default BluetoothComponent;
