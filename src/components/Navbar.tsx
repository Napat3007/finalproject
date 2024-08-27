
function Navbar() {
  return (
    <div>
      <div className="flex flex-row items-center gap-10 ml-10 mt-9 border-2">
        <h1 className="font-bold text-[40px] border-2">PassionCafe</h1>
        <ul className="flex flex-row gap-10 text-[20px] font-semibold">
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Search">Search</a>
          </li>
          <li>
            <a href="Profile">Profile</a>
          </li>
          <li>
            <a href="Setting">Setting</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
