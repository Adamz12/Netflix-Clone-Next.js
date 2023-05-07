import { FaCircleNotch, FaSpinner, FaTruckLoading } from "react-icons/fa";

function Loader({ color }: { color: string }) {
  return (
    <div
      className={`m-auto h-7 w-7 animate-spin text-gray-200 dark:text-transparent flex items-center justify-center ${color}`}
    >
      {<FaCircleNotch className={`h-6 w-6 ${color} `} />}
    </div>
  );
}

export default Loader;
