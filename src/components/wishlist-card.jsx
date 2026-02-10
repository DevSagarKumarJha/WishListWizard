import { Check, Pencil, Trash2 } from "lucide-react";

function WishlistCard({ item, onToggle, onEdit, onDelete }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg flex flex-col justify-between">
      <div className="flex justify-between items-center text-lg sm:text-xl">
        <h3
          className={
            item.completed ? "line-through text-zinc-200" : "font-bold"
          }
        >
          {item.name}
        </h3>
        <div className="flex  justify-end gap-3">
          <button onClick={onToggle}>
            <Check className="text-green-800"/>
          </button>
          <button onClick={onEdit}>
            <Pencil size={20} />
          </button>
          <button onClick={onDelete} className="text-red-500">
            <Trash2 size={20}/>
          </button>
        </div>
      </div>
      <p className="text-sm mt-2 text-zinc-400">{item.description}</p>
      <span className="text-xs bg-gray-950 px-2 py-1 rounded mt-2 w-fit">
        {item.category}
      </span>
    </div>
  );
}

export default WishlistCard;
