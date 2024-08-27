import Header from "../Header";
import Sidebar from "../Sidebar";

export const MainLayout = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full"> 
          <Header />
        </div>
      </div>
    </div>
  );
};
