import SectionDivider from "../components/SectionDivider"
import AboutMe from "../components/about/AboutMe"
import Capabilities from "../components/about/Capabilities"
import Experience from "../components/about/Experience"

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