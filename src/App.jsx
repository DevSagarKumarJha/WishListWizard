import { HeartPlus } from "lucide-react";
import { WishlistForm, WishlistItem } from "./components";
import { useState } from "react";

function App() {

  const array = [];
  const [items, setItems] = useState(array);

  const addItem = (item) => setItems([...items, item]);

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 p-6">
      <h1 className="text-3xl font-bold flex justify-center items-center mb-6 gap-2.5">
        <HeartPlus size={50} className="bg-red-600 p-2 rounded-full" /> Wishlist
        Wizard
      </h1>

      <WishlistForm onAddItem={addItem} />

      <ul className="mt-6 grid gap-4">
        {items.map((item, index) => (
          <WishlistItem
            key={index}
            item={item}
            onRemove={() => removeItem(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
