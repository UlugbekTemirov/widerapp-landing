import React from "react";
import Container from "../components/Container";

const Prices = ({ id }) => {
  const cards = [
    {
      badge: {
        color: "text-[#27497c]",
        text: "For Starter",
      },
      title: "One-time",
      price: {
        pr: "6 000",
        old: "10 000",
        text: "usage, pay as you go",
      },
      traffics: [
        {
          iconClass: "icon-speaker",
          text: "1 Voice Option Available",
        },
        {
          iconClass: "icon-topics",
          text: "Explore Regular Speaking Topics",
        },
        {
          iconClass: "icon-clock",
          text: "1-Times Mock Exam Access",
        },
        {
          iconClass: "icon-target",
          text: "Precision in Result Evaluations",
        },
      ],
    },
    {
      badge: {
        color: "text-[#42277c]",
        text: "Most Popular",
      },
      title: "Basic",
      price: {
        pr: "20 000",
        old: "24 000",
        text: "usage. upgrade anytime",
      },
      traffics: [
        {
          iconClass: "icon-speaker",
          text: "Choose from 4 Voices",
        },
        {
          iconClass: "icon-topics",
          text: "Only past authentic IELTS speaking topics",
        },
        {
          iconClass: "icon-clock",
          text: "4-Times Mock Exam Access",
        },
        {
          iconClass: "icon-target",
          text: "Precision in Result Evaluations",
        },
      ],
    },
    {
      badge: {
        color: "text-[#277c53]",
        text: "The Cheapest",
      },
      title: "Standard",
      price: {
        pr: "25 000",
        old: "30 000",
        text: "usage. upgrade anytime",
      },
      traffics: [
        {
          iconClass: "icon-speaker",
          text: "Choose from 6 Voices",
        },
        {
          iconClass: "icon-topics",
          text: "Past-Future Authentic IELTS speaking topics",
        },
        {
          iconClass: "icon-clock",
          text: "6-Times Mock Exam Access",
        },
        {
          iconClass: "icon-voices",
          text: "Realistic Voices",
        },
        {
          iconClass: "icon-target",
          text: "Precision in Result Evaluations",
        },
      ],
    },
    {
      badge: {
        color: "text-[#7c5527]",
        text: "The Best Ever",
      },
      title: "Premium",
      price: {
        pr: "100 000",
        saving: "saving +200 000",
        text: "month, paid for 3 month",
      },
      traffics: [
        {
          iconClass: "icon-speaker",
          text: "Choose from 6 Voices",
        },
        {
          iconClass: "icon-topics",
          text: "ONLY Future Authentic IELTS speaking topics in 6 month",
        },
        {
          iconClass: "icon-clock",
          text: "Infinite Mock Exam Opportunities",
        },
        {
          iconClass: "icon-voices",
          text: "6 Ultra-Realistic Voices",
        },
        {
          iconClass: "icon-target",
          text: "Precise Result Evaluations with Feedback",
        },
      ],
    },
    {
      badge: {
        color: "text-[#27497c]",
        text: "The Best Ever",
      },
      title: "Language Centers",

      traffics: [
        {
          iconClass: "icon-speaker",
          text: "Choose from 10 Voices",
        },
        {
          iconClass: "icon-topics",
          text: "ONLY Future Authentic IELTS speaking topics in 6 month",
        },
        {
          iconClass: "icon-clock",
          text: "Infinite Mock Exam Opportunities",
        },
        {
          iconClass: "icon-voices",
          text: "6 Ultra-Realistic Voices",
        },
        {
          iconClass: "icon-money",
          text: "More Affordable Than Individual Plans",
        },
        {
          iconClass: "icon-voices",
          text: "Precise Result Evaluations with Feedback",
        },
        {
          iconClass: "icon-support",
          text: "Personalized Customer Support",
        },
      ],
    },
  ];
  return (
    <section id={id}>
      <Container className="max-w-[1250px] py-[30px] xl:py-[60px]">
        <div className="mx-[40px] mt-[15px] pb-3">
          <h2 className="font-bicub text-[38px] font-medium text-center mb-[30px]">
            Pricing made
            <span className="font-bicub text-[#eb3838]"> simple</span>
          </h2>
          <div className="flex flex-wrap w-[100%] justify-center gap-5 mt-[24px]">
            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="relative border-[1px] p-5 max-w-[350px]  border-[#c7d5e3] rounded-xl items-stretch flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between ">
                      <p className="text-[12px] font-medium uppercase">Plan</p>
                      {card.badge && (
                        <span
                          className={`absolute top-[-12px] border-[1px] right-[5px] bg-[#f3f6fc] text-[14px] font-medium me-2  px-2.5 py-0.5 rounded-lg border-[#e8eef7] ${card.badge.color}`}
                        >
                          {card.badge.text}
                        </span>
                      )}
                    </div>
                    <h1 className="text-[18px] font-bicub text-[#171717] font-semibold">
                      {card.title}
                    </h1>

                    <div className="flex flex-col gap-[14px] my-[18px]  pb-[24px] border-b-[1px] border-[#C7D5E3] ">
                      {card.traffics.map((traffic, index) => {
                        return (
                          <div
                            className="flex items-center gap-[18px] justify-start"
                            key={index}
                          >
                            <span>
                              <span
                                className={`${traffic?.iconClass} icon w-[32px] h-[32px]`}
                              />
                            </span>
                            <span className="text-[16px]">{traffic.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <div className="flex flex-col justify-center mb-3">
                        {!card.price ? (
                          <p>Price: Contact us</p>
                        ) : (
                          <>
                            <p className="text-[14px]">
                              {card.price.saving ? (
                                <p className="text-[#404040]">
                                  <span className="text-[#017D0D]  ">
                                    {card.price.saving}
                                  </span>
                                  UZS /{card.price.text}
                                </p>
                              ) : (
                                <p>
                                  <span className="text-[#AA3C3C]  line-through decoration-[#AA3C3C]">
                                    {card.price.old} UZS
                                  </span>
                                  /{card.price.text}
                                </p>
                              )}
                            </p>
                            <p className="font-bicub text-[24px]">
                              {card.price.pr} UZS
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <button className="w-[100%] text-[#f0f0f0] bg-[#FF0202] rounded-lg py-2 ">
                      Get started
                    </button>
                    <p className="text-center">Upgrade or cancel at anytime</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Prices;
