import { homeIcon } from "../files/icons";
export default function BreadCrumbs({ links = [{ name: "Home", url: "/" }] }) {
  return (
    <div className="flex flex-row items-center p-1 gap-3 text-gray-300">
      <a href="/" className="hover:text-blue-500 p-2">{homeIcon}</a>
      {links.map((link) => (
        <>
          <span className="text-xs">{">"}</span>
          <a href={link.url} className="hover:text-blue-400 p-2">{link.name}</a>
        </>
      ))}
    </div>
  );
}
