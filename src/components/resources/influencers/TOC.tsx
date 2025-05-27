export function TOC({ items, activeId, onItemClick }) {
    return (
      <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4 sticky top-24">
        <h2 className="text-2xl font-medium">Table of Contents</h2>
        <div className="h-0.5 bg-white w-full my-2"></div>
        <ul className="list-disc space-y-2 text-white/90 pl-4">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onItemClick(item.id)}
                className={`block text-left w-full hover:underline ${
                  activeId === item.id
                    ? "text-beast-purple-light font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }