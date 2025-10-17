# 💰 FinTrack - Personal Finance Tracker

A modern React-based personal finance tracking application with dark/light theme support and responsive design.

## ✨ Features

- 📊 **Financial Overview**: Track income and expenses with detailed reports
- 🌓 **Dark/Light Theme**: Toggle between themes with preference persistence
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- ⚡ **Modern UI**: Clean, professional interface with smooth animations
- 💾 **Local Storage**: Theme preferences saved automatically
- 🎨 **Modern Styling**: CSS Grid, Flexbox, and CSS custom properties

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18.2.0](https://reactjs.org/)
- **Build Tool**: [Vite 7.1.5](https://vitejs.dev/) - Fast development and optimized builds
- **Routing**: [React Router DOM 6.14.2](https://reactrouter.com/)
- **HTTP Client**: [Axios 1.12.1](https://axios-http.com/)
- **Type Checking**: [PropTypes 15.8.1](https://www.npmjs.com/package/prop-types)
- **Development**:
  - `@types/react` and `@types/react-dom` for TypeScript definitions
  - `@vitejs/plugin-react` for React integration with Vite
- **Utilities**: [UUID 9.0.1](https://www.npmjs.com/package/uuid) for unique identifiers

## 🚀 Installation

### Prerequisites

- Node.js 16.0 or higher
- npm or pnpm package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fintrack.git
   cd fintrack
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 📱 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── FormComponents.jsx   # Transaction form
│   ├── Transaction.jsx      # Transaction list
│   ├── ReportComponent.jsx  # Financial reports
│   ├── ThemeToggle.jsx      # Theme switcher
│   └── ...                  # Component-specific CSS files
├── contexts/            # React contexts
│   └── ThemeContext.jsx     # Theme management
├── Data/               # Data management
│   └── DataContext.jsx      # App-wide data context
├── styles/             # Global styles
│   └── ThemeToggle.css     # Theme-specific styles
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
├── App.css             # Application styles
└── index.css           # Global styles
```

## 🎨 Features in Detail

### Financial Tracking
- Add income and expense transactions
- Real-time calculation of totals
- Visual reports and summaries
- Transaction history

### Theme System
- Dark and light theme support
- System preference detection
- LocalStorage persistence
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Grid-based layouts
- Adaptive navigation
- Touch-friendly interactions

## 🔧 Development

### Environment Variables
This project doesn't require environment variables for basic functionality. Create a `.env` file in the root if you need to add API endpoints or configuration:

```env
VITE_API_URL=your_api_url_here
```

### Building for Production
```bash
npm run build
```
The built files will be in the `dist/` directory.

### Code Style
- React best practices with hooks
- Modern ES6+ JavaScript
- CSS custom properties for theming
- Responsive design principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for learning purposes. Feel free to use it as a reference for your own projects.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with modern CSS
- Powered by [Vite](https://vitejs.dev/)
- Icons from [Heroicons](https://heroicons.com/)

---

**Happy tracking!** 🎉
