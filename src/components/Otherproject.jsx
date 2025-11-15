import Badges from "./Badges";
import RevealOnScroll from "./RevealOnScroll";
export default function OtherProject({
  projectInfo = { name: "App Name", description: "Short description about the app", url: "/testurl", img: "./assets/test-1.png" },
}) {
  return (
    <RevealOnScroll>
      <article
        className="
    border border-gray-600 
    p-8 rounded-lg 
    flex flex-col md:flex-row md:gap-12 lg:gap-20 
    items-center 
    bg-secondbg text-white 
    mx-4
    xl:mx-auto
    max-w-[1200px]
  "
      >
        <div className="flex flex-col justify-between gap-8 flex-1 pb-4">
          <h1 className="text-4xl font-semibold">{projectInfo.name}</h1>

          <p className="max-w-[80ch] text-gray-300 leading-relaxed">{projectInfo.overview}</p>

          <Badges badges={projectInfo.stack} />

          <a
            href={"/projects" + projectInfo.url}
            className="
        py-2.5 px-6 
        bg-blue-600 hover:bg-blue-700 
        rounded-lg 
        w-fit 
        transition duration-300 
        font-medium
      "
          >
            View Project
          </a>
        </div>

        <img src={projectInfo.img} alt={projectInfo.name} className="h-56 md:h-60 object-contain rounded-lg" />
      </article>
    </RevealOnScroll>
  );
}
