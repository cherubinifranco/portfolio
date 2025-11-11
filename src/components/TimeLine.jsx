/** @format */

const JOBS = [
  {
    startDate: "Sep. 2025",
    finishDate: "Present",
    title: "Network Monitoring Analyst",
    place: "Tecnored Latam",
    description:
      "Monitored one of Argentina’s largest network infrastructures, ensuring stability and continuity through proactive incident reporting and support.",
  },
  {
    startDate: "Oct. 2024",
    finishDate: "Present",
    title: "Freelance",
    place: "Fiverr",
    description: "Developed cross platform desktop applications, integrating web and native technologies, automating real-time data processes, and connnecting hardware for production enviroments"
  },
  {
    startDate: "Jan. 2023",
    finishDate: "Sep. 2025",
    title: "General IT Technician",
    place: "Unit 11 – Piñero Maximum-Security Prison",
    description:
      "Installation and support of CCTV and IP telephony systems, internal auditing, and general maintenance of various systems", 
  },
];

import RevealOnScroll from "./RevealOnScroll";

export default function TimeLine() {
  return (
    <section id="timeline" className="pt-8">
      <h1 className="poppins-bold w-full text-center text-alwhite text-3xl py-12">Work Experience</h1>
      {JOBS.map((el, index) => (
        <RevealOnScroll>
          <article
            className={"w-full flex justify-center " + (index % 2 == 0 ? "flex-row" : "flex-row-reverse")}
            key={index + el.startDate}
          >
            <div className={"w-80 flex-col flex " + (index % 2 == 0 ? "items-end text-right" : "items-start")}>
              <span className="text-thirdbg text-xs pb-2">{el.startDate + " - " + el.finishDate}</span>
              <h2 className="text-alwhite text-xl poppins-bold letter tracking-wide py-2">{el.title}</h2>
              <p className="text-thirdbg text-sm">{el.place}</p>
              <p className="text-alwhite py-3">{el.description}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-5 w-4 bg-alwhite rounded-full"></div>
              <div className="my-2 mx-6 w-1 bg-thirdbg rounded-lg h-full"></div>
            </div>
            <div className="w-80"></div>
          </article>
        </RevealOnScroll>
      ))}
    </section>
  );
}
