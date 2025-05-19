import { FilterIcon } from "lucide-react";

function Filter({ categories, selected, onSelect }) {
  return (
    <div className="mt-6 flex justify-start items-center gap-3 flex-wrap">
      <FilterIcon/>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-3 py-1 rounded border ${
            selected === cat
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 hover:bg-blue-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;
