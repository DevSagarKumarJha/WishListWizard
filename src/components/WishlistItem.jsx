import { XIcon } from "lucide-react";
import React from "react";

function WishlistItem({ item, onRemove }) {
  return (
    <li className="flex justify-between items-center bg-white shadow p-4 rounded">
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-gray-500">{item.category}</p>
      </div>
      <button
        onClick={onRemove}
        className="text-red-500 hover:text-red-700 cursor-pointer font-bold"
      >
        <XIcon size={30}/>
      </button>
    </li>
  );
}

export default WishlistItem;
