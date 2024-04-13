import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../assets/logo";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
      <div className="max-w-5xl mx-auto px-2 w-full">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <LogoIcon />
          <p className="font-semibold">
            <span className="text-yellow-500">C</span>rypto
            <span className="text-yellow-500">U</span>pdate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
