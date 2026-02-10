import { format } from "./category";

export function createItem({ name, description, category }) {
  return {
    id: crypto.randomUUID(),
    name: name.trim(),
    description: description.trim(),
    category: format(category),
    completed: false,
    createdAt: Date.now()
  };
}

export const toggleComplete = item => ({
  ...item,
  completed: !item.completed
});
