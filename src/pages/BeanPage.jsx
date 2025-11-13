import BreadCrumbs from "../components/BreadCrumbs";

const proyectInfo = {
  name: "Bean It",
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
    <main className="flex flex-col items-center">
    <section className="flex flex-col w-full flex-wrap">
        <BreadCrumbs
          links={[
            { name: "Proyects", url: "/proyects" },
            { name: "Bean It", url: "/beanit" },
          ]}
        />

      <div>
        <h1>Bean It</h1>

      </div>
      <img src="./assets/beanit-hero.png" alt="Bean It Hero Image" className="w-80 h-80"/>
    </section>
    </main>
  );
}
