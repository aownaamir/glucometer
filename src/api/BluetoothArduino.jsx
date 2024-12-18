import React, { useState } from "react";

const Bluetooth = () => {
  const [data, setData] = useState("");

  const connectToDevice = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ["battery_service"], // Use the service UUIDs relevant to your device
      });

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService("battery_service"); // Replace with your service UUID
      const characteristic = await service.getCharacteristic("battery_level"); // Replace with your characteristic UUID

      characteristic.addEventListener("characteristicvaluechanged", (event) => {
        const value = new TextDecoder().decode(event.target.value);
        setData(value);
      });

      await characteristic.startNotifications();
    } catch (error) {
      console.error("Bluetooth connection failed", error);
    }
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white p-2 rounded mt-2"
        onClick={connectToDevice}
      >
        Connect to Bluetooth
      </button>
      <p>{data && `Data: ${data}`}</p>
    </div>
  );
};

export default Bluetooth;
