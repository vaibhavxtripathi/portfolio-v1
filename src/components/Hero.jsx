import React from "react";
import { Button } from "./ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import SplitText from "./ui/SplitText";
import me from "../assets/me.png";

const Hero = () => {
  return (
    <div
      data-cursor="hero"
      className="w-full max-w-[75rem] mx-auto px-6 sm:px-12 lg:px-32 mt-20 flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-16"
    >
      <div className="flex-1 text-center sm:text-left">
        <h1 id="hero" className="text-lg m-2">
          Hi, I'm
        </h1>
        <SplitText
          text="Vaibhav"
          className="text-6xl sm:text-6xl lg:text-7xl font-[630] leading-tight"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
        />
        <br />
        <SplitText
          text="Tripathi"
          className="text-6xl sm:text-6xl lg:text-7xl font-[630] leading-tight"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <br />
        <h1 className="mt-6 mx-2 text-lg sm:text-xl">
          An Engineering Undergraduate
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mx-1 mt-6 justify-center sm:justify-start">
          <a
            href="https://drive.google.com/file/d/1lqI4uCgZ-K1B23fKIHX2d_mJjhOeUHXj/view?usp=sharing"
            target="_blank"
          >
            <Button variant="default" size="lg">
              My Resume <MdOutlineArrowOutward />
            </Button>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vaibhavxtripathi@gmail.com&su=Let's Connect&body=Hi, I wanted to reach out regarding..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="custom">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center sm:justify-end">
        <img
          src={me}
          width={250}
          height={250}
          className="w-50 xs:w-60 sm:w-52 lg:w-96 h-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
