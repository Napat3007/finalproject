import SideIcon from '../assets/icon/SideIcon.png'
import HomeIcon from '../assets/icon/HomeIcon.png'
import SettingIcon from '../assets/icon/SettingIcon.png'
import SearchIcon from '../assets/icon/SearchIcon.png'
import ProfileIcon from '../assets/icon/ProfileIcon.png'
import LogoutIcon from '../assets/icon/LogoutIcon.png'

function Sidebar() {
  return (
    <div className="w-[450px] h-[1080px] px-2 border-2 bg-gray-900">
      <div>
        <ul>
          <div className="flex flex-col">
            <br />
            <img src={SideIcon} alt=''/>
            <br/>
            <p className="font-bold text-5xl text-center text-gray-300">PASSIONCOFFEE</p>
            <p className="font-bold text-xl text-center text-gray-300">APPLICATION</p>
            <br />
            <br />
            <li className="text-2xl font-bold text-center text-gray-300">
              <div className='flex flex-row justify-start items-center gap-10 ml-28'><img src={HomeIcon} alt='' />
              <a href="Home">Home</a></div>
            </li>
            <br />
            <li className="text-2xl font-bold text-center text-gray-300">
              <div className='flex flex-row justify-start items-center gap-10 ml-28'><img src={SearchIcon} />
              <a href="Search">Search</a>
              </div>
            </li>
            <br />
            <li className="text-2xl font-bold text-center text-gray-300">
              <div className='flex flex-row justify-start items-center gap-10 ml-28'><img src={ProfileIcon}/>
              <a href="Profile">Profile</a></div>
            </li>
            <br />
            <div className="h-[260px]"/>
            <li className="text-2xl font-bold text-center text-gray-300">
              <div className='flex flex-row justify-start items-center gap-10 ml-28'><img src={SettingIcon}/>
                <a href="Setting">Setting</a></div>
              
            </li>
            <br />
            <li className="text-2xl font-bold text-center text-gray-300">
              <div className='flex flex-row justify-start items-center gap-10 ml-28'><img src={LogoutIcon} />
              <a href="">Logout</a></div>
            </li>
            <br />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
