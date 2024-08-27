import Banner from '../assets/pic/banner.jpg'

function Header() {
  return (
    <div>
        <div className='flex w-full h-[613px]' style={{backgroundImage:`url(${Banner})`,backgroundSize:'cover'}}>
        </div>
    </div>
  )
}

export default Header