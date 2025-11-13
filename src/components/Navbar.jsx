/** @format */

const links = [
  {
    name: "Home",
    link: "#banner",
  },
  {
    name: "Work",
    link: "#timeline",
  },
  {
    name: "Projects",
    link: "#projects",
  },
];
import { useEffect, useState } from "react";
import { logoIcon } from "../files/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto"); // cleanup on unmount
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
        className="md:hidden fixed text-white text-4xl left-6 top-6 h-10 w-10 flex items-center justify-center bg-secondbg z-50 p-2 border rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        =
      </button>
      <nav className="hidden mx-auto max-w-[1400px] fixed backdrop-blur-sm inset-x-0 top-4 z-50 w-11/12 md:flex justify-between text-sm px-4 rounded-lg border border-white">
        <a href="/" className="inline-flex items-center hover:text-mainacc text-white text-xl">
          {logoIcon} Cheru
        </a>
        <div className="p-4">
          {links.map((el, index) => (
            <a href={el.link} key={index + el.name} className="group p-4 mr-3">
              <span className="poppins-thin text-white">{"I".repeat(index + 1)}. </span>
              <span className="group-hover:text-mainacc poppins-regular text-alwhite tracking-[1px]">{el.name}</span>
            </a>
          ))}
        </div>
      </nav>

      <nav
        className={`mx-auto max-w-[1400px] bg-secondbg fixed z-50 w-full h-full flex flex-col items-center justify-center gap-10 transition duration-300  ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={(prev) => setIsOpen(!prev)} className="absolute top-10 left-10 text-2xl text-white hover:text-red-400">
          X
        </button>
        <a href="/" className="inline-flex items-center hover:text-mainacc text-white text-3xl">
          {logoIcon} Cheru
        </a>
        <div className="flex flex-col md:flex-row gap-10">
          {links.map((el, index) => (
            <a href={el.link} key={index + el.name} className="group p-4" onClick={() => setIsOpen(false)}>
              <span className="poppins-thin text-white">{"I".repeat(index + 1)}. </span>
              <span className="group-hover:text-mainacc poppins-regular text-alwhite tracking-[1px]">{el.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

// Add burger functionality
