import React, { useState } from "react";

const BluetoothComponent = () => {
  const [deviceName, setDeviceName] = useState(null);

  const connectToBluetooth = async () => {
    navigator.bluetooth
      .requestDevice({
        acceptAllDevices: true,
        optionalServices: ["0000180f-0000-1000-8000-00805f9b34fb"], // Add service UUIDs here
      })
      .then((device) => {
        console.log("Device discovered:", device);
        return device.gatt.connect();
      })
      .then((server) => {
        console.log("Connected to GATT server:", server);
      })
      .catch((error) => {
        console.error("Error connecting to Bluetooth device:", error);
      });
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
