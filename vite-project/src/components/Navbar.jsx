import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-[#434343] py-20 px-4 flex items-center justify-between">
      {/* Logo (replace 'logo.jpg' with your actual logo image file) */}
      <div className="ml-20">
        <img src={logo} alt="Logo" className="h-30 w-auto" />
      </div>

      {/* Navigation links */}
      <div className="flex items-center space-x-20 mr-20">
        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
          MENU
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
          ABOUT US
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;