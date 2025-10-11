# Puzzle Diplomats Website

A modern, responsive digital marketing website built with React, TypeScript, and Material-UI.

## 🚀 Features

- Modern responsive design
- Material-UI components
- TypeScript for type safety
- Vite for fast development
- GitHub Pages deployment ready

## 🛠️ Technologies Used

- React 19
- TypeScript
- Material-UI (MUI)
- Vite
- Emotion (CSS-in-JS)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/clone2.git
cd clone2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured with GitHub Actions for automatic deployment:

1. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/clone2/"
   ```

2. **Update the base path** in `vite.config.ts` if your repository name is different:
   ```typescript
   base: '/your-repo-name/'
   ```

3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy when you push to main branch

### Manual Deployment

If you prefer manual deployment:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/         # React components
├── assets/            # Static assets
├── utils/             # Utility functions
├── theme.ts           # Material-UI theme
├── App.tsx            # Main App component
└── main.tsx           # Entry point
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `.github/workflows/deploy.yml` - GitHub Actions workflow

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🌐 Live Demo

Once deployed, your website will be available at:
`https://yourusername.github.io/clone2/`

## 📞 Contact

For any questions or support, please contact:
- Email: puzzle@diplomats.co.in
- Phone: +91 70948 58696

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
