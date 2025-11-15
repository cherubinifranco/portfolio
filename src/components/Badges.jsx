export default function Badges({badges = ["This", "Are", "Badges"]}){
    return (
        <section className="flex flex-wrap">
          {badges.map((item) => (
            <span
              className="border rounded-lg border-gray-400 text-gray-400 text-xs py-2 px-4 mr-4 mb-4 hover:border-blue-200 hover:text-blue-200"
              key={item + "stack"}
            >
              {item}
            </span>
          ))}
        </section>
    )
}