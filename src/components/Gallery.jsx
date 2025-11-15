export default function Gallery({
  gallery = [
    "../assets/test-1.png",
    "../assets/test-1.png",
    "../assets/test-1.png",
  ],
}) {
  return (
    <section className="flex flex-row justify-center flex-wrap gap-6 mx-auto px-6">
      {gallery.map((el, index) => (
        <img src={el} alt="Image" className="w-full md:w-1/3 lg:w-1/4" key={`gallery-${index}`} />
      ))}
    </section>
  );
}
