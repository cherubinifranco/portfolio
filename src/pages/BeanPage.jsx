import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import { beanIt, bchmap } from "../projects";
import Features from "../components/Features";
import OtherProject from "../components/Otherproject";
import ProjectsContainer from "../components/ProjectsContainer";
import CardsContainer from "../components/CardsContainer";
import Gallery from "../components/Gallery";

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
      <ProjectHero projectInfo={beanIt} />
      <Features features={beanIt.features} img={beanIt.imgfeatures} />
      <Gallery gallery={beanIt.imgs} />
      <CardsContainer cards={beanIt.cards} />
      <ProjectsContainer>
        <OtherProject projectInfo={bchmap} />
      </ProjectsContainer>
      <Footer />
    </main>
  );
}
