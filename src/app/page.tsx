import IntroSection from "./components/IntroSection"
import SectionDivider from "./components/SectionDivider"
import FeatureProjectsSection from "./components/FeatureProjectsSection"
import AboutSection from "./components/AboutSection"

export default function Home() {
  return (
    <>
      <IntroSection />
      <SectionDivider />
      <FeatureProjectsSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
    </>
  );
}
