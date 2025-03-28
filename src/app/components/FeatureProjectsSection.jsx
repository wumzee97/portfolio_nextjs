import React from "react";
import ProjectCard from "./ProjectCard";
import workImg from "../assets/images/work.png";
import fundallImg from "../assets/images/fundall.png"
import obiexImg from "../assets/images/obiex.png"
import simplifiedImage from "../assets/images/simplified.svg"
import GeaImage from '../assets/images/GEA.png'

const FeatureProjectsSection = () => {

  const projects = [
    {
      tag: "Obiex",
      title: "Obiex Website",
      description:
        "Teamed up with another developer and a designer to breathe life into the Obiex website. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating all the pages for users satisfaction.",
      imgRef: obiexImg,
      year: "2023",
      role: "Frontend Engineer",
      link: "https://obiex.finance",
      githublink: "#",
    },
    {
      tag: "Fundall",
      title: "Fundall Website",
      description:
        "Led the development of the Fundall website with two other developers using Nuxt, Vue, Tailwind CSS, Vuetify",
      imgRef: fundallImg,
      year: "2023",
      role: "Lead Frontend Engineer",
      link: "https://fundall.io",
      githublink: "#",
    },
    {
      tag: "Simplified IQ",
      title: "Simplified IQ",
      description:
        "SimplifiedIQ empowers educators and institutions to deliver impactful assessments that measure members' understanding and learning progress.",
      imgRef: simplifiedImage,
      year: "2023",
      role: "Lead Frontend Engineer",
      link: "#",
      githublink: "#",
    },
    {
      tag: "GEA Learning Pathways",
      title: "Grande Esprits Academy",
      description:
        "Grande Esprits Learning Pathways is a digital platform that connect vetted educators and consultants with parents for their child's unique needs, from early development to career planning. This is a fullstack application which I built with Node.js, Typescript, Vue.js, Mongo DB.",
      imgRef: GeaImage,
      year: "2025",
      role: "Full Stack Engineer",
      link: "#",
      githublink: "#",
    },
  ];
  return (
    <div className="px-4 lg:px-40" id="work">
      <h2 className="font-bebas text-[43px] lg:text-[76px] text-white leading-[100%]">
        Featured Projects
      </h2>
      <p className=" lg:text-lg text-neutral-offwhite mb-24">
        Here are some of the selected projects that showcase my passion for{" "}
        <br /> front-end development.
      </p>
      {projects.map(
        ({ tag, title, description, imgRef, year, role, link, githublink }) => (
          <ProjectCard
            tag={tag}
            title={title}
            description={description}
            imgRef={imgRef}
            year={year}
            role={role}
            link={link}
            githublink={githublink}
            key={title}
          />
        )
      )}
    </div>
  );
};

export default FeatureProjectsSection;
