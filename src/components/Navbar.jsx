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
    name: "About",
    link: "#about",
  },
];
import { logoIcon } from "../files/icons";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-[1400px] fixed backdrop-blur-sm inset-x-0 top-4 z-50 flex w-11/12 flex flex-row justify-between text-white items-center text-sm md:flex-nowrap md:justify-start px-4 py-3 rounded-lg border border-white">
      <a href="/" className="inline-flex items-center hover:text-mainacc text-base">
        {logoIcon} Cheru
      </a>
      <div>
        {links.map((el, index) => (
          <a href={el.link} key={index + el.name} className="group p-4">
            <span className="poppins-thin hover:text-white">{index + 1}. </span>
            <span className="group-hover:text-mainacc poppins-regular text-alwhite tracking-[1px]">{el.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

// Add burger functionality
