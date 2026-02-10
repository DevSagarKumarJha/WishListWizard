import { useEffect, useState } from "react";
import { createItem } from "../utils/wishlist";

const EMPTY = { name: "", description: "", category: "General" };

function WishlistModal({
  open,
  mode,               // "add" | "edit"
  editingItem,
  categories,
  onClose,
  onSave
}) {
  const [form, setForm] = useState(EMPTY);
  const [addingCategory, setAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const reset = () => {
    setForm({ ...EMPTY, category: categories[0] || "General" });
    setAddingCategory(false);
    setNewCategory("");
  };

  useEffect(() => {
    if (mode === "edit" && editingItem) {
      setForm(editingItem);
    } else {
      reset();
    }
  }, [mode, editingItem, categories]);

  if (!open) return null;

  const submit = () => {
    if (!form.name.trim()) return;

    const payload =
      mode === "edit" ? form : createItem(form);

    onSave(payload);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-zinc-700/70 flex items-center justify-center">
      <div className="bg-zinc-950 p-6 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">
          {mode === "edit" ? "Edit Item" : "Add Item"}
        </h2>

        <input
          className="w-full p-2 bg-zinc-900 rounded"
          placeholder="Item name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <textarea
          className="w-full p-2 bg-zinc-900 rounded"
          placeholder="Description"
          rows={3}
          value={form.description}
          onChange={e =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <div className="flex gap-2">
          <select
            className="flex-1 p-2 bg-zinc-900 rounded"
            value={form.category}
            onChange={e =>
              setForm({ ...form, category: e.target.value })
            }
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
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
            className="w-full p-2 bg-zinc-900 rounded"
            placeholder="New category"
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
            onBlur={() => {
              if (newCategory) {
                setForm({ ...form, category: newCategory });
              }
              setAddingCategory(false);
              setNewCategory("");
            }}
          />
        )}

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={submit}
            className="bg-green-600 px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistModal;
