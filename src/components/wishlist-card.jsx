import { Check, Pencil, Trash2 } from "lucide-react";

function WishlistCard({ item, onToggle, onEdit, onDelete }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg flex flex-col justify-between">
      <div>
        <h3 className={item.completed ? "line-through text-gray-400" : "font-bold"}>
          {item.name}
        </h3>
        <p className="text-sm text-gray-400">{item.description}</p>
        <span className="text-xs bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
          {item.category}
        </span>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button onClick={onToggle}><Check /></button>
        <button onClick={onEdit}><Pencil /></button>
        <button onClick={onDelete} className="text-red-500"><Trash2 /></button>
      </div>
    </div>
  );
}

export default WishlistCard;
