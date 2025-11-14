import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import Card from "../components/Card";
import { beanIt } from "../projects";
import Features from "../components/Features";
/* Screens

Main UI screenshot – shows how data is loaded or displayed.

Preset editor screenshot – to visualize customization.

Preview or send screen – gives an idea of the workflow.

(Optional) A short video demo (20–40 s) that walks through the process.

*/

export default function BeanItPage() {
  return (
    <main className="overflow-hidden text-white">
      <Navbar />
      <ProjectHero projectInfo={beanIt} />
      <Features features={beanIt.features}/>
      <section className="flex flex-row  flex-wrap gap-10 justify-center pt-10 pb-20">
        {beanIt.cards.map(card => (
          <Card cardDetail={card}/>
        ))}
      </section>
      <Footer />
    </main>
  );
}
