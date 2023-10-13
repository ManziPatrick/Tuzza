import React, { useState, useEffect } from "react";
// eslint-disable-next-line

import { FaBars, FaTimes } from 'react-icons/fa';
import {  Img } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const checkWindowSize = () => {
    if (window.innerWidth <= 1050) {
      setIsMobile(true); // Adjust the breakpoint as needed
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);


 
 

  return (
    <>
      <header className={`   bg-black-900  fixed top-0  w-full grid grid-cols-2  z-20 ${props.className}`}>
      <Img
              className="  w-1/4   "
              src="images/tuzzalo.png"
              alt="tuuzalogoTwo"
            />
        <div className="container mx-auto flex items-center   px-4 py-2 sm:py-4">
          <div className="flex items-center">
            {!isMobile && (
              <>
            


                <div className="flex flex-wrap items-center">
              <div className="w-auto md:hidden lg:block">
                <ul className="flex items-center mr-10">
                  <li className="font-heading mr-9 text-white-A700 text-white-A700-900_7f hover:text-blue-200 text-[16px]" ><a href="/" style={{ color: 'white' }}> Home</a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue text-[16px]"><a href="/ " style={{ color: 'white' }}> Leadership</a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue text-[16px]"><a href="/" style={{ color: 'white' }}>Blogs</a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue text-[16px]"><a href="/" style={{ color: 'white' }}>Culture </a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue text-[16px]"><a href="#impact" style={{ color: 'white' }}> Impact</a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue text-[16px]"><a href="#contact" style={{ color: 'white' }}> Contact</a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue text-[16px]"> 
                  <button className="items-center justify-center px-1 py-2 min-w-[90px] max-w-[120px]  hover:bg-green-400 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  bg-green-600 group-hover:from-teal-300 "><a href="booking" style={{ color: 'white' }}> Book now</a>
                  </button></li>
                </ul>
              </div>
              </div>
              </>
            )}
            {isMobile && (
              <>
   <button
        className="block absolute right-1 bg-white-A700 z-20"
        onClick={toggleMenu}
      >
        {showMenu ? <FaTimes size={24} /> : <FaBars size={24}  />}
      </button>
              </>
            )}
          </div>
          {showMenu && isMobile && (
            <div className="block  absolute w-1/2 top-30 right-0">
            
            <div className="nav linkm z-10  mt-96 relative">
                 
                 <div className="navsiteta   bg-black-900 text-white-A700 h-96 ">
                 <div className="w-full block">
                <ul className="flex  flex-col items-center justify-center p-10 gap-5  mr-10">
                  <li className="font-heading mr-9 text-white-A700 text-center text-white-A700-900_7f hover:text-blue md:text-[12px] md:font-bold  md:ml-4 text-[16px] " ><a href="/" style={{ color: 'white' }}> Home</a></li>
                  <li className="font-heading mr-9 text-white-A700 text-center hover:text-blue  md:text-[12px] md:font-bold  md:ml-4 text-lg"><a href="/ " style={{ color: 'white' }}> Leadership</a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue-200  md:text-[12px] md:font-bold  md:ml-4 text-lg"><a href="/" style={{ color: 'white' }}>Blogs</a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue-200 md:text-[12px] md:font-bold  md:ml-4 text-lg"><a href="/" style={{ color: 'white' }}>Culture </a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue-200 md:text-[12px] md:font-bold  md:ml-4 text-lg"><a href="#impact" style={{ color: 'white' }}> Impact</a></li>
                  <li className="font-heading mr-9 text-white-A700 hover:text-blue-200  md:text-[12px] md:font-bold  md:ml-2 text-lg"><a href="#contact" style={{ color: 'white' }}> Contact</a></li>
                  <li className="font-heading mr-2    text-white-A700 hover:text-blue text-lg w-[80px]"> 
                  <a href="/booking" className="">
                  <button className=" py-2 px-1 text-white-A700 hover:bg-green-400 w-full overflow-hidden text-sm font-medium  rounded-lg   bg-green-600 group-hover:from-teal-300 "><a href="booking" style={{ color: 'white' }}> Book now</a>
                  </button> </a></li>
                </ul>
              </div>
        </div>
      </div>
   
            </div>
          )}
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
