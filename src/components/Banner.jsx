import banner from "../files/herotexture.webp";
import downloadFile from "../files/resume.pdf";
import * as icons from "../files/icons";

const CONTENT = {
  subtitle: "Hi, i'm",
  title: "Franco Cherubini",
  paragraph: [
    "Mostly code, often design, and like to do automation tasks in apps.  Ussually work with React, Electron and Node. Currently learning C++",
  ],
};
export default function Banner() {
  return (
    <section id="banner" className="w-full p-6">
      <div
        className={
          "flex flex-row justify-around items-center flex-wrap w-full h-[700px] bg-contain"
        }
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-white z-10">
          <div className="flex flex-row items-center">
            <span className="h-[1px] w-8 bg-white"></span>
            <p className="px-4">Hello, i'm</p>
          </div>
          <h1 className="text-6xl max-w-[23ch] pb-8 poppins-semibold">
            {CONTENT.title}
          </h1>
          <p className="text-sm max-w-[55ch] pb-2 font-normal">
            {CONTENT.paragraph}
          </p>

          <div className="py-3">
            <a className="inline-flex items-center gap-2 p-2 hover:text-mainacc transition duration-400" href="http://github.com/cherubinifranco" target="_blank">
              {icons.githubicon}
            </a>
            <a className="inline-flex items-center gap-2 p-2 hover:text-mainacc transition duration-400" href="http://linkedin.com/in/cherubinifranco" target="_blank">
              {icons.linkedinIcon}
            </a>
            <a className="inline-flex items-center gap-2 p-2 hover:text-mainacc transition duration-400" href="mailto:cherubini.franco@hotmail.com" target="_blank">
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
      <div></div>
    </section>
  );
}

function SocialLink({ href, icon, handle, className }) {
  return (
    <a
      href={href}
      target="_blank"
      className={
        "inline-flex items-center gap-2 cursor-pointer py-4 hover:text-[" + +"]"
      }
    >
      <div>{icon}</div>
      <span>{handle}</span>
    </a>
  );
}
