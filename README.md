# 🍳 Recipe Finder

A modern recipe search application built with React and Tailwind CSS. Search for recipes by name or browse by category using TheMealDB API.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)

## ✨ Features

- 🔍 **Search Recipes** - Search for recipes by name
- 📂 **Category Filter** - Browse recipes by food categories
- 📖 **Recipe Details** - View full recipe with ingredients and instructions
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19.2.0 | Frontend UI library |
| [Vite](https://vitejs.dev/) | 7.2.4 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.17 | Utility-first CSS framework |
| [TheMealDB API](https://www.themealdb.com/api.php) | - | Recipe data API |

## 📁 Project Structure

```
recipe-finder/
├── public/
├── src/
│   ├── components/
│   │   ├── CategoryFilter.jsx    # Category dropdown filter
│   │   ├── LoadingSpinner.jsx    # Loading animation
│   │   ├── RecipeList.jsx        # Grid of recipe cards
│   │   ├── RecipeModal.jsx       # Recipe details popup
│   │   ├── receipeCard.jsx       # Individual recipe card
│   │   └── searchBar.jsx         # Search input component
│   ├── service/
│   │   └── api.js                # API functions
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipe-finder.git
   cd recipe-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔗 API Reference

This app uses [TheMealDB API](https://www.themealdb.com/api.php) - a free recipe API.

### Endpoints Used

| Endpoint | Description |
|----------|-------------|
| `/search.php?s={query}` | Search recipes by name |
| `/lookup.php?i={id}` | Get recipe details by ID |
| `/filter.php?c={category}` | Filter recipes by category |
| `/categories.php` | Get all categories |

## 🎯 How It Works

1. **Search**: Enter a recipe name in the search bar and click "Search"
2. **Filter**: Select a category from the dropdown to browse recipes
3. **View Details**: Click on any recipe card to see full details with ingredients and instructions

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for the free recipe API
- [React](https://react.dev/) for the amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

⭐ If you found this project helpful, please give it a star!
