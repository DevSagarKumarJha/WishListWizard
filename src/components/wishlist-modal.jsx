import { useState } from "react";
import { createItem } from "../utils/wishlist";

function WishlistModal({ open, onClose, onAdd, categories }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [addingCategory, setAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  if (!open) return null;

  const submit = () => {
    if (!name || !category) return;
    onAdd(createItem(name, category));
    setName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-lg w-96 space-y-4">
        <h2 className="text-xl font-bold">Add Wishlist Item</h2>

        <input
          className="w-full p-2 bg-gray-800 rounded"
          placeholder="Item name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <div className="flex gap-2">
          <select
            className="flex-1 p-2 bg-gray-800 rounded"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <button
            onClick={() => setAddingCategory(true)}
            className="px-3 bg-blue-600 rounded"
          >
            +
          </button>
        </div>

        {addingCategory && (
          <input
            className="w-full p-2 bg-gray-800 rounded"
            placeholder="New category"
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
            onBlur={() => {
              if (newCategory) setCategory(newCategory);
              setAddingCategory(false);
            }}
          />
        )}

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button onClick={submit} className="bg-green-600 px-4 py-1 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistModal;
