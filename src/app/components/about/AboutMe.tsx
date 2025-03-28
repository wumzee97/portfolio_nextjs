import Image from "next/image"
import ImageSrc from "../../assets/images/adewumi.png"
import circle from "../../assets/images/download.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import githubIcon from "../../assets/images/github.svg";

const AboutSection = () => {
    return (
        <>
            <div className="lg:grid grid-cols-12 gap-5 lg:px-40 px-4 lg:pt-24">
                <div className="col-span-5 ">
                    <p className="leading-[90%] text-[57px] lg:text-[101px] font-bebas text-white mt-10 lg:mt-0 mb-5">
                        About Me
                    </p>
                </div>
                <div className="col-span-7 ">
                    <p className=" font-manrope text-2xl lg:text-[32px] leading-[140%] text-white mb-4">
                        I am a Software Engineer based in Lagos Nigeria.
                    </p>
                    <p className=" text-neutral-offwhite leading-[150%] text-lg lg:mt-2 mb-10">
                        A Lagos-based Software Engineer specializing in modern web technologies, including React, Vue.js, TypeScript, Node.js, and other backend infrastructure. Adept at building seamless user interfaces, optimizing interconnectivity, and crafting scalable solutions. Passionate about delivering high-performance applications with a meticulous approach and a deep understanding of development lifecycles.
                    </p>
                    <div className="flex">
                        <button className="h-12 lg:h-[54px] uppercase text-sm lg:text-base  rounded-full bg-primary font-manrope font-bold flex justify-between items-center px-1 lg:px-2 pl-2 lg:pl-4 ">
                            {" "}
                            Download Resume
                            <Image src={circle} height={40} width={40} alt="" className="ml-3" />
                        </button>
                        <button className="lg:h-[54px] lg:w-[54px] h-12 w-12 flex justify-center items-center rounded-full bg-[#222] ml-4 lg:ml-6">
                            <Image src={linkedinIcon} alt="" />
                        </button>

                        <button className="lg:h-[54px] lg:w-[54px] h-12 w-12 flex justify-center items-center rounded-full bg-[#222] ml-4 lg:ml-6">
                            <Image src={githubIcon} alt="" />
                        </button>
                    </div>
                </div>
                <div className="col-span-12">

                    <Image src={ImageSrc}  alt="Adewumi Alabi" className="mt-12 h-[800px] w-full object-cover rounded-2xl " />
                </div>
            </div>
        </>
    );
};

export default AboutSection;
