import SideIcon from "../assets/icon/SideIcon.png";
import HomeIcon from "../assets/icon/HomeIcon.png";
import LogoutIcon from "../assets/icon/LogoutIcon.png"
import SettingIcon from "../assets/icon/SettingIcon.png"
import ProfileIcon from "../assets/icon/ProfileIcon.png"
import SearchIcon from "../assets/icon/SearchIcon.png"
function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-base-100 px-72 py-4 border-b-2 border-black">
        <div className="">
          <a className="btn btn-ghost" href="/">
            <img src={SideIcon} alt="" className="w-[80px]" />
          </a>
        </div>

        <div className="flex gap-5">
          <a className="btn btn-ghost" href="/">
            <img src={HomeIcon} alt="" className="" />
          </a>
          <a className="btn btn-ghost" href="">
            <img src={SearchIcon} alt="" className="" />
          </a>
        </div>

        <div className="flex gap-5">
        <a className="btn btn-ghost" href="">
            <img src={ProfileIcon} alt=""/>
          </a>
        <a className="btn btn-ghost" href="">
            <img src={SettingIcon} alt=""/>
          </a>
          <a className="btn btn-ghost" href="">
            <img src={LogoutIcon} alt=""/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
