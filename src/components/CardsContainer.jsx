import Card from "./Card";
export default function CardsContainer({ cards }) {
  return (
    <section className="flex flex-row  flex-wrap gap-10 justify-center pt-10 pb-20">
      {cards.map((card) => (
        <Card cardDetail={card} />
      ))}
    </section>
  );
}
