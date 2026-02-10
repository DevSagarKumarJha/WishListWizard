import { HeartPlus } from "lucide-react";
import { Filter, WishlistForm, WishlistItem } from "./components";
import { useEffect, useState } from "react";

function App() {
  const fetchItems = () => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  };

  const [items, setItems] = useState(fetchItems);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  }, [items]);

  function capitalize(value) {
    if (typeof value !== "string") return "";
    const str = value.trim();
    return str ? str[0].toUpperCase() + str.slice(1) : "";
  }

  const addItem = (item) => setItems([...items, item]);

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const filteredItems =
    filter === "All"
      ? items
      : items.filter((item) => capitalize(item.category) === filter);

  const uniqueCategories = ["All", ...new Set(items.map((i) => capitalize(i.category)))];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 to-gray-100 p-6">
      <h1 className="text-3xl font-bold flex justify-center items-center mb-6 gap-2.5">
        <HeartPlus size={50} className="bg-red-600 p-2 rounded-full" /> Wishlist
        Wizard
      </h1>

      <WishlistForm onAddItem={addItem} />
      <div className="px-10">
        {items.length > 0 ? (
          <Filter
            categories={uniqueCategories}
            selected={filter}
            onSelect={setFilter}
          />
        ) : (
          <div />
        )}

        <ul className="mt-6 grid gap-4">
          {filteredItems.map((item, index) => (
            <WishlistItem
              key={index}
              item={item}
              onRemove={() => removeItem(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
