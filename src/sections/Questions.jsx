import React from "react";
import { Accordion } from "./../components/Accordion";
import Container from "./../components/Container";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Questions = ({ id }) => {
  const items = (panelStyle) => [
    {
      key: "1",
      label: "Is there a free trial available?",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "2",
      label: "Can I change my plan later?",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "3",
      label: "What is your cancellation policy?",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "4",
      label: "Is there any rewards or bonuses for refarrals?",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "5",
      label: "How does AI work?",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "6",
      label: "How do I change my account email?",
      children: <p>{text}</p>,
      style: panelStyle,
    },
  ];

  return (
    <section id={id} className="rounded-[32px] bg-[#fff] ">
      <Container className="max-w-[1200px] mx-auto lg:py-[60px] py-[30px]">
        <div className="flex flex-col items-center mb-[30px]">
          <h1 className="font-bicub text-[38px] text-[#101828]">
            Frequently asked questions
          </h1>
          <p className="text-[20px] font-normal leading-[140%] text-[#475467]">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <Accordion items={items} />
      </Container>
    </section>
  );
};

export default Questions;
