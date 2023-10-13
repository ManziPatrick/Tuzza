import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import Header from "components/Header";
import Footer from "components/Footer";

const DesktopThreePage: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("md:px-5  md:w-full");

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage("md:px-5  md:w-full");
    setShowModal(false);
  };

  const downloadImage = () => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage;
      link.download = "downloaded_image.png";
      link.click();
    }
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-worksans items-center justify-end mx-auto pt-1.5 w-full">
      <Header className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center md:mt-0  w-full" />
        
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
                    Welcome gallary
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
          <div className=" m-2 md:ml-4 md:mr-5">
          <div className=" grid grid-cols-3 md:grid-cols-1 gap-3 m-auto w-full">
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img15281.png"
              alt="rectangleThirtyOne"
            />
            <Img
              className="md:px-5  md:w-full"
              src="images/img_rectangle32.png"
              alt="rectangleThirtyTwo"
            />
            <Img
              className="md:px-5  md:w-full"
              src="images/img_rectangle33.png"
              alt="rectangleThirtyThree"
            />
          </div>

          <Text
            className="md:ml-[0] sm:text-xl md:text-[28px] text-[40px] text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
            size="txtWorkSansRomanBold40"
          >
            accommodation
          </Text>
          <div className="grid relative grid-cols-4 md:grid-cols-1 gap-3 m-auto w-full">
            
              
              
           
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_img16301.png"
                      alt="img16301"
                    />
                   
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_rectangle28.png"
                        alt="rectangleTwentyEight"
                      />
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_img16461.png"
                        alt="img16461"
                      />
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_rectangle31.png"
                        alt="rectangleThirtyOne_One"
                      />

                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_img15432.png"
                        alt="img15432"
                      />
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_img15501.png"
                        alt="img15501"
                      />
                   
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_img15801.png"
                      alt="img15801"
                    />
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_img16151.png"
                      alt="img16151"
                    />
                 
           
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_rectangle27.png"
                    alt="rectangleTwentySeven"
                  />
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_rectangle28_144x247.png"
                    alt="rectangleTwentyEight_One"
                  />
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_rectangle29.png"
                    alt="rectangleTwentyNine"
                  />
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_rectangle30.png"
                    alt="rectangleThirty"
                  />
                </div>
              <Text
                className="md:ml-[0] sm:text-xl md:text-[28px] text-[40px] text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
                size="txtWorkSansRomanBold40"
              >
                conference rooms
              </Text>
                <div className="grid grid-cols-4 md:grid-cols-1 gap-3 m-auto w-full">
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_rectangle27_156x253.png"
                      alt="rectangleTwentySeven_One"
                    />
               
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_img15481.png"
                    alt="img15481"
                  />
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_img15461.png"
                    alt="img15461"
                  />
                  <Img
                    className="h-[147px] md:h-auto md:mt-0 mt-[5px] object-cover"
                    src="images/img_img15451.png"
                    alt="img15451"
                  />
                </div>
                  <Text
                    className="mt-[84px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[0.80px] uppercase"
                    size="txtWorkSansRomanBold40"
                  >
                    Out View
                 
                   
                  </Text>
                  <div className="grid grid-cols-4 md:grid-cols-1 gap-3 m-auto w-full">
                
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_rectangle27_147x253.png"
                    alt="rectangleTwentySeven_Two"
                  />
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_rectangle28_1.png"
                    alt="rectangleTwentyEight_Two"
                  />
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_rectangle29_144x247.png"
                    alt="rectangleTwentyNine_One"
                  />
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_rectangle30_144x247.png"
                    alt="rectangleThirty_One"
                  />

                  
               
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img16071.png"
              alt="img16071"
            />
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img15421.png"
              alt="img15421"
            />
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img15661.png"
              alt="img15661"
            />
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img15261.png"
              alt="img15261"
            />
          </div>
          <Text
            className="md:ml-[0] sm:text-xl md:text-[28px] text-[40px] text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
            size="txtWorkSansRomanBold40"
          >
            kitchen
          </Text>
        
            <div className=" grid grid-cols-4 md:grid-cols-1 gap-3 m-auto w-full">
             
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_img16251.png"
                    alt="img16251"
                  />
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_rectangle28_144x250.png"
                      alt="rectangleTwentyEight_Three"
                    />
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_rectangle30_144x250.png"
                      alt="rectangleThirty_Two"
                    />
                  
               
               
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_rectangle27_147x256.png"
                      alt="rectangleTwentySeven_Three"
                    />
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_rectangle29_144x250.png"
                      alt="rectangleTwentyNine_Two"
                    />
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_rectangle30_1.png"
                      alt="rectangleThirty_Three"
                    />
                  
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_img15961.png"
                    alt="img15961"
                  />
                

               
              
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img16091.png"
              alt="img16091"
            />
          </div>
          
          <Text
            className="md:ml-[0] sm:text-xl md:text-[28px] text-[40px] text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
            size="txtWorkSansRomanBold40"
          >
            bar and restorent
          </Text>
          <div className="grid grid-cols-4 md:grid-cols-1 gap-3 m-auto w-full">
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img15622.png"
              alt="img15622"
            />
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img16111.png"
              alt="img16111"
            />
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img16171.png"
              alt="img16171"
            />
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img16211.png"
              alt="img16211"
            />
          </div>

                 
                  <Text
                    className="md:ml-[0] sm:text-xl md:text-[28px] text-[40px] text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
                    size="txtWorkSansRomanBold40"
                  >
                    playgrounds  
                 
                   
                  </Text>
               
                <div className="grid grid-cols-4 md:grid-cols-1 gap-3 m-auto w-full">
                  <Img
                    className="md:px-5  md:w-full"
                    src="images/img_img15871.png"
                    alt="img15871"
                  />
                   <Img
                          className="md:px-5  md:w-full"
                          src="images/img_img15981.png"
                          alt="img15981"
                        />
                      
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_img16041.png"
                        alt="img16041"
                      />
                   
                    
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_img15361.png"
                        alt="img15361"
                      />
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_img15851.png"
                        alt="img15851"
                      />
                   
                
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_img15831.png"
                        alt="img15831"
                      />
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_rectangle30_137x225.png"
                        alt="rectangleThirty_Four"
                      />
                 
                          <Img
                            className="md:px-5  md:w-full"
                            src="images/img_img15281.png"
                            alt="rectangleTwentySeven_Four"
                          />
                          <Img
                            className="md:px-5  md:w-full"
                            src="images/img_img15941.png"
                            alt="img15941"
                          />
                        
                          <Img
                            className="md:px-5  md:w-full"
                            src="images/img_img15951.png"
                            alt="img15951"
                          />
                          <Img
                            className="md:px-5  md:w-full"
                            src="images/img_img16021.png"
                            alt="img16021"
                          />
                          <Img
                            className="md:px-5  md:w-full"
                            src="images/img_img15352.png"
                            alt="img15352"
                          />
                          <Img
                            className="md:px-5  md:w-full"
                            src="images/img_img15881.png"
                            alt="img15881"
                          />
                          </div>
                          <Text
                    className="md:ml-[0] sm:text-xl md:text-[28px] text-[40px] text-black-900 text-center tracking-[0.80px] md:lowercase md:tracking-normal sm:text-[12px] uppercase"
                    size="txtWorkSansRomanBold40"
                  >
                      Garden
                 
                   
                  </Text>
                          <div className="grid grid-cols-4 md:grid-cols-1 gap-3 m-auto w-full">
                       
                      <Img
                        className="md:px-5  md:w-full"
                        src="images/img_img15791.png"
                        alt="img15791"
                      />
                   
                    <Img
                      className="md:px-5  md:w-full"
                      src="images/img_img15921.png"
                      alt="img15921"
                    />
              <Img
                className="md:px-5  md:w-full"
                src="images/img_img15901.png"
                alt="img15901"
              />
              <Img
                className="md:px-5  md:w-full"
                src="images/img_img16001.png"
                alt="img16001"
              />
            
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img15821.png"
              alt="img15821"
            />
            <Img
              className="md:px-5  md:w-full"
              src="images/img_img15282.png"
              alt="img15282"
            />
          </div>
          
          <div className="flex sm:flex-col  font-worksans items-center  justify-center gap-4 md:ml-[0]  mt-[37px] md:px-2 mb-7 md:justify-center md:w-full">
           <Button
                className="border border-solid border-teal-600  text-teal-600 items-end  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                size="sm"
              
             
             
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
 
  </div>
  <Footer />
    </>
  );
};

export default DesktopThreePage;
