import React from 'react';
import { useEffect } from 'react';
import Logo from '../../assets/logo.png';
import { MdOutlineSearch } from 'react-icons/md';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = () => {
  useEffect(() => {
    const checkbox = document.querySelector('#toggel');
    const html = document.querySelector('html');

    const handleDarkModeToggle = () => {
      html.classList.toggle('dark', checkbox.checked);
    };

    checkbox.addEventListener('click', handleDarkModeToggle);

    return () => {
      checkbox.removeEventListener('click', handleDarkModeToggle);
    };
  }, []);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              ShopeCar
            </a>
          </div>
          {/* sherc bar and button */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full  border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 "
              />
              <MdOutlineSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* order button */}
          <button onClick={() => alert('Ordring not available yet')} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4  rounded-full flex items-center gap-3 group">
            <span className="group-hover:block hidden transition-all duration-200">Order</span>
            <MdOutlineShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
          {/* dark mode */}
          <div className="relative">
            <label class="relative inline-flex items-center cursor-pointer" for="toggel">
              <input class="sr-only peer" id="toggel" value="" type="checkbox" />
              <div class="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['🌞'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌚'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
            </label>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
