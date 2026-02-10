# WishList Wizard

WishList Wizard is a small React + Vite app for tracking personal wishlist items. It supports quick add/edit flows, category filtering, and offline-friendly persistence using IndexedDB.

## Features

- Add, edit, and delete wishlist items
- Mark items as completed
- Filter by category (including an "All" view)
- Create new categories on the fly in the modal
- Persistent storage with IndexedDB
- Responsive grid layout with Tailwind CSS

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS v4 (via the Vite plugin)
- IndexedDB for local persistence
- Lucide React icons

## Project Structure

```
WishlistWizard/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── filter.jsx
│   │   ├── index.jsx
│   │   ├── wishlist-card.jsx
│   │   └── wishlist-modal.jsx
│   └── utils/
│       ├── category.js
│       ├── db.js
│       └── wishlist.js
├── index.html
├── package.json
├── vite.config.js
└── ...
```

## Getting Started

1. Install dependencies

```sh
npm install
```

2. Run the dev server

```sh
npm run dev
```

3. Build for production

```sh
npm run build
```

4. Preview the production build

```sh
npm run preview
```

## Usage Notes

- Items are stored in the browser using IndexedDB (database name: `wishlist-db`).
- Clearing site data in the browser will remove all stored items.
- Category labels are normalized with a leading capital letter.

## License

This project is for educational purposes.
