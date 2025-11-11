import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TimeLine from "../components/TimeLine";


export default function IndexPage(){
    
    return (<main className="overflow-hidden">
        <Navbar />
        <Banner />
        <TimeLine />
        <Projects />
        {/* <About /> */}
        <Footer />
    </main>)
}