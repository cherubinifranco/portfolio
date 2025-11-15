import banner from "../files/herotexture.webp";
import downloadFile from "../files/resume.pdf";
import * as icons from "../files/icons";

const CONTENT = {
  subtitle: "Hi, i'm",
  title: "Franco Cherubini",
  paragraph: [
    "Mostly code, sometimes design. I build apps that automate things. I work with React, Electron, and Node, and I'm currently exploring C++.",
  ],
};
export default function Banner() {
  return (
    <section id="banner" className="w-full">
      <div
        className="
      flex flex-col lg:flex-row 
      justify-center lg:justify-around 
      items-center 
      w-full h-[700px] 
      bg-cover bg-center
      px-6 lg:px-16
    "
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Text */}
        <div className="text-white z-10 max-w-[700px] text-center lg:text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="h-[1px] w-8 bg-white"></span>
            <p className="px-4 tracking-wider">Hello, I'm</p>
          </div>

          <h1 className="text-5xl lg:text-6xl max-w-[23ch] pb-8 poppins-semibold">{CONTENT.title}</h1>

          <p className="text-sm max-w-[55ch] pb-2 font-normal mx-auto lg:mx-0">{CONTENT.paragraph}</p>

          <div className="py-3 flex justify-center lg:justify-start">
            <a
              className="inline-flex items-center gap-2 p-2 hover:text-mainacc transition duration-400"
              href="https://github.com/cherubinifranco"
              target="_blank"
            >
              {icons.githubicon}
            </a>
            <a
              className="inline-flex items-center gap-2 p-2 hover:text-mainacc transition duration-400"
              href="https://linkedin.com/in/cherubinifranco"
              target="_blank"
            >
              {icons.linkedinIcon}
            </a>
            <a
              className="inline-flex items-center gap-2 p-2 hover:text-mainacc transition duration-400"
              href="mailto:cherubini.franco@hotmail.com"
            >
              {icons.emailIcon}
            </a>
          </div>

          <a
            href={downloadFile}
            download="Resume"
            className="inline-flex gap-2 p-4 bg-accent mt-4 hover:bg-accent2 transition-all rounded-lg"
          >
            Download Resume {icons.downloadIcon}
          </a>
        </div>
      </div>
    </section>
  );
}
