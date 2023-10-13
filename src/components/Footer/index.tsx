import { Img } from 'components/Img';
import React from 'react';

function Footer() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
  <img className="absolute bottom-0 left-0" src="{radial2}" alt="" />
  <div className="relative z-10 container mx-auto px-4">
    <div className="flex md:flex-wrap -m-6">
      <div className="w-full  p-6">
        <div className="flex md:flex-col justify-between h-full w-full md:max-w-sm">
          <div className="mb-11">
          <Img
              className="  w-1/4   "
              src="images/tuzzalo.png"
              alt="tuuzalogoTwo"
            />
          </div>
          <div>
            <p className="mb-14 text-gray-200 text-sm">
              Build your tech career from the ground up with our comprehensi  training.
            </p>
            <p className="text-gray-400 text-sm">© Copyright 2023. All Rights Reserved by  Bootcamp.</p>
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
                  <path
                    d="M13.6488 1.58924C13.137 1.81672 12.5967 1.9589 12.028 2.0442C12.5967 1.70298 13.0517 1.16271 13.2507 0.508707C12.7105 0.821493 12.1133 1.04897 11.4593 1.19115C10.9475 0.650883 10.2082 0.309662 9.41201 0.309662C7.87652 0.309662 6.62537 1.5608 6.62537 3.0963C6.62537 3.32378 6.65381 3.52283 6.71068 3.72187C4.40744 3.60813 2.33168 2.49916 0.938358 0.793058C0.710877 1.21958 0.568702 1.67455 0.568702 2.18638C0.568702 3.15317 1.0521 4.00622 1.81985 4.51805C1.36488 4.48962 0.938358 4.37588 0.540266 4.17683V4.20527C0.540266 5.57015 1.50706 6.70755 2.78664 6.96347C2.55916 7.02034 2.30324 7.04877 2.04733 7.04877C1.87672 7.04877 1.67767 7.02034 1.50706 6.9919C1.87672 8.10087 2.90038 8.92549 4.12309 8.92549C3.15629 9.66480 1.96202 10.1198 0.654007 10.1198C0.426526 10.1198 0.199046 10.1198 0 10.0913C1.25114 10.8875 2.70133 11.3425 4.2937 11.3425C9.44045 11.3425 12.2555 7.07721 12.2555 3.38065C12.2555 3.26691 12.2555 3.12473 12.2555 3.01099C12.7958 2.64134 13.2792 2.15794 13.6488 1.58924Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="w-auto p-5">
              <a href="/">
                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.34923 14.8715V8.08792H0.0664062V5.44422H2.34923V3.49457C2.34923 1.23201 3.73112 0 5.74948 0C6.71629 0 7.54722 0.0719815 7.78937 0.104155V2.46866L6.38954 2.4693C5.29184 2.4693 5.0793 2.9909 5.0793 3.75633V5.44422H7.6972L7.35634 8.08792H5.07929V14.8715H2.34923Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="w-auto p-5">
              <a href="/">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.78828 1.49101C10.9976 1.49101 11.2592 1.49928 12.132 1.53908C12.6568 1.5455 13.1765 1.64186 13.6687 1.82396C14.0257 1.96161 14.3498 2.17247 14.6203 2.44298C14.8908 2.71348 15.1017 3.03763 15.2393 3.39456C15.4214 3.88675 15.5178 4.40652 15.5242 4.93127C15.5636 5.80404 15.5723 6.06568 15.5723 8.275C15.5723 10.4843 15.564 10.746 15.5242 11.6187C15.5178 12.1435 15.4214 12.6633 15.2393 13.1554C15.1017 13.5124 14.8908 13.8365 14.6203 14.107C14.3498 14.3775 14.0257 14.5884 13.6687 14.726C13.1765 14.9081 12.6568 15.0045 12.132 15.0109C11.2596 15.0503 10.998 15.059 8.78828 15.059C6.57857 15.059 6.31693 15.0507 5.44455 15.0109C4.91979 15.0045 4.40003 14.9081 3.90784 14.726C3.55091 14.5884 3.22676 14.3775 2.95626 14.107C2.68575 13.8365 2.47489 13.5124 2.33724 13.1554C2.15513 12.6633 2.05878 12.1435 2.05236 11.6187C2.01295 10.746 2.00428 10.4843 2.00428 8.275C2.00428 6.06568 2.01256 5.80404 2.05236 4.93127C2.05878 4.40652 2.15513 3.88675 2.33724 3.39456C2.47489 3.03763 2.68575 2.71348 2.95626 2.44298C3.22676 2.17247 3.55091 1.96161 3.90784 1.82396C4.40003 1.64186 4.91979 1.5455 5.44455 1.53908C6.31732 1.49967 6.57896 1.49101 8.78828 1.49101ZM8.78828 0C6.54232 0 6.25940 0.00945666 5.37678 0.0496476C4.69000 0.0633078 4.01052 0.193342 3.36723 0.43422C2.81539 0.642135 2.31556 0.967957 1.90262 1.38895C1.48125 1.80204 1.15515 2.30215 0.947104 2.85435C0.706226 3.49764 0.576192 4.17712 0.562531 4.86389C0.523129 5.74573 0.513672 6.02864 0.513672 8.27461C0.513672 10.5206 0.523129 10.8035 0.563320 11.6861C0.576980 12.3729 0.707014 13.0524 0.947892 13.6957C1.155710 14.2478 1.481530 14.7479 1.90262 15.1610C2.31579 15.5821 2.81590 15.9080 3.36802 16.1158C4.01131 16.3567 4.69079 16.4867 5.37757 16.5004C6.26019 16.5398 6.54192 16.5500 8.78907 16.5500C11.03620 16.5500 11.31790 16.5405 12.20060 16.5004C12.88730 16.4867 13.56680 16.3567 14.21010 16.1158C14.75960 15.9028 15.25860 15.5774 15.67520 15.1606C16.09180 14.7437 16.41680 14.2445 16.62950 13.6949C16.87030 13.0516 17.00040 12.3721 17.01400 11.6853C17.05320 10.8027 17.06260 10.5198 17.0626 8.27375C17.06260 6.02770 17.05320 5.74480 17.01400 4.86120C17.00040 4.17444 16.87030 3.49496 16.62950 2.85168C16.41700 2.30061 16.09100 1.80151 15.67520 1.38843C15.25860 0.975272 14.75940 0.649446 14.20680 0.437762C13.56260 0.197333 12.88330 0.0673123 12.19650 0.0536514C11.31380 0.0141677 11.03200 0 8.78828 0ZM11.8107 8.27461C11.8107 9.96463 11.7411 10.2620 11.5361 10.5381C11.4349 10.6713 11.3241 10.7986 11.2044 10.9184C11.0846 11.0382 10.9573 11.1490 10.8241 11.2502C10.5479 11.4542 10.2505 11.5237 8.78828 11.5237C7.32602 11.5237 7.02863 11.4542 6.75238 11.2502C6.61916 11.1490 6.49187 11.0382 6.37210 10.9184C6.25233 10.7986 6.14153 10.6713 6.04028 10.5381C5.83528 10.2620 5.76575 9.96463 5.76575 8.27461C5.76575 6.58459 5.83528 6.28721 6.04028 6.01100C6.14153 5.87776 6.25233 5.75049 6.37210 5.63071C6.49187 5.51093 6.61916 5.40013 6.75238 5.29888C7.02863 5.09388 7.32602 5.02435 8.78828 5.02435C10.2505 5.02435 10.5479 5.09388 10.8241 5.29888C10.9573 5.40013 11.0846 5.51093 11.2044 5.63071C11.3241 5.75049 11.4349 5.87776 11.5361 6.01100C11.7411 6.28721 11.8107 6.58459 11.8107 8.27461Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="w-auto p-5">
              <a href="/">
                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.2285 0H0.771494C0.346498 0 0 0.346498 0 0.771494V13.2285C0 13.6535 0.346498 14 0.771494 14H11.2285C11.6535 14 12 13.6535 12 13.2285V0.771494C12 0.346498 11.6535 0 11.2285 0ZM4.80139 11.2124V9.24563H2.50079V11.2124H0.932652V7.29404H4.80139V9.24563H3.20147V9.24563H3.20147V9.24563H4.80139V11.2124ZM9.19873 7.29479V7.29404H7.60057V7.29404H7.60057V11.2124H5.99967V9.24563H4.39975V11.2124H2.83304V7.29479H7.19931L7.60057 7.29404H9.19873V7.29479ZM9.19873 6.41236H7.60057H5.99967H4.39975H2.83304V2.79554H4.39975H5.99967H7.60057H9.19873V6.41236Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  
  )
}

export default Footer;