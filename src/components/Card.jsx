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
      className="min-w-80 bg-secondbg max-w-80 rounded-lg flex flex-col items-center gap-6 py-4 pb-8 border border-gray-700 transition duration-300 hover:-translate-y-10 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
    >
      <div className="h-40 w-40 text-blue-100">{cardDetail.icon}</div>
      <h1 className="text-3xl text-blue-500 w-full text-center border-t border-gray-700 pt-6">
        {cardDetail.title}
      </h1>
      <p className="px-6 text-gray-200">{cardDetail.description}</p>
    </a>
  );
}
