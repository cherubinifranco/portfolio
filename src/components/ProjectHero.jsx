import BreadCrumbs from "./BreadCrumbs";
export default function ProjectHero({
  projectInfo = {
    name: "Project Name",
    url: "/name",
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
    imgs: ["./assets/beanit-hero.png"],
  },
}) {
  return (
    <section className="flex flex-col md:flex-row w-full flex-wrap justify-between mt-1 md:mt-32 px-8 max-w-[1400px] mx-auto pb-10">
      <div className="flex flex-col justify-between p-4 md:pr-10 w-full md:w-1/2 gap-8">
        <div className="ml-6 md:ml-0">
          <BreadCrumbs
            links={[
              { name: "Projects", url: "/projects" },
              { name: projectInfo.name, url: projectInfo.url },
            ]}
          />
        </div>

        <h1 className="text-6xl py-4">{projectInfo.name}</h1>
        <p>{projectInfo.description}</p>
        <p>{projectInfo.overview}</p>
        <div className="flex flex-row items-center">
          <div className="bg-blue-200 h-4 w-4 rounded-full"></div>
          <div className="bg-blue-200 w-full h-1"></div>
          <div className="bg-blue-200 h-4 w-4 rounded-full"></div>
        </div>
        <div>
          {projectInfo.stack.map((item) => (
            <span
              className="border rounded-lg border-gray-400 text-gray-400 text-xs py-2 px-4 mx-2 hover:border-blue-200 hover:text-blue-200"
              key={item + "stack"}
            >
              {item}
            </span>
          ))}
        </div>
        <span></span>
      </div>
      <img src="./assets/beanit-hero.png" alt="Bean It Hero Image" className="md:w-1/2 rounded-xl object-contain transition duration-700 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" />
    </section>
  );
}
