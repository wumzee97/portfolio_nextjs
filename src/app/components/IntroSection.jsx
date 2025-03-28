import Image from "next/image";
import circle from "../assets/images/circle.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import githubIcon from "../assets/images/github.svg";
import devImage from "../assets/images/image.png";

const IntroSection = () => {
  return (
    <section className="px-4 lg:px-40 grid grid-cols-12 mt-10 items-center">
      <div className="col-span-12 lg:col-span-6">
        <h2 className=" font-bebas text-[57px] lg:text-[101px] leading-[90%] text-white">
          hi, i am
          <br />
          adewumi alabi.
        </h2>
        <p className=" font-manrope lg:text-lg leading-[150%] text-neutral-offwhite mt-3 lg:mb-12 mb-7">
          A Lagos-based Software Engineer specializing in modern web
          technologies, including React, Vue.js, TypeScript, Node.js, and other backend
          infrastructure. Adept at building seamless user interfaces, optimizing
          interconnectivity, and crafting scalable solutions. Passionate about
          delivering high-performance applications with a meticulous approach
          and a deep understanding of development lifecycles.
        </p>
        <div className="flex">
          <button className="h-12 lg:h-[54px] w-[163px] lg:w-[187px] rounded-full bg-primary font-manrope font-bold flex justify-between items-center px-1 lg:px-2 pl-2 lg:pl-4 ">
            {" "}
            CONTACT ME <Image src={circle} height={40} width={40} alt="" />
          </button>
          <button className="lg:h-[54px] lg:w-[54px] h-12 w-12 flex justify-center items-center rounded-full bg-[#222] ml-4 lg:ml-6">
            <Image src={linkedinIcon} alt="" />
          </button>

          <button className="lg:h-[54px] lg:w-[54px] h-12 w-12 flex justify-center items-center rounded-full bg-[#222] ml-4 lg:ml-6">
            <Image src={githubIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 flex justify-end mt-14 lg:mt-0">
        <Image
          src={devImage}
          alt=""
          height={700}
          width={600}
          className=" rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default IntroSection;
