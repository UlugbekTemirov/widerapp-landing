import React from "react";
import Container from "../components/Container";
import bgAssessment from "../assets/images/bgAssessment.png";

const Assessment = () => {
  return (
    <section>
      <Container className="max-w-[1040px] my-[60px]">
        <div className="flex flex-col items-center justify-center gap-[30px]">
          <h1 className="font-bicub text-[38px] text-center leading-[120%] font-normal">
            Assessment by{" "}
            <span className="font-bicub text-[#eb3838]">speaklish</span>
          </h1>
          <img src={bgAssessment} alt="bgAssessment" />
        </div>
      </Container>
    </section>
  );
};

export default Assessment;
