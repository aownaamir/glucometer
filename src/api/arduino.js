import URL from "./apiRoutes";

const sendDataToArduino = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/arduino", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Hello Arduino!" }),
    });
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error sending data to Arduino:", error);
  }
};
const measureApi = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/arduino/measure",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ message: "Hello Arduino!" }),
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error sending data to Arduino:", error);
  }
};

export { sendDataToArduino, measureApi };
