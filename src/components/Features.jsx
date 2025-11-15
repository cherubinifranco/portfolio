import { doublesquareIcon } from "../files/icons";
import RevealOnScroll from "./RevealOnScroll";

export default function Features({ features = ["First Feature", "Second Feature", "Third Feature"], img = "./assets/test-1.png" }) {
  return (
    <RevealOnScroll>
      <section id="features" className="flex flex-col w-full mt-16 px-6 md:px-12 max-w-[1400px] mx-auto pb-10">
        <h1 className="mx-auto text-4xl pb-10 pt-28">Features</h1>

        <div className="flex flex-col justify-center items-center lg:flex-row gap-10">
          <img className="w-full lg:w-1/2 object-contain" src={img} alt="Feature image" />

          <div className="lg:w-1/2">
            {features.map((feature, idx) => (
              <article key={idx} className="py-5 flex gap-4 text-blue-400">
                {doublesquareIcon}
                <span className="text-white">{feature}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
