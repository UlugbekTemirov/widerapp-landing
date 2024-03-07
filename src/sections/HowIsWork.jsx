import React from "react";
import Container from "../components/Container";
import boxImage1 from "../assets/images/boxImage1.png";
import boxImage2 from "../assets/images/boxImage2.png";
import boxImage3 from "../assets/images/boxImage3.png";
import boxImage4 from "../assets/images/boxImage4.png";
import line from "../assets/images/line.png";

const HowIsWork = ({ id }) => {
  return (
    <section id={id} className="rounded-[32px] bg-[#fff]">
      <Container className="max-w-[1250px] py-[30px] xl:py-[60px]">
        <div>
          <div className="flex flex-col items-center justify-between flex-wrap gap-5 xl:flex-row mb-[30px]">
            <h2 className="flex-1 text-[38px] font-bicub text-[#252b31]">
              How does
              <span className="font-bicub text-[#eb3838]">it work</span>
            </h2>
            <p className="flex-1 text-[18px] text-[#6a7181]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-[80px] gap-y-[35px] items-center xl:justify-between">
            <div className="flex xl:flex-nowrap flex-wrap-sm-max justify-between xl-max:flex-col-reverse gap-[20px] max-w-[562px]">
              <img
                src={boxImage1}
                alt="boxImage1"
                className="w-[292px] mx-auto"
              />
              <div className=" flex flex-col justify-center gap-[12px]">
                <p className="text-[16px] font-semibold leading-[140%]  text-[#eb3838]">
                  1 - STEP
                </p>
                <h6 className="text-[#2a3243] text-[18px] font-semibold">
                  Register
                </h6>
                <p className="text-[14px] font-normal text-[#767d83]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
            </div>
            <div className="flex xl:flex-nowrap flex-wrap-sm-max justify-between  xl-max:flex-col-reverse gap-[20px] max-w-[562px]">
              <img
                src={boxImage2}
                alt="boxImage2"
                className="w-[292px] mx-auto"
              />
              <div className=" flex flex-col justify-center gap-[12px]">
                <p className="text-[16px] font-semibold leading-[140%] text-[#eb3838]">
                  2 - STEP
                </p>
                <h6 className="text-[#2a3243] text-[18px] font-semibold">
                  Confirm yourself
                </h6>
                <p className="text-[14px] font-normal text-[#767d83]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
            </div>
            <div className="ms-5 xl:block hidden">
              <img src={line} alt="" />
            </div>
            <div className="flex xl:flex-nowrap flex-wrap-sm-max justify-between   gap-[20px] max-w-[562px]">
              <div className=" flex flex-col justify-center gap-[12px]">
                <p className="text-[16px] leading-[140%] font-semibold text-[#eb3838]">
                  3 - STEP
                </p>
                <h6 className="text-[#2a3243] text-[18px] font-semibold">
                  Buy a tariff
                </h6>
                <p className="text-[14px] font-normal text-[#767d83]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
              <img src={boxImage3} alt="boxImage3" />
            </div>
            <div className="flex xl:flex-nowrap flex-wrap-sm-max  justify-between   gap-[20px] max-w-[562px]">
              <div className=" flex flex-col justify-center gap-[12px]">
                <p className="text-[16px] leading-[140%] font-semibold text-[#eb3838]">
                  4 - STEP
                </p>
                <h6 className="text-[#2a3243] text-[18px] font-semibold">
                  And start learning
                </h6>
                <p className="text-[14px] font-normal text-[#767d83]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
              </div>
              <img src={boxImage4} alt="boxImage4" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowIsWork;
