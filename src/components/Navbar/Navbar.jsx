import React from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div>
      {/* upper navbar */}
      <div>
        <div className="flex items-center">
          <div>
            <a href="#" className="font-bold text-center">
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              Shoppe Car
            </a>
          </div>
          {/* sherc bar and button */}
          <div>
            <div className="group">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[100px] transition-all duration-300 rounded-full  border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 "
              />
            </div>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input class="sr-only peer" value="" type="checkbox" />
            <div class="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
          </label>
        </div>
      </div>
      {/* lower navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
