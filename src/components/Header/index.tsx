import React, { useState, useEffect } from "react";
import { Text } from "components";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Img } from "components";

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
      <header className={` bg-white-A700 fixed top-0  grid grid-cols-2  z-20 ${props.className}`}>
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
                  <li className="font-heading mr-9 text-black-900_7f text-black-900_7f-900_7f hover:text-gray-200 text-lg " ><a href="/" style={{ color: 'black' }}> Home</a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="/ leadership" style={{ color: 'black' }}> Leadership</a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="/blogs" style={{ color: 'black' }}>Blogs</a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="/culture" style={{ color: 'black' }}>Culture </a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="#impact" style={{ color: 'black' }}> Impact</a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="#contact" style={{ color: 'black' }}> Contact</a></li>
                </ul>
              </div>
              </div>
              </>
            )}
            {isMobile && (
              <>
   <button
        className="block absolute right-10 z-20"
        onClick={toggleMenu}
      >
        {showMenu ? <FaTimes size={24} /> : <FaBars size={24}  />}
      </button>
              </>
            )}
          </div>
          {showMenu && isMobile && (
            <div className="block  absolute w-1/3 top-30 right-0">
            
            <div className="nav linkm z-10  mt-96 relative">
                 
                 <div className="navsiteta  bg-white-A700 h-96 ">
                 <div className="w-auto block">
                <ul className="flex  flex-col items-center mr-10">
                  <li className="font-heading mr-9 text-black-900_7f text-black-900_7f-900_7f hover:text-gray-200 text-lg " ><a href="/" style={{ color: 'black' }}> Home</a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="/ leadership" style={{ color: 'black' }}> Leadership</a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="/blogs" style={{ color: 'black' }}>Blogs</a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="/culture" style={{ color: 'black' }}>Culture </a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="#impact" style={{ color: 'black' }}> Impact</a></li>
                  <li className="font-heading mr-9 text-black-900_7f hover:text-gray-200 text-lg"><a href="#contact" style={{ color: 'black' }}> Contact</a></li>
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
