import Image from "next/image"
import linkedinImg from "../assets/images/linkedin.svg";
import githubImg from "../assets/images/github.svg";
import twitterImg from "../assets/images/x.svg";
import instagramImg from "../assets/images/instagram.svg";
const LetsConnectSection = () => {
  return (
    <div className="lg:grid grid-cols-12 gap-5 px-4 lg:px-40 pb-14" id="contact">
      <div className="col-span-6 flex flex-col justify-between">
        <div>
          <p className=" font-bebas text-[43px] lg:text-[76px] leading-[100%] text-white ">
            Let’s connect
          </p>
          <p className=" text-neutral-offwhite leading-[150%] mt-4">
            Say hello at &nbsp;
            <a
              href="mailto:hello@adewumialabi.com"
              className="text-white border-b border-primary"
            >
              hello@adewumialabi.com
            </a>{" "}
          </p>
          <p className=" text-neutral-offwhite leading-[150%] mt-2">
            For more info, here’s my{" "}
            <a href="" className="text-white border-b border-primary">
              resume
            </a>
          </p>
          <div className="flex mt-10">
            <button>
              <Image src={linkedinImg} height={32} width={32} alt="" />
            </button>
            <button className="ml-4">
              <Image src={githubImg} height={32} width={32} alt="" />
            </button>
            <button className="ml-4">
              <Image src={twitterImg} height={32} width={32} alt="" />
            </button>
            <button className="ml-4">
              <Image src={instagramImg} height={32} width={32} alt="" />
            </button>
          </div>
        </div>

        <p className="font-manrope text-neutral-offwhite leading-[160%] hidden lg:inline ">
          © {new Date().getFullYear()} Adewumi Alabi
        </p>
      </div>
      <div className="col-span-6 mt-10 lg:mt-0">
        <form action="">
          <p className="font-manrope font-medium text-neutral-offwhite leading-[160%] mb-2">
            Name
          </p>
          <input
            type="text"
            className="rounded bg-[#1a1a1a] w-full h-[46px] lg:h-[51px] text-white px-4 focus:outline-none"
          />

          <p className="font-manrope font-medium text-neutral-offwhite leading-[160%] mb-2 mt-6">
            Email
          </p>
          <input
            type="email"
            className="rounded bg-[#1a1a1a] w-full h-[46px] lg:h-[51px] text-white px-4 focus:outline-none"
          />

          <p className="font-manrope font-medium text-neutral-offwhite leading-[160%] mb-2 mt-6">
            Subject
          </p>
          <input
            type="text"
            className="rounded bg-[#1a1a1a] w-full h-[46px] lg:h-[51px] text-white px-4 focus:outline-none"
          />

          <p className="font-manrope font-medium text-neutral-offwhite leading-[160%] mb-2 mt-6">
            Message
          </p>
          <textarea name="" id="" cols="30" rows="7" className="rounded bg-[#1a1a1a] w-full  text-white px-4 focus:outline-none"></textarea>
          <button type="submit" className="w-[140px] h-[54px] rounded-full bg-primary mt-6 font-manrope font-bold uppercase">Submit</button>
          
        </form>

        <p className="font-manrope text-neutral-offwhite leading-[160%] lg:hidden mt-24 ">
          © {new Date().getFullYear()} Adewumi Alabi
        </p>
      </div>
    </div>
  );
};

export default LetsConnectSection;
