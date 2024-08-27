import SideIcon from "../assets/icon/SideIcon.png";
import HomeIcon from "../assets/icon/HomeIcon.png";
function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 px-72">
        <div className="flex-1">
          <img src={SideIcon} alt="" className="w-[80px]" />
        </div>
  
          <div className="dropdown dropdown-end">
            <img src={HomeIcon} alt="" className="w-[30px]" />
          </div>
     
      </div>
    </div>
  );
}

export default Navbar;
