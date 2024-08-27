import Header from "../Header";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export const MainLayout = () => {
  return (
    <div>
      <div className="">
        <div>
          <Navbar />
        </div>
        <div className="w-full px-72"> 
          <Header />
        </div>
      </div>
    </div>
  );
};
