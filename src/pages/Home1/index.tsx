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
      <div className="bg-white-A700 flex flex-col font-worksans  mt-0 justify-end mx-auto pt-[9px] md:text-sm w-full">
        
          
            
            <Header className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center md:mt-0  w-full" />
         
          <div className="flex flex-col justify-start w-full">
          <div className="h-[654px] md:px-5 relative w-full">
            <Img
              className="h-[654px] m-auto object-cover w-full"
              src="images/img_img15711.png"
              alt="img15711"
            />
            <div className="absolute bottom-[7%] flex flex-col gap-[42px] inset-x-[0] justify-start md:justify-center mx-auto w-1/2">
              <div className="bg-blue_gray-100_66 flex flex-col items-center justify-start p-[30px] sm:px-5 w-full">
                <Text
                  className="leading-[60.00px] my-[15px] md:leading-[40.00px] sm:text-[16px] md:text-[18px] text-[49px] text-center text-white-A700"
                  size="txtWorkSansRomanExtraBold49"
                >
                  <>
                    Welcome to Tuuza conference
                    <br /> and recreation{" "}
                  </>
                </Text>
              </div>
             
              <Button
                className="border border-solid border-teal-600 cursor-pointer font-bold leading-[normal] md:w-full  md:ml-[0] ml-[359px] mr-[185px] text-center text-xl md:font-inter md:text-sm tracking-[-0.40px]"
                size="md"
              >
                Explore Tuuza
              </Button>
            </div>
          </div>
          <Text
            className="md:ml-[0]  mt-[41px] text-5xl sm:text-[28px] md:text-[44px] text-black-900 text-center tracking-[-0.96px]"
            size="txtWorkSansBold48"
          >
            Welcome to Tuuza
          </Text>
          <Text
            className="mt-[30px]  text-center text-xl md:text-[22px] text-black-900  sm:text-xl tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase  "
            size="txtWorkSansRomanRegular24"
          >
            Tuuza is a unique community space for sports, culture, retreat,
            research, and development. Our mission revolves around uniting
            cultures, inspiring creativity and empowering connectivity.
          </Text>
          <div className="flex md:flex-col   md:gap-6 justify-around  mt-[135px] md:mt-12 md:px-5  md:w-full">
            <div>
            <Text
              className="italic text-5xl sm:text-[28px] md:text-[44px] text-center text-teal-600 tracking-[0.96px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
              size="txtWorkSansItalicExtraBold48"
            >
              201
            </Text>
          
            <Text
              className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
              size="txtWorkSansRomanBold24"
            >
              Workshops
            </Text> 
            </div>
            {/* <BookingModal isOpen={isModalOpen} onClose={closeModal} /> */}
            <div>

            <Text
              className="italic  text-5xl sm:text-[28px] md:text-[44px] text-center text-teal-600 tracking-[0.96px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
              size="txtWorkSansItalicExtraBold48"
            >
              60
            </Text>
            
            <Text
              className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
              size="txtWorkSansRomanBold24"
            >
              Events Hosted
            </Text>
            </div>
            <div className="flex flex-col">
            <Text
              className="italic  text-5xl  md:text-[44px] text-center text-teal-600  md:lowercase md:tracking-normal sm:text-[12px] uppercase"
              size="txtWorkSansItalicExtraBold48"
            >
              40+
            </Text>
          {/* </div> */}
         
           
            <Text
              className=" text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
              size="txtWorkSansRomanBold24"
            >
              {" "}
              Leadership
            </Text>
            </div >
          </div>
          <div className="bg-teal-600 flex flex-col items-center justify-start mt-[122px] md:mt-9 p-[20px] sm:px-5 rounded-[51px] w-full">
            <div className="flex  items-center justify-around  mb-3 mt-[50px]  md:px-5 w-full">
              <div className="flex flex-col justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[45px] sm:text-xl md:text-[28px] text-[40px] text-black-900 text-left   md:text-center tracking-[2.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
                  size="txtWorkSansRomanBold40"
                >
                  accommodation
                </Text>
                <div className="flex flex-col md:gap-10 gap-[20px] items-center justify-start w-full">
                  <div className="flex md:flex-col  flex-row md:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-2xl md:text-[22px] w-3/2 mt-4 text-black-900 text-center sm:text-xl tracking-[3.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase w-1/2"
                      size="txtWorkSansRomanRegular24"
                    >
                      Tuuza is a unique community space for sports, culture,
                      retreat, research, and development. Our mission revolves
                      around uniting
                    </Text>
                    <div className="bg-blue_gray-100 flex flex-col items-center justify-start">
                      <Img
                        className="h-[300px] md:h-auto object-cover w-full"
                        src="images/img_img15281.png"
                        alt="img15281"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row  items-center justify-around w-full">
                    <div className="flex flex-col md:gap-10 gap-[20px] justify-start">
                      <Text
                        className="md:ml-[0] sm:text-xl md:text-[28px] text-[40px] text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
                        size="txtWorkSansRomanBold40"
                      >
                        conference rooms
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center  pb-4 sm:text-xl tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase w-3/2 sm:w-full"
                        size="txtWorkSansRomanRegular24"
                      >
                        Tuuza is a unique community space for sports, culture,
                        retreat, research, and development. Our mission revolves
                        around uniting{" "}
                      </Text>
                    </div>
                    <div className="bg-blue_gray-100 flex md:flex-1 flex-col items-center justify-start mb-1.5 w-[65%] md:w-full">
                      <Img
                        className="h-[281px] md:h-auto object-cover w-full"
                        src="images/img_img15351.png"
                        alt="img15351"
                      />
                    </div>
                  </div>
                </div>
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
                className="sm:text-xl md:text-[28px] text-[40px] text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
                size="txtWorkSansRomanBold40"
              >
                bar and restorent
              </Text>
            </div>
            <div className="flex flex-col md:flex-1 gap-8 ">
              <Text
                className="md:ml-[0]  sm:text-xl md:text-[28px] text-[40px] text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
                size="txtWorkSansRomanBold40"
              >
                kitchen
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl  tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase w-full"
                size="txtWorkSansRomanRegular24"
              >
                Tuuza is a unique community space for sports, culture, retreat,
                research, and development. Our mission revolves around uniting{" "}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-5 items-start justify-end md:ml-[0] ml-[124px] md:px-5 w-[88%] md:w-full">
            <Text
              className="md:mt-0 mt-12 text-2xl  md:text-[22px] text-black-900 text-center sm:text-xl tracking-[0.48px] md:lowercase md:tracking-normal sm:text-[12px] uppercase w-[30%] md:w-full sm:w-full"
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
            className="md:ml-[0] mt-3 sm:text-xl md:text-[28px] text-[40px]  text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
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
                className="border border-solid hover:bg-slate-400 border-teal-600 cursor-pointer font-bold leading-[normal]   text-center text-xl tracking-[-0.40px]"
                size="sm"
  onClick={() => {
    navigate("/gallary"); 
  }}
>
  View More

          </Button>
          </div>
          <div className="bg-teal-600 md:bg-white-A700 flex flex-col font-roboto items-center justify-start mt-[70px] md:mt-3 p-20 sm:px-5 rounded-[51px] w-full">
            
              <div className="flex  justify-end relative w-full">
               
             
              <div className="flex flex-col justify-center w-full">
  <Text
    className="italic md:ml-[0] text-5xl sm:text-[28px] md:text-[28px] text-blue_gray-900 text-center sm:w-full"
    size="txtRobotoItalicCondensedBold48"
  >
    “A unique experience that has left a lasting impact on our team.”
  </Text>
  <div className="flex md:flex-col md:gap-8 items-center justify-around mt-20 w-full">
    <div className="card bg-white-A700 flex md:flex-1 flex-col items-center p-8 sm:px-5 shadow-md w-[28%] md:w-full rounded-[51px]">
      <div className="rounded-full overflow-hidden w-16 h-16 md:ml-[0] sm:w-1/5">
        <Img src="images/1.jpg" alt="rectangleTwo" className="w-full h-full object-cover" />
      </div>
      <Text className="leading-[18.00px] md:ml-[0] mt-10 text-black-900 md:text-[12px] text-xl">
        <>
          The team building activities were <br />
          inspiring and motivating!
        </>
      </Text>
      <Text className="md:ml-[0] mt-[94px] md:mt-3 text-black-900 text-xl" size="txtRobotoRomanSemiBold20">
        Samantha Brown
      </Text>
    </div>
    <div className="card flex md:flex-1 md:flex-col justify-around md:gap-10 items-center md:w-full">
      <div className="card bg-white-A700 flex flex-col rounded-[51px] items-center justify-center p-8 sm:px-5 shadow-md w-[44%] ms:w-full md:w-full">
        <div className="rounded-full overflow-hidden  md:h-auto w-1/4 h-12 md:ml-[0]">
          <Img src="images/2.jpg" alt="rectangleTwo_One" className="w-full h-full object-cover" />
        </div>
        <Text className="leading-[18.00px] md:ml-[0] mt-[38px] text-black-900 md:text-[12px] text-xl w-4/5">
          <>
            Tuuza's cuisine left a delicious impression on us!
          </>
        </Text>
        <Text className="md:ml-[0] mt-[94px] md:mt-3 text-black-900 text-center  text-xl" size="txtRobotoRomanSemiBold20">
          Samantha Brown
        </Text>
      </div>
      <div className="card bg-white-A700 flex flex-col rounded-[51px] justify-center p-8 sm:px-5 items-center shadow-md w-[44%] md:w-full">
        <div className="rounded-full overflow-hidden w-16 h-16 md:h-auto md:ml-[0]">
          <Img src="images/img_rectangle2_40x67.png" alt="rectangleTwo_Two" className="w-full h-full object-cover" />
        </div>
        <Text className="leading-[18.00px] md:text-[12px] md:ml-[0] mt-[38px] text-black-900 text-xl w-4/5">
          A breathtaking, eco-friendly stay that I’ll never forget.
        </Text>
        <Text className="md:ml-[0] mt-[94px] text-black-900 text-xl" size="txtRobotoRomanSemiBold20">
          Samantha Brown
        </Text>
      </div>
    </div>
  </div>
</div>

                </div>
              </div>
              <div className="">
                    <Text  className=" mb-7 text-4xl sm:text-[28px]  mt-4 md:text-[44px] text-[64px] text-black-900 text-center"
                      size="txtRobotoRomanExtraBold48"
                    >
                      join us
                    </Text>
                    <Text
                      className="leading-[40.00px] md:leading-[20px] md:ml-[0]  mt-[9px] text-black-900 text-center"
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
              
              // onClick={openModal}
             
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
