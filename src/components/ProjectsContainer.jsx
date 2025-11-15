export default function ProjectsContainer({ children }) {
  return (
      <section className="flex flex-col w-full py-6 max-w-[1400px] mx-auto pb-10 gap-8 text-white">
        <h1 className="mx-auto text-3xl pb-4 poppins font-semibold">More Projects</h1>
        {children}
      </section>
  );
}
