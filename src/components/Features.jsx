import { doublesquareIcon } from "../files/icons";

export default function Features({
  features = ["First Feature", "Second Feature", "Third Feature"]
}) {
  return (
    <section className="flex flex-col w-full mt-32 px-12 max-w-[1400px] mx-auto pb-10">
      <h1 className="mx-auto text-4xl pb-10">Features</h1>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-10">
        <img className="w-full md:w-1/2 gap-6 aspect-video border object-fit"></img>
        <div className="">
          {features.map((feature) => (
            <article className="py-5 flex gap-4 text-blue-400">
              {doublesquareIcon}
              <span className="text-white">{feature}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
