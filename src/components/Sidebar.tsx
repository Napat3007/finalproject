import SideIcon from '../assets/icon/SideIcon.png'
import HomeIcon from '../assets/icon/HomeIcon.png'
import SettingIcon from '../assets/icon/SettingIcon.png'
import SearchIcon from '../assets/icon/SearchIcon.png'
import ProfileIcon from '../assets/icon/ProfileIcon.png'
import LogoutIcon from '../assets/icon/LogoutIcon.png'

function Sidebar() {
  return (
    <div className="w-[300px] h-[1080px] px-2 bg-gray-900">
      <div>
        <ul>
          <div className="flex flex-col items-center px-8">
            <img src={SideIcon} alt='' className='mb-4'/>
            <p className="font-bold text-2xl text-center text-gray-300 ">PASSIONCOFFEE</p>
            <p className="font-bold text-2xl text-center text-gray-300  mb-4">APPLICATION</p>
            <li className="text-xl font-bold text-start text-gray-300">
              <div className='flex  justify-start items-center gap-4 mb-4'><img src={HomeIcon} alt='' className='w-[30px]' />
              <a href="Home">Home</a></div>
            </li>
            <li className="text-xl font-bold text-start text-gray-300">
              <div className='flex justify-start items-center gap-4 mb-4'><img src={SearchIcon} className='w-[30px]'/>
              <a href="Search">Search</a>
              </div>
            </li>
            <li className="text-xl font-bold text-start text-gray-300">
              <div className='flex justify-start items-center gap-4 mb-4'><img src={ProfileIcon} className='w-[30px]'/>
              <a href="Profile">Profile</a></div>
            </li>
            <div className="h-[260px]"/>
            <li className="text-xl font-bold text-start text-gray-300">
              <div className='flex justify-start items-center gap-4 mb-4'><img src={SettingIcon} className='w-[30px]'/>
                <a href="Setting">Setting</a></div>
            </li>
            <li className="text-xl font-bold text-start text-gray-300">
              <div className='flex justify-start items-center gap-4 mb-4'><img src={LogoutIcon} className='w-[30px]'/>
              <a href="">Logout</a></div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
