import RevealOnScroll from "./RevealOnScroll";
import BreadCrumbs from "./BreadCrumbs";
import Badges from "./Badges";
export default function ProjectHero({
  projectInfo = {
    name: "Project Name",
    url: "/projects/name",
    description: "description",
    overview:
      "Large overview. This contains more text than the descriptions as it goes more in depth in what the app does and how the app works",
    features: [
      "Bullet Points that makes the app stand out",
      "Bullet Points that makes the app stand out 2",
      "Bullet Points that makes the app stand out 3",
      "Bullet Points that makes the app stand out 4",
      "Bullet Points that makes the app stand out 5",
    ],
    stack: ["Name", "Your", "Stack", "Technologies"],
    role: "Explain what you did in this project, of couse you did everything. But make it sound preatty",
    img: "./assets/test-1.png",
  },
  bc = true,
}) {
  return (
    <RevealOnScroll>
      <section id="hero" className={`flex flex-col lg:flex-row w-full justify-between px-8 max-w-[1400px] mx-auto text-white ${bc ? " pt-1 md:pt-28" : "pt-8"}`}>
        <div className="flex flex-col justify-between p-4 lg:pr-10 w-full lg:w-1/2 gap-8">
          {bc && (
            <div className="ml-6 md:ml-0">
              <BreadCrumbs
                links={[
                  { name: "Projects", url: "/projects" },
                  { name: projectInfo.name, url: projectInfo.url },
                ]}
              />
            </div>
          )}

          <h1 className="text-6xl py-4">{projectInfo.name}</h1>
          <p>{projectInfo.description}</p>
          <p>{projectInfo.overview}</p>

          <div className="flex flex-row items-center">
            <div className="bg-blue-200 h-4 w-4 rounded-full"></div>
            <div className="bg-blue-200 w-full h-1"></div>
            <div className="bg-blue-200 h-4 w-4 rounded-full"></div>
          </div>

          <Badges badges={projectInfo.stack} />

          {!bc && (
            <a className="bg-blue-600 hover:bg-blue-800 px-6 py-3 mx-auto rounded-lg" href={"/projects" + projectInfo.url}>
              See project
            </a>
          )}
        </div>

        <img src={projectInfo.img} alt={projectInfo.name + " hero image"} className="lg:w-1/2 rounded-xl object-contain" />
      </section>
    </RevealOnScroll>
  );
}
