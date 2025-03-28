import Image from "next/image"

import arrowImg from "../assets/images/arrow.svg";
import githubImg from "../assets/images/github.svg";
const ProjectCard = ({
  tag,
  title,
  description,
  year,
  role,
  link,
  githublink,
  imgRef,
}) => {
  return (
    <div className="lg:grid grid-cols-12 gap-16 items-center lg:mb-32 mb-24">
      <div className=" col-span-12 lg:col-span-6 ">
        <div className="bg-[#1a1a1a] rounded-xl p-3 lg:p-6 ">
          <div className="h-[30px] lg:h-[37px] w-[123px] lg:w-[145px] rounded-full bg-[#0a0a0a] flex justify-center items-center text-white text-xs lg:text-sm ">
            {tag}
          </div>
          <div className="lg:w-full flex justify-center mt-2 lg:mt-10">
            <Image
              src={imgRef}
              alt=""
              className="my-2 lg:my-12  lg:w-[486px] h-auto lg:h-[347px] lg:object-cover object-center object-contain"
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 mt-6 lg:mt-0">
        <p className=" font-manrope font-medium text-2xl lg:text-4xl text-white leading-[140%]">
          {title}
        </p>
        <p className=" lg:text-lg text-[#c7c7c7] leading-[150%] mt-5">
          {description}
        </p>

        <p className="uppercase font-semibold text-white mt-10">project info</p>
        <hr className="border-t border-[#484848] my-4" />
        <div className="flex justify-between">
          <p className="font-medium text-white ">Year</p>
          <p className="font-medium text-[#c7c7c7]">{year}</p>
        </div>
        <hr className="border-t border-[#484848] my-4" />
        <div className="flex justify-between">
          <p className="font-medium text-white ">Role</p>
          <p className="font-medium text-[#c7c7c7]">{role}</p>
        </div>
        <hr className="border-t border-[#484848] my-4" />

        <div className="flex mt-10">
          <a
            href={link} target="_blank"
            className="font-bold text-sm lg:text-base text-primary uppercase border-b-2 border-primary pb-1 flex "
          >
            LIVE DEMO <Image src={arrowImg} width={18} alt="" className="ml-2" />
          </a>
          <a
            href={githublink} target="_blank"
            className="font-bold text-primary uppercase border-b-2 border-primary pb-1 text-sm lg:text-base flex ml-8"
          >
            see on github{" "}
            <Image src={githubImg} width={21} alt="" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
