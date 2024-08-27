import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export const MainLayout = () => {
  return (
    <div>
      <div className="">
        <div>
          <Navbar />
        </div>
        <div className="w-full px-72"> 
        <Outlet/>
        </div>
      </div>
    </div>
  );
};
