import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
// import BookingModal from "components/modal";

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  //   return null; 
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };


  return (
    <>
      <div className="bg-white-A700 relative flex flex-col font-worksans  mt-0 justify-end mx-auto pt-[9px] md:text-sm w-full">
        
          
            
            <Header className="" />
         
          <div className="flex flex-col justify-center md:justify-center w-full">
          <div className="h-[654px] md:px-5 relative w-full">
            <Img
              className="h-[654px] m-auto object-cover w-full"
              src="images/img_img15711.png"
              alt="img15711"
            />
            <div className="absolute bottom-[7%] flex flex-col gap-[42px] inset-x-[0] justify-start md:justify-center mx-auto w-1/2">
              <div className="bg-blue_gray-100_66 flex flex-col items-center justify-start p-[30px] sm:px-5 w-full">
                <Text
                  className="leading-[60.00px] mb-7 text-4xl sm:text-[28px]  mt-4 md:mb-0   md:text-lg   text-center tracking-[0.80px] md:lowercase md:tracking-normal  text-white-A700"
                  size="txtWorkSansRomanExtraBold49"
                >
                  <>
                    Welcome to TUUZA 
                  </>
                </Text>
              </div>
             <a href="#about">
              <Button
                className="border border-solid border-teal-600 cursor-pointer font-bold leading-[normal] md:w-full  md:ml-[0] ml-[359px] mr-[185px] text-center font-roboto  md:font-inter md:text-sm tracking-[-0.40px]"
                size="md"
              >
                Explore Tuuza
              </Button>
              </a>
            </div>
          </div>
          <Text
            className="mb-7 text-4xl sm:text-[28px]  mt-4 md:mb-0   md:text-lg text-black-900  text-center tracking-[0.80px] md:lowercase md:tracking-normal  "
            size="txtWorkSansBold48"
          >
            Welcome to Tuuza
          </Text>
          <Text
            className="mt-[30px]  text-center font-roboto  md:text-[22px] text-black-900  sm:font-roboto font-normal tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px]   "
            size="txtWorkSansRomanRegular24"
          >
            Tuuza is a unique community space for sports, culture, retreat,
            research, and development. <br /> Our mission revolves around uniting
            cultures, inspiring creativity and empowering connectivity.
          </Text>
          <div className="flex md:flex-col   md:gap-6 justify-around  mt-[135px] md:mt-12 md:px-5  md:w-full">
            <div>
            <Text
              className="italic text-5xl sm:text-[28px] md:text-[44px] text-center text-teal-600 tracking-[0.96px] md:lowercase md:tracking-normal  "
              size="txtWorkSansItalicExtraBold48"
            >
              201
            </Text>
          
            <Text
              className="text-xl md:text-[18px] font-bold text-black-900 text-center sm:font-roboto  tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] "
              size="txtWorkSansRomanBold24"
            >
              Workshops
            </Text> 
            </div>
            {/* <BookingModal isOpen={isModalOpen} onClose={closeModal} /> */}
            <div>

            <Text
              className="italic  text-5xl sm:text-[28px] md:text-[44px] text-center text-teal-600 tracking-[0.96px] md:lowercase md:tracking-normal uppercase"
              size="txtWorkSansItalicExtraBold48"
            >
              60
            </Text>
            
            <Text
              className="text-xl md:text-[18px] font-bold text-black-900 text-center sm:font-roboto  tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
              size="txtWorkSansRomanBold24"
            >
              Events Hosted
            </Text>
            </div>
            <div className="flex flex-col">
            <Text
              className="italic  text-5xl sm:text-[28px] md:text-[44px] text-center text-teal-600 tracking-[0.96px] md:lowercase md:tracking-normal uppercase"
              size="txtWorkSansItalicExtraBold48"
            >
              40+
            </Text>
          {/* </div> */}
         
           
            <Text
              className="text-xl md:text-[18px] font-bold text-black-900 text-center sm:font-roboto  tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase "
              size="txtWorkSansRomanBold24"
            >
              {" "}
              Employer
            </Text>
            </div >
          </div>
          <div className="bg-teal-600  items-center  mt-20   md:mt-9 p-32 sm:px-5 rounded-[51px] w-full" id="about">
            <div className=" grid   text-center grid-cols-2  md:grid-cols-1 gap-10  md:gap-2 justify-around ">
              <div className=" ">
                <Text
                  className="mb-7 text-4xl sm:text-[28px]  mt-4 md:mb-0   text-center md:text-lg text-black-900  tracking-[0.80px]  md:tracking-normal  "
                  size="txtWorkSansRomanBold40"
                >
                  Accommodation
                </Text>
              
                    <Text
                      className="leading-[30.00px] md:ml-[0] mt-5 text-black-900 md:text-[12px] text-center  font-roboto font-normal  md:tracking-normal sm:text-[12px]   md:w-full sm:w-full"
                      size="txtWorkSansRomanRegular24"
                    >
                      Tuuza is a unique community space for sports, <br />
                       culture,
                      retreat, research, and development. <br /> Our mission revolves
                      around uniting
                    </Text>
                    </div>
                    <div className="">
                      <Img
                        className="h-[300px] md:h-auto object-cover origin-center w-full"
                        src="images/img_img15281.png"
                        alt="img15281"
                      />
                    </div>
               
                  
                    <div className="flex flex-col md:gap-10 gap-[20px] justify-center">
                     
                      <Text
                        className="mb-7 text-4xl sm:text-[28px]  mt-4 md:mb-0   text-center md:text-lg text-black-900  tracking-[0.80px]  md:tracking-normal"
                        size="txtWorkSansRomanBold40"
                      >
                        conference rooms
                      </Text>
                      <Text
                        className="leading-[30.00px] md:ml-[0] mt-4 md:mb-0 text-black-900 text-center md:text-[12px] font-roboto font-normal  md:tracking-normal sm:text-[12px]  md:w-full sm:w-full"
                        size="txtWorkSansRomanRegular24"
                      >
                        Tuuza is a unique community space for sports, culture, <br />
                        retreat, research, and development. Our mission revolves <br />
                        around uniting{" "}
                      </Text>
                    </div>
                   <div>
                  
                      <Img
                        className="h-[281px] md:h-auto object-cover w-full"
                        src="images/img_img15351.png"
                        alt="img15351"
                      />
                      </div>
                   
           
               
              
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[21px] items-start justify-start max-w-[1369px] mt-[95px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-20  md:mt-0 mt-3.5 md:order-2 md:w-full">
             
             
                <Img
                  className="h-[300px] md:h-auto object-cover w-full"
                  src="images/img_img15431.png"
                  alt="img15431"
                />
             
              <Text
                className="mb-7 text-4xl sm:text-[28px]  mt-4 md:mb-0   text-center md:text-lg text-black-900  tracking-[0.80px]  md:tracking-normal"
                size="txtWorkSansRomanBold40"
              >
                bar and restorent
              </Text>
            </div>
            <div className="flex flex-col md:flex-1 gap-8 ">
              <Text
                className="mb-7 text-4xl sm:text-[28px]  mt-4 md:mb-0   text-center md:text-lg text-black-900  tracking-[0.80px]  md:tracking-normal"
                size="txtWorkSansRomanBold40"
              >
               cozine
              </Text>
              <Text
                className="font-roboto text-lg  md:text-[24px] text-black-900 text-center md:lowercase md:tracking-normal sm:text-[12px]  w-full"
                size="txtWorkSansRomanRegular24"
              >
                Tuuza is a unique community space for sports, culture, retreat,
                research, and development. Our mission revolves around uniting{" "}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-5 items-start justify-end md:ml-[0] ml-[124px] md:px-5 w-[88%] md:w-full">
            <Text
              className="leading-[30.00px] md:ml-[0] mt-10 text-black-900 text-center md:text-[12px] font-roboto font-normal md:lowercase md:tracking-normal sm:text-[12px]  w-[30%] md:w-full sm:w-full"
              size="txtWorkSansRomanRegular24"
            >
              Tuuza is a unique community space for sports, culture, retreat,
              research, and development. Our mission revolves around uniting{" "}
            </Text>
            <div className="flex flex-col items-center justify-start w-[65%] md:w-full">
              <Img
                className="h-[300px] md:h-auto object-cover w-full"
                src="images/img_img15621.png"
                alt="img15621"
              />
            </div>
          </div>
          <Text
            className="mb-7 text-4xl sm:text-[28px]  mt-4 md:mb-0   text-center md:text-lg text-black-900  tracking-[0.80px]  md:tracking-normal"
            size="txtWorkSansRomanBold40"
          >
            playgrounds
          </Text>
          <div className="flex font-roboto h-[520px]  md:h-[200px] justify-end max-w-[1352px] mt-3.5 mx-auto md:px-5 relative w-full">
            
            <Img
              className="inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle18.png"
              alt="rectangleEighteen"
            />
          </div>
          <div className="text-center mt-10">
          <Button
                className="border  border-solid text-teal-600 items-end  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                size="sm"
  onClick={() => {
    navigate("/gallery"); 
  }}
>
  View More

          </Button>
          </div>
          <div className="bg-teal-600 md:bg-white-A700 flex flex-col font-roboto items-center justify-start mt-[70px] md:mt-3 p-20 sm:px-5 rounded-[51px] w-full">
            
              <div className="flex  justify-end relative w-full">
               
             
              <div className="flex flex-col justify-center w-full">
  <Text
    className=" md:ml-[0] font-roboto text-lg sm:text-[18px] md:text-[24px] text-black-900 text-center sm:w-full" id="#Impact"
    size="txtRobotoItalicCondensedBold48"
  >
    “A unique experience that has left a lasting impact on our team.”
  </Text>
  <div className="grid md:grid-cols-1 grid-cols-3 md:gap-8  gap-8 items-center justify-around mt-20 w-full">
    <div className="card bg-white-A700 flex md:flex-1 flex-col items-center p-8 sm:px-5 shadow-md  md:w-full rounded-[51px]">
      <div className="rounded-full overflow-hidden w-16 h-16 md:ml-[0] ">
        <Img src="images/1.jpg" alt="rectangleTwo" className="w-full h-full object-cover" />
      </div>
      <Text className="leading-[18.00px] md:ml-[0] mt-10 text-black-900 text-center md:text-[12px] font-roboto font-normal">
        <>
          The team building activities were <br />
          inspiring and motivating!
        </>
      </Text>
      <Text className="md:ml-[0] mt-[94px] md:mt-3 text-black-900 font-roboto font-normal" size="txtRobotoRomanSemiBold20">
        Samantha Brown
      </Text>
    </div>
    
      <div className="card bg-white-A700 flex md:flex-1 flex-col items-center p-8 sm:px-5 shadow-md  md:w-full rounded-[51px]">
        <div className="rounded-full overflow-hidden  md:h-auto w-1/4 h-12 md:ml-[0]">
          <Img src="images/2.jpg" alt="rectangleTwo_One" className="w-full h-full object-cover" />
        </div>
        <Text className="leading-[18.00px] md:ml-[0] mt-[38px] text-black-900 text-center md:text-[12px] font-roboto font-normal w-4/5">
          <>
            Tuuza's cuisine left a delicious impression on us!
          </>
        </Text>
        <Text className="md:ml-[0] mt-[94px] md:mt-3 text-black-900 text-center  font-roboto font-normal" size="txtRobotoRomanSemiBold20">
          Samantha Brown
        </Text>
      </div>
      <div className="card bg-white-A700 flex md:flex-1 flex-col items-center p-8 sm:px-5 shadow-md  md:w-full rounded-[51px] ">
        <div className="rounded-full overflow-hidden w-16 h-16 md:h-auto md:ml-[0]">
          <Img src="images/img_rectangle2_40x67.png" alt="rectangleTwo_Two" className="w-full h-full object-cover" />
        </div>
        <Text className="leading-[18.00px] md:text-[12px] md:ml-[0] mt-[38px] text-center text-black-900 font-roboto font-normal w-4/5">
          A breathtaking, eco-friendly stay that I’ll never forget.
        </Text>
        <Text className="md:ml-[0] mt-[94px] text-black-900 font-roboto font-normal" size="txtRobotoRomanSemiBold20">
          Samantha Brown
        </Text>
     
    </div>
  </div>
</div>

                </div>
              </div>
              <div className="">
                    <Text  className=" mb-7 text-4xl sm:text-[28px]  mt-4 md:mb-0   md:text-lg text-black-900 text-center"
                      size="txtRobotoRomanExtraBold48"
                      onClick={() => {
                        navigate("/booking"); 
                      }}
                    >
                      join us
                    </Text>
                    <Text
                      className="leading-[30.00px] md:ml-[0] mt-5 text-black-900 md:text-[12px] text-center  font-roboto font-normal  md:tracking-normal sm:text-[12px]   md:w-full sm:w-full"
                      size="txtRobotoRomanRegular20"
                    >
                      Embark on a journey of inspiration and  <br />  connection at the
                      Tuuza Leadership and <br /> Cultural Development Institute.
                    </Text>
          </div>
          <div className="flex sm:flex-col  font-worksans items-center  justify-center gap-4 md:ml-[0]  mt-[37px] md:px-2 mb-7 md:justify-center md:w-full">
           <Button
                className="border border-solid border-teal-600  text-teal-600 items-end  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                size="sm"
              
                onClick={() => navigate("/booking")}
             
            >
             
              Book now
            </Button>
            <Button
                className="border border-solid text-teal-600 items-end  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                size="sm"
              
              onClick={() => navigate("/")}
              color="gray_900_01"
             
            >
              Explore more
            </Button> 
            
         
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
