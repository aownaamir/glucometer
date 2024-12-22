import { IoMdHome } from "react-icons/io";
import { IoStop } from "react-icons/io5";
import { Link } from "react-router-dom";
import { stopApi } from "../api/arduino";

function Navigators() {
  const handleStop = async () => {
    try {
      const response = await stopApi();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex gap-7">
      <Link to="/">
        <button className="my-5 w-10 h-10 text-green-600 text-xl border-2 border-slate-500 rounded-full font-bold flex justify-center items-center shadow-lg">
          <IoMdHome />
        </button>
      </Link>
      <button
        onClick={handleStop}
        className="my-5 w-10 h-10 text-red-600 text-xl border-2 border-slate-500 rounded-full font-bold flex justify-center items-center shadow-lg"
      >
        <IoStop />
      </button>
    </div>
  );
}

export default Navigators;
