import React from "react";
import Container from "../components/Container";
import chats from "../assets/icons/chats.png";
import liked from "../assets/icons/liked.png";
import shared from "../assets/icons/shared.png";
import global from "../assets/icons/global.png";
import admin from "../assets/icons/admin.png";
import benefitTarget from "../assets/icons/benefitTarget.png";

const Benefits = ({ id }) => {
  const benefits = [
    {
      id: 1,
      title: "Cost-effective",
      description:
        "I don't have to spend too much money for this daily speaking I have",
      icon: chats, // chat icon
    },
    {
      id: 2,
      title: "No Appointments Needed!",
      description:
        "The possibility to record my speech and get feedback without the need to arrange appointments is the fastest benefit I get from WiderAI",
      icon: liked, // thunder icon
    },
    {
      id: 3,
      title: "Seamless Speech Enhancement",
      description:
        "Beyond Words: WiderAI Identifies Pronunciation and Grammar Gaps in Real-Time",
      icon: shared, // share icon
    },
    {
      id: 4,
      title: "Connect with online",
      description:
        "I can practice my language anywhere by my smartphone, by the way, are you in WiderAI community Chat? let’s connect & practice!",
      icon: global, // share icon
    },
    {
      id: 5,
      title: "Fearless Expression",
      description:
        "The most important benefit from WiderAI is about the privacy. I can speak freely and don't be afraid of judgment",
      icon: admin, // share icon
    },
    {
      id: 6,
      title: "No Waiting, Just Improving",
      description:
        "I get the results within a few seconds. I have used many other apps which take more than two or 3 minutes to analyse our recordings",
      icon: benefitTarget, // share icon
    },
  ];
  return (
    <section
      id={id}
      className=" rounded-[32px] bg-[#fff] relative z-20 xl:py-[60px] py-[30px] mt-[-30px]"
    >
      <Container className="max-w-[1200px] text-center">
        <h1 className="text-[#101828] lg:text-[38px] md:text-[28px] text-[34px]  font-bicub text-center">
          Benefits Our Users Receive from{" "}
          <span className="font-bicub text-[#eb3838]">WIDERAI</span>
        </h1>
        <p className="mt-[18px] mb-[70px] text-[#475467] text-center text-[20px] font-normal">
          Top things from our user survey in November 2024
        </p>
        <div className="flex flex-wrap gap-x-[20px] gap-y-[50px] justify-center items-stretch">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="max-w-[360px] max-h-[285px] text-start rounded-[24px] flex flex-col bg-[#f4f7f9] "
            >
              <img
                src={benefit?.icon}
                alt="icons"
                className="w-[122px] h-[122px] relative top-[-40px] left-[24px]"
              />
              {/* <span>
                <span className={`icon ${benefit.icon}`} />
              </span>  */}
              <div className="p-[24px] pt-[10px]">
                <h5 className="text-[20px] font-bold text-[#101828]">
                  {benefit.title}
                </h5>
                <p className="text-[16px] color-[#475467] font-normal">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
