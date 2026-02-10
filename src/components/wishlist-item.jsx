import { Check, Trash2 } from "lucide-react";

function WishlistItem({ item, onToggle, onDelete }) {
  return (
    <li className="bg-gray-900 p-4 rounded flex justify-between items-center">
      <div className={item.completed ? "line-through text-gray-400" : ""}>
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm">{item.category}</p>
      </div>

      <div className="flex gap-3">
        <button onClick={onToggle}>
          <Check />
        </button>
        <button onClick={onDelete} className="text-red-500">
          <Trash2 />
        </button>
      </div>
    </li>
  );
}

export default WishlistItem;
