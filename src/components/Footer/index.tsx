import { Img } from 'components/Img';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <section className="relative py-10 bg-black bg-black-900 overflow-hidden " id='#contact'>
  
  <div className="relative z-10 container mx-auto px-4">
    <div className="flex md:flex-wrap -m-6">
      <div className="w-full  p-6">
        <div className="flex  flex-col justify-between  w-full md:max-w-sm">
          <div className="mb-11">
          <Img
              className=" w-1/2   "
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
              <a className="font-heading font-medium text-base  text-white-A700 text-white hover:text-blue-200" href="#about">
                About us
              </a>
            </li>
            <li className="mb-4">
              <a className="font-heading font-medium text-base  text-white-A700 text-white hover:text-blue-200" href="/">
                Privacy policy
              </a>
            </li>
            <li className="mb-4">
              <a className="font-heading font-medium text-base  text-white-A700 text-white hover:text-blue-200" href="/">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="font-heading font-medium text-base  text-white-A700 text-white hover:text-blue-200" href="/">
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
              <a className="font-heading font-medium text-base  text-white-A700 text-white hover:text-blue-200" href="/">
                Account
              </a>
            </li>
            <li className="mb-4">
              <a className="font-heading font-medium text-base  text-white-A700 text-white hover:text-blue-200" href="/">
                Help
              </a>
            </li>
            <li className="mb-4">
              <a className="font-heading font-medium text-base  text-white-A700 text-white hover:text-blue-200" href="/">
                Contact Us
              </a>
            </li>
            <li>
              <a className="font-heading font-medium text-base  text-white-A700 text-white hover:text-blue-200" href="/">
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
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" clip-rule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"/></svg>
              </a>
            </div>
            <div className="w-auto p-5">
              <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
              </a>
            </div>
            <div className="w-auto p-5">
              <a href="www.instagram.com/tuuza__inn/?hl=en" target='www.instagram.com/tuuza__inn/?hl=en'>
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
                 
             
              </a>
            </div>
            <div className="w-auto p-5">
              <a href="www.instagram.com/tuuza__inn/?hl=en" target=''>
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