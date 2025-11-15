import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectHero from "../components/ProjectHero";
import { beanIt, bchmap } from "../projects";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar links={[{name: "Home", link:"/"},{ name: "Bean It", link: "#beanit" }, {name:"Bch Map", link:"#bchmap"}]} />
      <h1
        id="beanit"
        className="poppins font-semibold w-full text-center text-alwhite text-3xl pt-12"
      ></h1>
      <ProjectHero bc={false} projectInfo={beanIt} />
      <h1
        id="bchmap"
        className="poppins font-semibold w-full text-center text-alwhite text-3xl pt-12"
      ></h1>
      <ProjectHero bc={false} projectInfo={bchmap} />
      <Footer />
    </main>
  );
}
