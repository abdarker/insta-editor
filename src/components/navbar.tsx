import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white z-50 w-full border-b">
      <div className="container flex h-14 items-center mx-auto px-4">
        <div className="mr-4">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex justify-center items-center">
              <img src={logo} alt="" className="h-12" />
            </div>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            {/* Navigation links */}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center"></nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
