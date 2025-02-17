import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from '../../assets/images/logo.jpg';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);

  return (
    <header className="bg-white py-3 md:fixed z-40 top-0 w-full">
      <nav className="flex justify-between items-end w-[89%] mx-auto py-2 z-40">
        {/* Logo */}
        <div>
         <img src={logo} alt="logo" className="w-[150px]"/>
        </div>

        {/* Navigation Links */}
        

        {/* Menu Toggle & Button */}
        <div className="flex items-center gap-6">
          

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl cursor-pointer md:hidden"
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`nav-links md:static absolute bg-slate-100 md:bg-white md:min-h-fit min-h-[50vh] left-0 ${
            menuOpen ? "top-[60px]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5 z-40 transition-all duration-300`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vh] gap-3">
            <li>
              <a className="text-gray-800 hover:text-red-700 font-semibold nav-link text-lg" href="#">
                Home
              </a>
            </li>
            <li>
              <a className=" hover:text-red-700 font-semibold nav-link text-lg" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className=" hover:text-red-700 font-semibold nav-link text-lg" href="#">
                Our Project
              </a>
            </li>
            <li>
              <a className=" hover:text-red-700 font-semibold nav-link text-lg" href="#">
                Contact Us
              </a>
            </li>          
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
