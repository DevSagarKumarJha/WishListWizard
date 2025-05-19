import { HeartPlus } from "lucide-react";
import { Filter, WishlistForm, WishlistItem } from "./components";
import { useEffect, useState } from "react";

function App() {
  const array = [];
  const [items, setItems] = useState(array);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => setItems([...items, item]);

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.category === filter);

  const uniqueCategories = ["All", ...new Set(items.map((i) => i.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 p-6">
      <h1 className="text-3xl font-bold flex justify-center items-center mb-6 gap-2.5">
        <HeartPlus size={50} className="bg-red-600 p-2 rounded-full" /> Wishlist
        Wizard
      </h1>

      <WishlistForm onAddItem={addItem} />
      <div className="px-10">
        <Filter
          categories={uniqueCategories}
          selected={filter}
          onSelect={setFilter}
        />

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
