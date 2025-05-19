import { useState } from "react";

function WishlistForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category) return;
    onAddItem({ name, category });
    setName("");
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <input
        type="text"
        placeholder="Item name (e.g., MacBook)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded border w-full sm:w-1/3"
      />
      <input
        type="text"
        placeholder="Category (e.g., Gadget)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded border w-full sm:w-1/3"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default WishlistForm;
