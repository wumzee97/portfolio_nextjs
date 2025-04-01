import { Metadata } from "next";
import SectionDivider from "../components/SectionDivider"
import AboutMe from "../components/about/AboutMe"
import Capabilities from "../components/about/Capabilities"
import Experience from "../components/about/Experience"

export const metadata: Metadata = {
  title: "ADEWUMI ALABI | Software Engineer | About",
  description: "A Lagos based Software Engineer knowledgeable about current trends in user interfaces, inter-connectivity and back-end infrastructure. Expertly handles development lifecycle with meticulous approach and big-picture understanding of requirements.",
  openGraph: {
    title: 'ADEWUMI ALABI | Software Engineer',
    description: "A Lagos based Software Engineer knowledgeable about current trends in user interfaces, inter-connectivity and back-end infrastructure. Expertly handles development lifecycle with meticulous approach and big-picture understanding of requirements.",
    images: 'https://adewumialabi.com/og.png'
  }
};

function page() {
  return (
    <>
    <AboutMe />
    <Capabilities />
    <SectionDivider />
    <Experience />
    <SectionDivider />
    </>
  )
}

export default page