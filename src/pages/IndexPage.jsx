import { bchmap, beanIt } from "../projects";

import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectHero from "../components/ProjectHero";
import ProjectsContainer from "../components/ProjectsContainer";
import OtherProject from "../components/Otherproject";
import TimeLine from "../components/TimeLine";

export default function IndexPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Banner />
      <TimeLine />
      <h1 id="projects" className="poppins font-semibold w-full text-center text-alwhite text-3xl pt-28">Featured Projects</h1>
      <ProjectHero bc={false} projectInfo={beanIt}/>
      <ProjectsContainer>
        <OtherProject projectInfo={bchmap} />
      </ProjectsContainer>
      {/* <About /> */}
      <Footer />
    </main>
  );
}
