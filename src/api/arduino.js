import URL from "./apiRoutes";

const sendDataToArduino = async () => {
  try {
    const response = await fetch(URL, {
      method: "GET",
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

export { sendDataToArduino };
