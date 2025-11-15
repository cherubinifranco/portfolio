import { logoIconFull } from "../files/icons";
import downloadFile from "../files/resume.pdf";

export default function Footer() {
  return (
    <footer className="bg-secondbg">
      <div
        id="#footer"
        className="flex flex-col gap-8 sm:gap-10 items-center sm:items-start sm:flex-row sm:justify-center p-10 w-full text-alwhite"
      >
        <a
          className="w-32 h-32 mx-10 opacity-90 hover:opacity-100 transition"
          href="/"
        >
          {logoIconFull}
        </a>

        <article className="flex flex-col gap-2 sm:w-40 w-auto items-center sm:items-start">
          <h1 className="text-sm font-semibold tracking-wide uppercase text-gray-300 pb-1">
            Site
          </h1>
          <a
            href="/#banner"
            className="text-xs text-gray-400 hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="/projects"
            className="text-xs text-gray-400 hover:text-blue-400 transition"
          >
            Projects
          </a>
        </article>

        <article className="flex flex-col gap-2 sm:w-40 w-auto items-center sm:items-start">
          <h1 className="text-sm font-semibold tracking-wide uppercase text-gray-300 pb-1">
            Connect
          </h1>
          <a
            href="https://www.linkedin.com/in/cherubinifranco"
            target="_blank"
            className="text-xs text-gray-400 hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/cherubinifranco"
            target="_blank"
            className="text-xs text-gray-400 hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:cherubini.franco@hotmail.com"
            target="_blank"
            className="text-xs text-gray-400 hover:text-blue-400 transition"
          >
            Email
          </a>
          <a
            href="https://www.fiverr.com/francocherubini"
            target="_blank"
            className="text-xs text-gray-400 hover:text-blue-400 transition"
          >
            Fiverr
          </a>
          <a
            href={downloadFile}
            download="Resume"
            className="text-xs text-gray-400 hover:text-blue-400 transition"
          >
            Resume
          </a>
        </article>
      </div>

      <div className="border-t border-gray-600 w-3/4 mx-auto" />

      <div className="text-gray-500 text-center py-4 text-[10px] tracking-wide">
        2025 • Built by Franco Cherubini
      </div>
    </footer>
  );
}
