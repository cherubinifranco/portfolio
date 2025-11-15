import {JOBS} from "../jobs.js";

import RevealOnScroll from "./RevealOnScroll";

export default function TimeLine() {
  return (
    <section id="timeline" className="pt-12 px-4">
      <h1 className="poppins-bold w-full text-center text-alwhite text-4xl py-14">Work Experience</h1>

      {JOBS.map((el, index) => (
        <RevealOnScroll key={index + el.startDate}>
          <article className={"w-full flex justify-center mb-20 flex-row-reverse " + (index % 2 === 0 ? "" : "md:flex-row")}>
            <div
              className={
                "w-80 flex flex-col leading-relaxed items-start text-left " + (index % 2 === 0 ? "" : "md:items-end md:text-right")
              }
            >
              <span className="text-thirdbg text-xs tracking-wide pb-1">{el.startDate + " – " + el.finishDate}</span>

              <h2 className="text-alwhite text-2xl poppins-bold tracking-wide py-1">{el.title}</h2>

              <p className="text-thirdbg text-sm pb-2">{el.place}</p>

              <p className="text-alwhite text-[15px] leading-[1.6] max-w-[32ch]">{el.description}</p>
            </div>

            <div className="flex flex-col items-center px-8">
              <div className="h-5 w-5 bg-alwhite rounded-full"></div>
              <div className="my-2 w-1 bg-thirdbg rounded-lg h-full"></div>
            </div>

            <div className="w-80 hidden md:inline"></div>
          </article>
        </RevealOnScroll>
      ))}
    </section>
  );
}
