import React from "react";
import Container from "../components/Container";
import { ButtonLink } from "../components/Buttons";
import potential_1 from "../assets/images/potential_1.png";
import potential_2 from "../assets/images/potential_2.png";

const Potential = ({ id }) => {
  return (
    <section
      id={id}
      className="bg-transparent relative z-10 xl:py-[60px] py-2 pb-[60px] xl:pt-[100px] mt-[-30px]"
    >
      <Container className="max-w-[1250px]  mt-[76px]">
        <div className="flex gap-[35px] flex-wrap items-center justify-center">
          <div className="flex flex-col max-w-[512px] items-center justify-center xl:text-start text-center">
            <h3 className="font-bicub text-[38px] text-[#101828]">
              Unlock Your English Potential
            </h3>
            <p className="text-[18px] text-[#475467] my-[29px]">
              WiderAI is the perfect solution for anyone looking to speak
              English confidently. With your personal AI English Speaking Coach,
              you can estimate your English level, identify strengths and
              weaknesses, and improve your vocabulary and grammar, or receive
              tailored accurate Feedback.
            </p>
            <ButtonLink
              path={"/"}
              text={"Get Started"}
              styles={"max-w-[250px] py-3"}
            />
          </div>
          <div className="flex justify-center flex-wrap gap-2">
            <img
              className="relative xl:top-[-75px] top-0 me-[5px] "
              src={potential_1}
              alt="potential_1"
            />
            <img src={potential_2} alt="potential_2" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Potential;
