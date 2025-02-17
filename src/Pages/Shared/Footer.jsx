import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/images/logo.jpg';
export default function Footer() {
    return (
      <footer className="bg-stone-800 text-white">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start">
          {/* Left Section - Logo & Social Media */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Black Hut Logo"
                className="w-2/3 h-full mr-2"
              />
              
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white text-xl py-2 px-3 bg-red-700 hover:text-sky-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white text-xl py-2 px-2 bg-red-700 hover:text-sky-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white text-xl py-2 px-2 bg-red-700 hover:text-sky-700">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
  
          {/* Middle Section - Links */}
          <div className="md:w-1/3 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-500">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">Our Projects</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">Contact Us</a>
              </li>
            </ul>
          </div>
  
          {/* Right Section - Contact Details */}
          <div className="md:w-1/3 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
            <p className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
              B-39, First Floor, Middle Circle, Connaught Place, New Delhi-110001
            </p>
            <p className="flex items-center mt-2">
              <i className="fas fa-phone-alt mr-2 text-red-500"></i>
              +91-9911893707, +91-9310827525
            </p>
            <p className="flex items-center mt-2">
              <i className="fas fa-envelope mr-2 text-red-500"></i>
              SALES@CANADIANCRAFT.IN
            </p>
          </div>
        </div>
  
        {/* Bottom Strip */}
        <div className="bg-red-600 text-center py-3 text-sm">
          ©2025. Leading Wooden Homes Industry. All Rights Reserved.
        </div>
      </footer>
    );
  }
  