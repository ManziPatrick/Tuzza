import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import Header from "components/Header";

const DesktopThreePage: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage("");
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
        <div className="flex flex-col justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1414px] mx-auto md:px-5 w-full">
            <Img
              className="h-2 md:h-auto object-cover"
              src="images/img_tuuzalogo2.png"
              alt="tuuzalogoTwo"
            />
            
          </div>
          <div className="h-[277px] md:px-5 relative w-full">
            <Img
              className="h-[277px] m-auto object-cover w-full"
              src="images/img_img15711.png"
              alt="img15713"
            />
            <div className="absolute bg-teal-600_99 bottom-[21%] flex flex-col items-center justify-start left-[30%] p-[21px] sm:px-5">
              <Text
                className="mb-[25px] sm:text-[39px] md:text-[45px] text-[49px] text-center text-white-A700"
                size="txtWorkSansRegular49"
              >
                Tuuza Gallery
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1219px] mt-[98px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-48 md:h-auto object-cover w-[30%] sm:w-full"
              src="images/img_img15281.png"
              alt="rectangleThirtyOne"
            />
            <Img
              className="sm:flex-1 h-48 md:h-auto sm:ml-[0] ml-[113px] object-cover w-[28%] sm:w-full"
              src="images/img_rectangle32.png"
              alt="rectangleThirtyTwo"
            />
            <Img
              className="sm:flex-1 h-[186px] md:h-auto sm:ml-[0] ml-[88px] object-cover w-[27%] sm:w-full"
              src="images/img_rectangle33.png"
              alt="rectangleThirtyThree"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[110px] mt-[158px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[0.80px] uppercase"
            size="txtWorkSansRomanBold40"
          >
            accommodation
          </Text>
          <div className="h-[1074px] sm:h-[1689px] md:h-[1886px] max-w-[1245px] mt-[65px] mx-auto md:px-5 relative w-full">
            <div className="absolute bottom-[0] md:h-[1821px] h-[886px] left-[0] w-[95%] md:w-full">
              <Text
                className="absolute left-[0] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center top-[43%] tracking-[0.80px] uppercase"
                size="txtWorkSansRomanBold40"
              >
                conference rooms
              </Text>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
                <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                    <Img
                      className="h-36 md:h-auto md:mt-0 mt-[550px] object-cover"
                      src="images/img_img16301.png"
                      alt="img16301"
                    />
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-[50px] items-start justify-between w-[74%] md:w-full">
                      <Img
                        className="h-36 md:h-auto md:mt-0 mt-[550px] object-cover"
                        src="images/img_rectangle28.png"
                        alt="rectangleTwentyEight"
                      />
                      <Img
                        className="h-[141px] md:h-auto md:mt-0 mt-[553px] object-cover"
                        src="images/img_img16461.png"
                        alt="img16461"
                      />
                      <Img
                        className="h-36 md:h-auto mb-[550px] object-cover"
                        src="images/img_rectangle31.png"
                        alt="rectangleThirtyOne_One"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-14 items-start justify-between w-[49%] md:w-full">
                      <Img
                        className="h-[153px] md:h-auto object-cover"
                        src="images/img_img15432.png"
                        alt="img15432"
                      />
                      <Img
                        className="h-[143px] md:h-auto object-cover"
                        src="images/img_img15501.png"
                        alt="img15501"
                      />
                    </div>
                    <Img
                      className="h-[143px] md:h-auto object-cover"
                      src="images/img_img15801.png"
                      alt="img15801"
                    />
                    <Img
                      className="h-[143px] md:h-auto object-cover"
                      src="images/img_img16151.png"
                      alt="img16151"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[94%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[147px] md:h-auto object-cover"
                    src="images/img_rectangle27.png"
                    alt="rectangleTwentySeven"
                  />
                  <Img
                    className="h-36 md:h-auto object-cover"
                    src="images/img_rectangle28_144x247.png"
                    alt="rectangleTwentyEight_One"
                  />
                  <Img
                    className="h-36 md:h-auto object-cover"
                    src="images/img_rectangle29.png"
                    alt="rectangleTwentyNine"
                  />
                  <Img
                    className="h-36 md:h-auto object-cover"
                    src="images/img_rectangle30.png"
                    alt="rectangleThirty"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[38px] w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Img
                      className="h-[156px] md:h-auto object-cover w-full"
                      src="images/img_rectangle27_156x253.png"
                      alt="rectangleTwentySeven_One"
                    />
                  </div>
                  <Img
                    className="h-[156px] md:h-auto object-cover"
                    src="images/img_img15481.png"
                    alt="img15481"
                  />
                  <Img
                    className="h-[147px] md:h-auto object-cover"
                    src="images/img_img15461.png"
                    alt="img15461"
                  />
                  <Img
                    className="h-[147px] md:h-auto md:mt-0 mt-[5px] object-cover"
                    src="images/img_img15451.png"
                    alt="img15451"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-8 w-full">
                  <Img
                    className="h-[147px] md:h-auto object-cover"
                    src="images/img_rectangle27_147x253.png"
                    alt="rectangleTwentySeven_Two"
                  />
                  <Img
                    className="h-36 md:h-auto object-cover"
                    src="images/img_rectangle28_1.png"
                    alt="rectangleTwentyEight_Two"
                  />
                  <Img
                    className="h-36 md:h-auto object-cover"
                    src="images/img_rectangle29_144x247.png"
                    alt="rectangleTwentyNine_One"
                  />
                  <Img
                    className="h-36 md:h-auto object-cover"
                    src="images/img_rectangle30_144x247.png"
                    alt="rectangleThirty_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[110px] mt-[37px] md:px-5 w-4/5 md:w-full">
            <Img
              className="h-36 sm:h-auto object-cover w-[22%] md:w-full"
              src="images/img_img16071.png"
              alt="img16071"
            />
            <Img
              className="h-36 sm:h-auto md:ml-[0] ml-[60px] object-cover w-[22%] md:w-full"
              src="images/img_img15421.png"
              alt="img15421"
            />
            <Img
              className="h-[137px] sm:h-auto md:ml-[0] ml-[55px] object-cover w-[23%] md:w-full"
              src="images/img_img15661.png"
              alt="img15661"
            />
            <Img
              className="h-36 sm:h-auto ml-11 md:ml-[0] object-cover w-[21%] md:w-full"
              src="images/img_img15261.png"
              alt="img15261"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[132px] mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[0.80px] uppercase"
            size="txtWorkSansRomanBold40"
          >
            kitchen
          </Text>
          <div className="h-[341px] md:h-[598px] sm:h-[741px] max-w-[1179px] mt-[79px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col gap-[43px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-36 md:h-auto object-cover"
                    src="images/img_img16251.png"
                    alt="img16251"
                  />
                  <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[74%] md:w-full">
                    <Img
                      className="h-36 md:h-auto object-cover"
                      src="images/img_rectangle28_144x250.png"
                      alt="rectangleTwentyEight_Three"
                    />
                    <Img
                      className="h-36 md:h-auto object-cover"
                      src="images/img_rectangle30_144x250.png"
                      alt="rectangleThirty_Two"
                    />
                  </div>
                </div>
                <div className="md:h-[148px] h-[151px] sm:h-[475px] relative w-full">
                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-center justify-center m-auto w-full">
                    <Img
                      className="sm:flex-1 h-[147px] md:h-auto object-cover w-[22%] sm:w-full"
                      src="images/img_rectangle27_147x256.png"
                      alt="rectangleTwentySeven_Three"
                    />
                    <Img
                      className="sm:flex-1 h-36 md:h-auto sm:ml-[0] ml-[357px] object-cover w-[22%] sm:w-full"
                      src="images/img_rectangle29_144x250.png"
                      alt="rectangleTwentyNine_Two"
                    />
                    <Img
                      className="sm:flex-1 h-36 md:h-auto sm:ml-[0] ml-[63px] object-cover w-[22%] sm:w-full"
                      src="images/img_rectangle30_1.png"
                      alt="rectangleThirty_Three"
                    />
                  </div>
                  <Img
                    className="absolute h-[148px] inset-y-[0] left-[28%] my-auto object-cover w-[21%]"
                    src="images/img_img15961.png"
                    alt="img15961"
                  />
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[147px] object-cover right-[26%] top-[0] w-[22%]"
              src="images/img_img16091.png"
              alt="img16091"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[126px] mt-[54px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[0.80px] uppercase"
            size="txtWorkSansRomanBold40"
          >
            bar and restorent
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1167px] mt-[51px] mx-auto md:px-5 w-full">
            <Img
              className="sm:flex-1 h-36 md:h-auto object-cover w-[22%] sm:w-full"
              src="images/img_img15622.png"
              alt="img15622"
            />
            <Img
              className="sm:flex-1 h-36 md:h-auto ml-12 sm:ml-[0] object-cover w-[23%] sm:w-full"
              src="images/img_img16111.png"
              alt="img16111"
            />
            <Img
              className="sm:flex-1 h-[143px] md:h-auto ml-14 sm:ml-[0] object-cover w-[22%] sm:w-full"
              src="images/img_img16171.png"
              alt="img16171"
            />
            <Img
              className="sm:flex-1 h-36 md:h-auto sm:ml-[0] ml-[51px] object-cover w-[22%] sm:w-full"
              src="images/img_img16211.png"
              alt="img16211"
            />
          </div>
          <div className="h-[1256px] md:h-[1429px] sm:h-[1984px] max-w-[1179px] mt-[31px] mx-auto md:px-5 relative w-full">
            <div className="absolute h-[1240px] md:h-[1398px] sm:h-[1953px] inset-[0] justify-center m-auto w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[11px] h-full items-start justify-start ml-3 mt-[97px] w-[47%]">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="ml-1 md:ml-[0] text-black-900 text-xl"
                    size="txtRobotoRomanSemiBold20"
                  >
                    n
                  </Text>
                  <Text
                    className="mt-[84px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[0.80px] uppercase"
                    size="txtWorkSansRomanBold40"
                  >
                    playgrounds
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] mt-[504px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[0.80px] uppercase"
                    size="txtWorkSansRomanBold40"
                  >
                    Garden
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:mt-0 mt-[252px] w-[46%] sm:w-full">
                  <Img
                    className="h-36 md:h-auto object-cover w-full"
                    src="images/img_img15871.png"
                    alt="img15871"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col justify-start w-full">
                  <div className="flex flex-col md:gap-10 gap-[206px] items-start justify-start ml-4 md:ml-[0] w-[74%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-[66%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[45%] sm:w-full">
                        <Img
                          className="h-36 md:h-auto object-cover w-full"
                          src="images/img_img15981.png"
                          alt="img15981"
                        />
                      </div>
                      <Img
                        className="h-36 md:h-auto object-cover w-[48%] sm:w-full"
                        src="images/img_img16041.png"
                        alt="img16041"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] w-full">
                      <Img
                        className="h-[134px] md:h-auto object-cover"
                        src="images/img_img15361.png"
                        alt="img15361"
                      />
                      <Img
                        className="h-36 md:h-auto object-cover"
                        src="images/img_img15851.png"
                        alt="img15851"
                      />
                    </div>
                  </div>
                  <div className="h-[530px] sm:h-[746px] md:h-[890px] mt-9 relative w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 h-full items-center justify-between ml-auto mr-0.5 mt-[3px] w-[74%]">
                      <Img
                        className="h-[137px] md:h-auto object-cover"
                        src="images/img_img15831.png"
                        alt="img15831"
                      />
                      <Img
                        className="h-[137px] md:h-auto object-cover"
                        src="images/img_rectangle30_137x225.png"
                        alt="rectangleThirty_Four"
                      />
                    </div>
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[231px] justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-3/4 md:w-full">
                          <Img
                            className="h-[140px] md:h-auto object-cover"
                            src="images/img_img15281.png"
                            alt="rectangleTwentySeven_Four"
                          />
                          <Img
                            className="h-[140px] md:h-auto object-cover"
                            src="images/img_img15941.png"
                            alt="img15941"
                          />
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[22px] w-[99%] md:w-full">
                          <Img
                            className="h-[159px] sm:h-auto object-cover w-[21%] md:w-full"
                            src="images/img_img15951.png"
                            alt="img15951"
                          />
                          <Img
                            className="h-[159px] sm:h-auto md:ml-[0] ml-[73px] object-cover w-[21%] md:w-full"
                            src="images/img_img16021.png"
                            alt="img16021"
                          />
                          <Img
                            className="h-[159px] sm:h-auto md:ml-[0] ml-[43px] object-cover w-[22%] md:w-full"
                            src="images/img_img15352.png"
                            alt="img15352"
                          />
                          <Img
                            className="h-[137px] sm:h-auto ml-16 md:ml-[0] object-cover w-[22%] md:w-full"
                            src="images/img_img15881.png"
                            alt="img15881"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[313px] mt-[41px] w-[73%] md:w-full">
                    <div className="flex flex-col items-center justify-start sm:mt-0 mt-0.5">
                      <Img
                        className="h-[137px] md:h-auto object-cover w-full"
                        src="images/img_img15791.png"
                        alt="img15791"
                      />
                    </div>
                    <Img
                      className="h-[136px] md:h-auto object-cover"
                      src="images/img_img15921.png"
                      alt="img15921"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[960px] h-max inset-y-[0] justify-start my-auto right-[26%] w-[23%]">
              <Img
                className="h-[148px] md:h-auto ml-5 md:ml-[0] object-cover w-[93%]"
                src="images/img_img15901.png"
                alt="img15901"
              />
              <Img
                className="h-[137px] md:h-auto mr-5 object-cover w-[93%]"
                src="images/img_img16001.png"
                alt="img16001"
              />
            </div>
            <Img
              className="absolute h-36 object-cover right-[1%] top-[29%] w-[23%]"
              src="images/img_img15821.png"
              alt="img15821"
            />
            <Img
              className="absolute h-[159px] object-cover right-[0] top-[0] w-[22%]"
              src="images/img_img15282.png"
              alt="img15282"
            />
          </div>
          <div className="flex sm:flex-col flex-row gap-[41px] items-start justify-start md:ml-[0] ml-[439px] mt-[188px] md:px-5 w-[35%] md:w-full">
            <Button className="border border-solid border-teal-A700 cursor-pointer font-bold leading-[normal] min-w-[238px] sm:mt-0 mt-[5px] text-center text-xl tracking-[-0.40px]">
              Book now
            </Button>
            <Button
              className="border border-solid border-teal-600 cursor-pointer font-bold leading-[normal] min-w-[213px] text-center text-xl tracking-[-0.40px]"
              color="gray_900_01"
              size="sm"
            >
              Explore more
            </Button>
          </div>
          <footer className="bg-blue_gray-100_01 flex items-center justify-center mt-[50px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[35px] ml-[113px] mr-[341px] mt-[39px] w-[69%]">
              <ul className="flex flex-col items-center justify-center w-full common-column-list">
                <li>
                  <a href="javascript:">
                    <div className="flex md:flex-col flex-row font-worksans md:gap-10 items-start justify-between">
                      <ul className="flex flex-col justify-start mb-[18px] w-[63%] md:w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row sm:gap-10 gap-[280px] items-start justify-start">
                              <Text
                                className="mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-center text-teal-600 tracking-[0.64px] uppercase"
                                size="txtWorkSansRomanBold32"
                              >
                                Company
                              </Text>
                              <Text
                                className="mb-[7px] md:text-3xl sm:text-[28px] text-[32px] text-center text-teal-600 tracking-[0.64px] uppercase"
                                size="txtWorkSansRomanBold32"
                              >
                                Explore
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row sm:gap-10 gap-[309px] items-center justify-end md:ml-[0] ml-[33px]">
                              <Text
                                className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[0.60px]"
                                size="txtWorkSansRomanRegular30"
                              >
                                about
                              </Text>
                              <Text
                                className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[0.60px]"
                                size="txtWorkSansRomanRegular30"
                              >
                                Experiences
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-[322px] items-start justify-start md:ml-[0] ml-[39px] mt-2.5">
                              <Text
                                className="capitalize mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[0.60px]"
                                size="txtWorkSansRomanRegular30"
                              >
                                team
                              </Text>
                              <Text
                                className="capitalize mb-[3px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[0.60px]"
                                size="txtWorkSansRomanRegular30"
                              >
                                Blog
                              </Text>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div className="flex flex-col gap-5 justify-start md:mt-0 mt-[18px] w-[15%] md:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-teal-600 tracking-[0.64px] uppercase"
                          size="txtWorkSansRomanBold32"
                        >
                          Contact
                        </Text>
                        <div className="flex flex-col font-inter gap-[15px] items-start justify-start ml-8 md:ml-[0]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtInterRegular24"
                          >
                            Booking
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtInterRegular24"
                          >
                            Events
                          </Text>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[42px] mr-[15px] mt-[3px]">
                      <Text
                        className="capitalize md:mt-0 mt-2 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[0.60px]"
                        size="txtWorkSansRomanRegular30"
                      >
                        Careers
                      </Text>
                      <Text
                        className="capitalize mb-2 md:ml-[0] ml-[269px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center tracking-[0.60px]"
                        size="txtWorkSansRomanRegular30"
                      >
                        impact
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[339px] md:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtInterRegular24"
                      >
                        Location
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="md:ml-[0] ml-[379px] mr-[229px] mt-[178px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  >
                    <Text size="txtInterRegular24">
                      © 2023 Tuuza. All rights reserved.
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-60" onClick={closeModal}></div>
          <div className="fixed flex items-center justify-center w-4/5 h-60% bg-white">
            <img
              src={selectedImage}
              alt="modal_image"
              className="max-h-full max-w-full"
            />
            <div className="absolute top-4 right-4">
              <Button
                onClick={downloadImage}
                className="border border-solid border-teal-A700 cursor-pointer font-bold text-center text-xl tracking-[-0.40px]"
              >
                Download
              </Button>
            </div>
          </div>
         
        </div>
      )}
 
    </footer>
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
