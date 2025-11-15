import { cardIcons, externalLink } from "../files/icons";
export default function Card({
  cardDetail = {
    icon: cardIcons.code,
    url: "www.github.com/cherubinifranco",
    title: "Card Title",
    description: "Simple Card Description",
    button: "external",
    buttonText: "Button Text",
  },
}) {
  return (
    <a
  href={"https://" + cardDetail.url}
  target="_blank"
  className="
    min-w-80 max-w-80 
    bg-secondbg/70 backdrop-blur-md
    rounded-2xl 
    flex flex-col items-center 
    gap-6 
    py-8 
    border border-gray-700/50 
    transition-all duration-300 
    hover:-translate-y-2 
    hover:border-blue-600/50 
    hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]
  "
>
  <div className="h-28 w-28 text-blue-100 flex items-center justify-center">
    {cardDetail.icon}
  </div>

  <h1 className="text-2xl font-semibold text-blue-400 pt-4">
    {cardDetail.title}
  </h1>

  <p className="px-6 text-gray-300 text-sm leading-relaxed text-center">
    {cardDetail.description}
  </p>
</a>

  );
}
