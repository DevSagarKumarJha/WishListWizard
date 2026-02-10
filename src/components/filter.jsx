function Filter({ categories, selected, onSelect }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {["All", ...categories].map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-3 py-1 rounded ${
            selected === cat ? "bg-blue-600" : "bg-gray-800"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;
