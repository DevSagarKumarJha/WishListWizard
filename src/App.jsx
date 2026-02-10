import { useEffect, useState } from "react";
import WishlistModal from "./components/wishlist-modal";
import WishlistItem from "./components/wishlist-item";
import { getAllItems, saveItem, deleteItem } from "./utils/db";
import { extractCategories } from "./utils/category";
import { toggleComplete } from "./utils/wishlist";

function App() {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getAllItems().then(setItems);
  }, []);

  const addItem = async (item) => {
    await saveItem(item);
    setItems([...items, item]);
  };

  const toggleItem = async (item) => {
    const updated = toggleComplete(item);
    await saveItem(updated);
    setItems(items.map((i) => (i.id === item.id ? updated : i)));
  };

  const removeItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-600 px-4 py-2 rounded"
      >
        Add Item
      </button>

      <ul className="mt-6 grid gap-4">
        {items.map((item) => (
          <WishlistItem
            key={item.id}
            item={item}
            onToggle={() => toggleItem(item)}
            onDelete={() => removeItem(item.id)}
          />
        ))}
      </ul>

      <WishlistModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={addItem}
        categories={extractCategories(items)}
      />
    </div>
  );
}

export default App;
