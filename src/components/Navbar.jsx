import { useEffect, useState } from "react";
import { logoIcon } from "../files/icons";

export default function Navbar({links = [
  { name: "Home", link: "#banner" },
  { name: "Work", link: "#timeline" },
  { name: "Projects", link: "#projects" },
]}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <button
        className="md:hidden fixed text-white text-4xl left-6 top-6 h-11 w-11 flex items-center justify-center bg-secondbg z-50 p-2 border border-white/20 rounded-lg shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        =
      </button>

      <nav
        className="
          hidden md:flex
          fixed inset-x-0 top-4 
          mx-auto w-11/12 max-w-[1400px]
          backdrop-blur-md bg-secondbg/70
          border border-white/10 
          rounded-xl 
          shadow-[0_8px_25px_rgba(0,0,0,0.25)]
          items-center justify-between px-8 py-4
          z-50
        "
      >
        <a href="/" className="inline-flex items-center gap-1  text-white text-xl hover:text-mainacc transition">
          {logoIcon}
          heru
        </a>

        <div className="flex gap-2">
          {links.map((el, index) => (
            <a href={el.link} key={index + el.name} className="relative px-5 py-2 group">
              <span className="poppins-thin text-white">{"I".repeat(index + 1)}.</span>
              <span className="ml-1 poppins-regular text-white group-hover:text-mainacc transition">{el.name}</span>

              <span
                className="
                  absolute bottom-1 left-1/2 
                  w-0 h-[2px] bg-mainacc 
                  transition-all duration-300 
                  group-hover:w-3/4 group-hover:left-[12.5%]
                "
              ></span>
            </a>
          ))}
        </div>
      </nav>

      <nav
        className={`
          fixed inset-0 
          bg-secondbg 
          z-50 flex flex-col 
          items-center justify-center gap-12
          px-6
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-10 left-10 text-4xl text-white hover:text-red-400 transition">
          ✕
        </button>

        <a
          href="/"
          className="inline-flex items-center gap-2 text-white text-3xl hover:text-mainacc transition"
          onClick={() => setIsOpen(false)}
        >
          {logoIcon}
          Cheru
        </a>

        <div className="flex flex-col gap-10 text-center">
          {links.map((el, index) => (
            <a href={el.link} key={index + el.name} className="text-3xl group p-4" onClick={() => setIsOpen(false)}>
              <span className="poppins-thin text-white">{"I".repeat(index + 1)}.</span>
              <span className="ml-2 poppins-regular text-white group-hover:text-mainacc transition">{el.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
