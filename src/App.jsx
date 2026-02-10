import { useEffect, useState } from "react";
import WishlistModal from "./components/wishlist-modal";
import WishlistCard from "./components/wishlist-card";
import Filter from "./components/filter";
import { getAllItems, saveItem, deleteItem } from "./utils/db";
import { extractCategories, normalize } from "./utils/category";
import { toggleComplete } from "./utils/wishlist";

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    getAllItems().then(setItems);
  }, []);

  const save = async (item) => {
    await saveItem(item);
    setItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.map((i) => (i.id === item.id ? item : i))
        : [...prev, item],
    );
  };

  const visible =
    filter === "All"
      ? items
      : items.filter((i) => i.category === normalize(filter));

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl sm:text-4xl font-bold">WishList Wizard</h1>
      <hr className="my-4"/>
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <Filter
            categories={extractCategories(items)}
            selected={filter}
            onSelect={setFilter}
          />

          <button
            onClick={() => {
              setEditingItem(null); // 🔥 REQUIRED
              setModalOpen(true);
            }}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            Add Item
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item) => (
            <WishlistCard
              key={item.id}
              item={item}
              onToggle={() => save(toggleComplete(item))}
              onEdit={() => {
                setEditingItem(item);
                setModalOpen(true);
              }}
              onDelete={async () => {
                await deleteItem(item.id);
                setItems(items.filter((i) => i.id !== item.id));
              }}
            />
          ))}
        </div>

        <WishlistModal
          open={modalOpen}
          mode={editingItem ? "edit" : "add"}
          editingItem={editingItem}
          categories={extractCategories(items)}
          onClose={() => {
            setModalOpen(false);
            setEditingItem(null); // 🔥 REQUIRED
          }}
          onSave={save}
        />
      </div>
    </main>
  );
}

export default App;
