import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
const projectInfo = {
  name: "Bean It",
  url: "/beanit",
  description: "Automated Email Sender from Excel Data",
  overview:
    "Bean It is a desktop application that automates bulk email delivery based on .xlsx spreadsheets. It reads structured data and generates personalized messages using variable placeholders linked to each column, making it ideal for small businesses or teams that need quick, personalized communication.",
  features: [
    "Reads .xlsx files and maps data to custom email templates.",
    "Up to four configurable message presets with dynamic text variables.",
    "Offline-first design — all data and settings are stored locally for privacy and reliability.",
    "Simple, responsive interface designed for productivity.",
    "Built as a cross-platform desktop app using modern web technologies.",
  ],
  stack: ["React", "Electron", "NodeJs", "Tailwind"],
  role: "Designed and developed the full application — front-end, system logic, and email automation engine.",
  imgs: [""],
};

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
      <ProjectHero projectInfo={projectInfo}/>
      <Footer/>
    </main>
  );
}
