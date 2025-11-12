import { WORKLINKS, MEDIALINKS, SOCIALLINKS, MUSICLINKS } from "../data";

export default function Footer() {
  return (
    <section
      id="#footer"
      className="flex flex-col items-center gap-8 sm:gap-10 sm:flex-row sm:justify-center p-10 font-semibold bg-secondbg w-full text-alwhite text-sm"
    >
      <img src="" alt="" className="w-40 h-40 mx-10" />

      <div className="flex flex-col font-thin gap-3 w-40">
        <h1 className="font-semibold pb-2">Links Utiles</h1>
        <a href="" className="hover:text-blue-400">Proyectos?</a>
        <a href="" className="hover:text-blue-400">Link 2</a>
        <a href="" className="hover:text-blue-400">Link 3</a>
      </div>

      <div className="flex flex-col font-thin gap-3 w-40">
        <h1 className="font-semibold pb-2">Redes</h1>
        <a href="" className="hover:text-blue-400">
          LinkedIn
        </a>
        <a href="" className="hover:text-blue-400">Github</a>
        <a href="" className="hover:text-blue-400">Email</a>
      </div>
    </section>
  );
}
