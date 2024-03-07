import React from "react";
import Container from "../components/Container";
import avatarUser from "../assets/images/Avatar.png";

const OurUsers = ({ id }) => {
  return (
    <section id={id} className="rounded-[32px] bg-[#fff]">
      <Container className="max-w-[1200px] py-[30px] xl:py-[60px] px-[30px]">
        <div>
          <div className="flex flex-col items-center justify-between lg:text-start text-center  flex-wrap gap-5 lg:flex-row">
            <h2 className="flex-1 text-[38px] font-bicub leading-[120%] font-normal text-[#252b31]">
              Our users
            </h2>
            <p className="flex-1 text-[16px] leading-[140%] text-[#6a7181]">
              Your responses show a good level of fluency and coherence, with
              logical progression in your ideas. You demonstrate a reasonable
              lexical resource, using
            </p>
          </div>
          <div className="flex items-center justify-center gap-[30px] xl:justify-between flex-wrap mt-[36px]">
            <div className="max-w-[505px] w-full">
              <div className="flex lg:justify-between justify-center items-center flex-wrap mb-[36px]">
                <div className="lg:border-r-[1px] border-[#c7d5e3] lg:pr-[12%]  border-r-[0px]">
                  <h1 className="text-[80px] font-bicub leading-[120%] text-[#252b31] ">
                    17K<span className="font-bicub text-[#eb3838]">+</span>
                  </h1>
                  <p className="text-[18px] font-bold leading-[120%] text-[#252b31]">
                    Users
                  </p>
                </div>
                <div>
                  <h1 className="text-[80px] font-bicub leading-[120%] text-[#252b31] ">
                    15K<span className="font-bicub text-[#eb3838]">+</span>
                  </h1>
                  <p className="text-[18px] font-bold leading-[120%] text-[#252b31]">
                    Active Users
                  </p>
                </div>
              </div>
              <div className="flex lg:justify-between gap-[20px]  justify-center p-[18px]">
                <div className="flex-1">
                  <p className="text-[16px] font-medium leading-[140%] mb-3 text-[#767d83]">
                    Leads Quality
                  </p>
                  <h5 className="text-[24px] font-bold leading-[140%] text-[#252b31]">
                    Those who will get
                    <span className="text-[#eb3838]"> IETLS</span>
                  </h5>
                </div>
                <div className="flex-2">
                  <p className="text-[16px] font-medium leading-[140%] mb-3 text-[#767d83]">
                    Average Score
                  </p>
                  <h5 className="text-[24px] font-bold leading-[140%] text-[#252b31]">
                    <span className="text-[#eb3838]">6.5 </span>Band
                  </h5>
                </div>
              </div>
            </div>
            <div className="max-w-[562px] w-full flex flex-col gap-[24px]">
              <div className="flex flex-wrap gap-[16px]">
                <img src={avatarUser} alt="avatarUser" />
                <div>
                  <h3 className="font-bold text-[18px] text-[#252b31] ">
                    Mollie Hall
                  </h3>
                  <p className="text-[16px] font-normal text-[#767d83]">
                    Teacher , Internation Language Learning Center
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#252b31] text-[20px] mb-[12px]">
                  What does it say ?
                </h3>
                <p className="leading-[120%] text-[16px] font-normal text-[#444a4f]">
                  Your responses show a good level of fluency and coherence,
                  with logical progression in your ideas. You demonstrate a
                  reasonable lexical resource, using varied and appropriate
                  vocabulary. However, there's room for improvement in usage of
                  more advanced and varied grammatical structures, as well as
                  enhancing pronunciation clarity. Focusing on these areas can
                  help
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurUsers;
