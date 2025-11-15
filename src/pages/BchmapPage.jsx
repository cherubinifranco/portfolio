import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import { beanIt, bchmap } from "../projects";
import Features from "../components/Features";
import OtherProject from "../components/Otherproject";
import ProjectsContainer from "../components/ProjectsContainer";
import CardsContainer from "../components/CardsContainer";

export default function BeanItPage() {
  return (
    <main className="overflow-hidden text-white">
      <Navbar
        links={[
          { name: "Home", link: "/" },
          { name: "Features", link: "#features" },
          { name: "Other", link: "#other-projects" },
        ]}
      />
      <ProjectHero projectInfo={bchmap} />
      <Features features={bchmap.features} img={bchmap.imgfeatures} />
      <CardsContainer cards={bchmap.cards} />
      <ProjectsContainer>
        <OtherProject projectInfo={beanIt} />
      </ProjectsContainer>
      <Footer />
    </main>
  );
}
