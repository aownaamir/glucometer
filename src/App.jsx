import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LogInPage";
import MeasurementPage from "./components/MeasurementPage";
import SignupPage from "./components/SignupPage";
import CalibrationPage from "./components/CalibrationPage";
import BluetoothComponent from "./api/BluetoothComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/bluetooth",
      element: <BluetoothComponent />,
    },
    {
      path: "/calibration",
      element: <CalibrationPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/measurement",
      element: <MeasurementPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
