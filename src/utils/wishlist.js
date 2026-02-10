import { normalize } from "./category";

export function createItem(name, category) {
  return {
    id: crypto.randomUUID(),
    name: name.trim(),
    category: normalize(category),
    completed: false,
    createdAt: Date.now()
  };
}

export function toggleComplete(item) {
  return { ...item, completed: !item.completed };
}
