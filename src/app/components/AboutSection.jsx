import Image from "next/image";
import ImageSrc from "../assets/images/image.png";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="lg:grid grid-cols-12 gap-5 lg:px-40 px-4 lg:pt-16  lg:mb-[300px]">
      <div className="col-span-6 hidden lg:inline">
        <p className="leading-[90%] text-[101px] font-bebas text-white">
          About Me
        </p>
      </div>
      <div className="col-span-6 ">
        <p className=" font-manrope text-[32px] hidden lg:inline leading-[140%] text-white">
          I am a Software Engineer based in Lagos Nigeria.
        </p>
        <p className=" text-neutral-offwhite leading-[150%] text-lg lg:mt-2 mb-10">
          A Lagos-based Software Engineer specializing in modern web
          technologies, including React, Vue.js, TypeScript, Node.js, and other
          backend infrastructure. Adept at building seamless user interfaces,
          optimizing interconnectivity, and crafting scalable solutions.
          Passionate about delivering high-performance applications with a
          meticulous approach and a deep understanding of development
          lifecycles.
        </p>
        <Link
          href="/about"
          className=" uppercase border-b-2 pb-1 border-primary text-primary font-manrope text-sm lg:text-base font-bold "
        >
          More about me
        </Link>
        <Image src={ImageSrc} alt="Adewumi Alabi" className="mt-12 lg:hidden" />
      </div>
    </div>
  );
};

export default AboutSection;
