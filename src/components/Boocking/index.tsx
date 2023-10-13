import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";


const checkInDateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const checkOutDateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const numberOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];


const Boocking: React.FC = () => {
  return (
    <>
   
          <div className="bg-teal-600 flex flex-col items-center justify-end mt-[-NaNpx] mx-auto p-[46px] md:px-10 sm:px-5 w-[86%] z-[1]">
            <div className="flex flex-col items-start justify-start mt-[53px] w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] w-[99%] md:w-full">
                <Text
                  className="bg-gray-50 h-[71px] justify-center md:mt-0 mt-0.5 pb-[21px] pt-[25px] sm:px-5 px-[35px] rounded-[30px] text-black-900 text-center text-xl tracking-[-0.40px] w-[463px]"
                  size="txtWorkSansBold20Black900"
                >
                  Your Names
                </Text>
                <Text
                  className="bg-gray-50 h-[71px] justify-center mb-0.5 pb-5 pt-[26px] sm:px-5 px-[35px] rounded-[30px] text-black-900 text-center text-xl tracking-[-0.40px] w-[504px]"
                  size="txtWorkSansBold20Black900"
                >
                  E-mail address
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-[79px] w-[99%] md:w-full">
                <Input
                  name="groupTwenty"
                  placeholder="Phone number"
                  className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-center text-xl tracking-[-0.40px] w-full"
                  wrapClassName="mb-[5px] md:w-full"
                  type="number"
                ></Input>
                <div className="bg-gray-50 flex flex-row items-start justify-between md:mt-0 mt-[5px] p-5 rounded-[30px] w-[48%] md:w-full">
                  <Text
                    className="ml-[17px] mt-1.5 text-black-900 text-center text-xl tracking-[-0.40px]"
                    size="txtWorkSansBold20Black900"
                  >
                    select service
                  </Text>
                  <Img
                    className="h-5 mr-[51px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-16 w-full">
                <SelectBox
                  className="sm:flex-1 font-bold leading-[normal] sm:mt-0 mt-2 text-center text-xl tracking-[-0.40px] w-[21%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-5 mr-[0] w-[22px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupEighteen"
                  options={checkInDateOptionsList}
                  isSearchable={false}
                  placeholder="check in date"
                  color="gray_50"
                  size="sm"
                />
                <SelectBox
                  className="sm:flex-1 font-bold leading-[normal] sm:ml-[0] ml-[41px] sm:mt-0 mt-2 text-center text-xl tracking-[-0.40px] w-[21%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-5 mr-[0] w-[22px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupSeventeen"
                  options={checkOutDateOptionsList}
                  isSearchable={false}
                  placeholder="check out date"
                  color="gray_50"
                  size="sm"
                />
                <SelectBox
                  className="sm:flex-1 font-bold leading-[normal] sm:ml-[0] ml-[83px] sm:mt-0 mt-2 text-center text-xl tracking-[-0.40px] w-[21%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-5 mr-[0] w-[22px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupSixteen"
                  options={numberOptionsList}
                  isSearchable={false}
                  placeholder="number"
                  color="gray_50"
                  size="sm"
                />
                <SelectBox
                  className="sm:flex-1 font-bold leading-[normal] mb-2 sm:ml-[0] ml-[41px] text-center text-xl tracking-[-0.40px] w-[24%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-5 mr-[0] w-[22px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="language_Three"
                  options={languageThreeOptionsList}
                  isSearchable={false}
                  placeholder=" payment type"
                  color="gray_50"
                  size="md"
                />
              </div>
              <Text
                className="bg-white-A700 border border-solid border-teal-600 h-[65px] justify-center md:ml-[0] ml-[822px] mt-[122px] sm:px-5 px-[35px] py-5 rounded-[30px] text-center text-teal-600 text-xl tracking-[-0.40px] w-[249px]"
                size="txtWorkSansBold20Teal600"
              >
                Book now
              </Text>
            </div>
          </div>
        
    </>
  );
};

export  {Boocking}
