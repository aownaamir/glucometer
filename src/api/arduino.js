const URL = "http://localhost:3000/api/v1/";

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
const calculateApi = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/arduino/calculate",
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
const takeReadingApi = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/arduino/reading",
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
const calibrateApi = async (collectedData) => {
  // try {
  const response = await fetch(
    "http://localhost:3000/api/v1/arduino/calibrate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ collectedData }),
    }
  );
  const data = await response.json();

  return data;
  // }
  //  catch (error) {
  //   console.error("Error sending data to Arduino:", error);
  // }
};
const defaultCalibrateApi = async (collectedData) => {
  // try {
  const response = await fetch("http://localhost:3000/api/v1/arduino/default", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collectedData }),
  });
  const data = await response.json();

  return data;
  // } catch (error) {
  //   console.error("Error sending data to Arduino:", error);
  // }
};

export {
  sendDataToArduino,
  measureApi,
  calculateApi,
  takeReadingApi,
  calibrateApi,
  defaultCalibrateApi,
};
