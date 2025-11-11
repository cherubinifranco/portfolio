/** @format */

import music1 from "../files/music1.png";
import music2 from "../files/music2.png";
import gato1 from "../files/gato1.png";
import gato2 from "../files/gato2.png";
import RevealOnScroll from "./RevealOnScroll";

const CONTENT = {
  title: "More than just a developer",
  subtitle: "Making things with code isn't the only thing i like",
  paragraph: "I love to mess around with retro stuff or just make my own. Gettings things done it's where i shine the most.",
};
const CONTENT2 = {
  title: "Couldn't forget about my lovely pets",
  subtitle: "",
  paragraph:
    "",
};

export default function About() {
  return (
    <section id="about" className="pt-8 text-alwhite ">
      <RevealOnScroll>
        <h1 className="poppins-bold w-full text-center text-3xl py-12">{CONTENT.title}</h1>
        <main className="flex flex-row flex-wrap justify-center">
          <article>
            <div className="flex flex-row justify-center gap-4 pb-12 flex-wrap">
              <div className="relative w-80 h-80">
                <img
                  src={""}
                  alt=""
                  className="absolute top-40 left-40 h-56 w-96  object-cover rounded-lg shadow-lg z-10"
                />
                <div className="absolute top-0 left-0 w-80 h-80 object-cover rounded-lg shadow-lg z-0">
                  <img src={""} alt="" className="w-full h-full" />
                </div>
              </div>

              <div className="w-96 z-20">
                <h2 className="poppins-bold max-w-[16ch] text-3xl pt-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">{CONTENT.subtitle}</h2>
                <p className="mmd:pl-40 mx-auto p-4">{CONTENT.paragraph}</p>
              </div>
            </div>
          </article>
          <article>
            <h1 className="poppins-bold w-full text-center text-3xl py-12">{CONTENT2.title}</h1>
            <div className="flex flex-row justify-center pb-24 pr-40">
              <div className="relative w-80 h-80">
                <img
                  src={""}
                  alt=""
                  className="absolute top-40 left-40 h-56 w-80  object-cover rounded-lg shadow-lg z-10"
                />
                <img
                  src={""}
                  alt=""
                  className="absolute top-0 left-0 w-80 h-80 object-cover rounded-lg shadow-lg z-0"
                />
              </div>
            </div>
            <p className="max-w-[60ch] mx-auto p-4 pb-10">{CONTENT2.paragraph}</p>
          </article>
        </main>
      </RevealOnScroll>
    </section>
  );
}
