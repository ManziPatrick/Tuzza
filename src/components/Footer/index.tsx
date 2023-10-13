import { Img } from 'components/Img';
import React from 'react';

function Footer() {
  return (
    <section className="relative py-10 bg-black bg-slate-50 overflow-hidden">
  
  <div className="relative z-10 container mx-auto px-4">
    <div className="flex md:flex-wrap -m-6">
      <div className="w-full  p-6">
        <div className="flex  flex-col justify-between  w-full md:max-w-sm">
          <div className="mb-11">
          <Img
              className="  w-full   "
              src="images/tuzzalo.png"
              alt="tuuzalogoTwo"
            />
          </div>
         
        </div>
      </div>
      <div className="md:w-full w-1/2 lg:w-2/12 p-6">
        <div className="h-full">
          <h3 className="mb-7 font-heading font-medium text-base text-gray-500 tracking-px">Company</h3>
          <ul>
            <li className="mb-4">
              <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="/">
                About us
              </a>
            </li>
            <li className="mb-4">
              <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="/privacy-policy">
                Privacy policy
              </a>
            </li>
            <li className="mb-4">
              <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="/terms-and-conditions">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="/">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/12 p-6">
        <div className="h-full">
          <h3 className="mb-7 font-heading font-medium text-base text-gray-500 tracking-px">Support</h3>
          <ul>
            <li className="mb-4">
              <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="/">
                Account
              </a>
            </li>
            <li className="mb-4">
              <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="/">
                Help
              </a>
            </li>
            <li className="mb-4">
              <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="/">
                Contact Us
              </a>
            </li>
            <li>
              <a className="font-heading font-medium text-base text-white hover:text-gray-200" href="/">
                Customer Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-3/12 p-6">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="mb-7 font-heading font-medium text-base text-gray-500 tracking-px">Contact Info</h3>
            <ul className="mb-6">
              <li className="mb-4 font-heading font-medium text-base text-white"></li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center -ml-5">
            <div className="w-auto p-5">
              <a href="/">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                </svg>
              </a>
            </div>
            <div className="w-auto p-5">
              <a href="/">
                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                </svg>
              </a>
            </div>
            <div className="w-auto p-5">
              <a href="/">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                 
                </svg>
              </a>
            </div>
            <div className="w-auto p-5">
              <a href="/">
                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                 
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p className="  text-center text-gray-400 text-sm">© Copyright 2023. All Rights Reserved by Tuzza.</p>
</section>

  
  )
}

export default Footer;