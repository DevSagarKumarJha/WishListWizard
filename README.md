# WishlistWizard

WishlistWizard is a modern React app for managing your personal wishlist. Add, categorize, filter, and remove items, with all data saved in your browser's localStorage.

## Features

- Add items to your wishlist with a name and category
- Filter wishlist items by category
- Remove items from your wishlist
- Persistent storage using localStorage
- Responsive UI styled with Tailwind CSS

## Project Structure

```
WishlistWizard/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── Filter.jsx
│       ├── index.jsx
│       ├── WishlistForm.jsx
│       └── WishlistItem.jsx
├── index.html
├── package.json
├── vite.config.js
└── ...
```

## Getting Started

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Run the development server**

   ```sh
   npm run dev
   ```

3. **Open in your browser**
   Visit [https://wish-list-wizard.vercel.app/](https://wish-list-wizard.vercel.app/) (or the port shown in your terminal).

## Usage

- Use the form to add new wishlist items.
- Filter items by category using the filter buttons.
- Remove items by clicking the remove (X) icon.
- All changes are saved automatically in your browser.

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/icons/)

## License

This project is for educational purposes.
