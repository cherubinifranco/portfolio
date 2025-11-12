import { useEffect, useState } from "react";
import {
  projectIcons,
  bchMapIcon,
  beanItIcon,
  bingoIcon,
  brackets,
  externalLink,
} from "../files/icons";
import RevealOnScroll from "./RevealOnScroll";
const PROJECTS = [
  {
    icon: beanItIcon,
    title: "Bean It",
    paragraphs: [
      "App designed to send emails based on an Excel file (XSLX)",
      "It comes with 4 message presets and the ability to use variables based on the columns of the file",
    ],
    url: "beanit",
    repository: "https://github.com/cherubinifranco/beanit",
    img: "",
  },
  {
    icon: bchMapIcon,
    title: "Bitcoin Cash Map",
    paragraphs: [
      "Interactive map with custom markers that displays business that accept BCH as a form of payment",
      "Made for Bitcoin Cash Argentina, so there is no public repository",
    ],
    url: "bchmap",
    repository: "",
  },
  {
    icon: bingoIcon,
    title: "Bingo Maker",
    paragraphs: [
      "One of my first projects. It's not that complicated, and it's not that good.",
      "Still works as it was design to do so. Custom images for your bingo nights",
    ],
    url: "bingomaker",
    repository: "https://github.com/cherubinifranco/bingomaker",
  },
];

export default function Projects() {
  return (
    <section id="#projects" className="text-alwhite">
      <h1 className="poppins-bold w-full text-center text-alwhite text-3xl py-12">
        Featured Projects
      </h1>

      {PROJECTS.map((project, index) => (
        <RevealOnScroll>
          <article className="p-6" key={index + "project"}>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="inline-flex gap-4">
                <span className="poppins-normal tracking-wide text-2xl">
                  {"I".repeat(index + 1) + "."}
                </span>

                <div className="bg-secondbg flex flex-col justify-between p-4">
                  <div className="flex flex-row justify-between">
                    <div className="">{brackets.tl}</div>
                    <div className="0">{brackets.tr}</div>
                  </div>
                  <div className="p-2 mx-6 flex flex-col items-center justify-center gap-2">
                    {project.icon}
                    <h1 className="text-2xl poppins-normal font-semibold tracking-wide ">
                      {project.title}
                    </h1>
                    {project.paragraphs.map((par, index) => (
                      <p
                        key={index + "project-paragraph"}
                        className="max-w-[40ch] py-1"
                      >
                        {par}
                      </p>
                    ))}
                    {project.repository ? (
                      <a
                        href={project.repository}
                        target="_blank"
                        className="mt-3 inline-flex gap-2 text-sm hover:underline"
                      >
                        Open repo {externalLink}
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="">{brackets.bl}</div>
                    <div className="0">{brackets.br}</div>
                  </div>
                </div>
              </div>

              <div className="bg-secondbg flex flex-col justify-between p-4 ml-6">
                <div className="flex flex-row justify-between">
                  <div className="">{brackets.tl}</div>
                  <div className="0">{brackets.tr}</div>
                </div>
                <div className="mx-6 w-96 h-60 flex flex-col items-center justify-center">
                  <img src="" alt="" className="w-80 h-52"/>
                  <a
                    href={project.url}
                    className="mt-3 inline-flex gap-2 text-sm hover:underline p-3 px-5"
                  >
                    See project
                  </a>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="">{brackets.bl}</div>
                  <div className="0">{brackets.br}</div>
                </div>
              </div>
            </div>
          </article>
        </RevealOnScroll>
      ))}
    </section>
  );
}
