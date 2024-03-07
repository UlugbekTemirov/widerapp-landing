import React, { memo, useRef, useState } from "react";
import Container from "../components/Container";
import { ButtonLink } from "../components/Buttons";
import playIcon from "../assets/playIcon.png";
import videoPoster from "../assets/videoPoster.png";

const Home = ({ id }) => {
  const videoRef = useRef(null);
  const [onPause, setOnPause] = useState(false);

  const handleClick = () => {
    setOnPause(!onPause);

    if (!onPause) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <section
      id={id}
      className="xl:pt-[96px] pt-[100px] rounded-b-[32px] bg-[#fff] md:pb-[50px] pb-10 overflow-hidden relative z-20"
    >
      <Container className="max-w-[950px] text-center">
        <div className="mt-[20px]">
          <h1 className=" font-bicub text-[#252b31] md:text-[60px] text-[36px]">
            Boost Your Confidence In{" "}
            <span className="text-[#eb3838] uppercase font-bicub">spoken</span>{" "}
            english
          </h1>
          <p className="text-[#767d83] max-w-[550px] mx-auto my-[20px]">
            AI-powered simulator to self-practice the IELTS speaking test,
            job interview and everyday conversational English
          </p>
          <ButtonLink
            path={"/"}
            text={"Get Started"}
            styles={"max-w-[250px] py-3 mx-auto"}
          />
          <div className="relative mt-[40px]">
            {onPause ? (
              ""
            ) : (
              <div
                className="w-[10%] h-[10%] absolute right-[45%] top-[40%]"
                onClick={() => handleClick()}
              >
                <img src={playIcon} alt="img" />
              </div>
            )}
            <video
              poster={videoPoster}
              onClick={() => handleClick()}
              ref={videoRef}
            >
              <source
                src={
                  "https://www.youtube.com/watch?v=TU1gMloI0kc&ab_channel=MagnaAI"
                }
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default memo(Home);
