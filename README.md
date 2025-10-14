# Akodefy Website

A modern, responsive digital marketing website built with React, TypeScript, and Material-UI.

## 🚀 Features

- Modern responsive design
- Material-UI components
- TypeScript for type safety
- GSAP animations
- Vite for fast development
- Vercel deployment ready

## 🛠️ Technologies Used

- React 19
- TypeScript
- Material-UI (MUI)
- GSAP (GreenSock Animation Platform)
- Vite
- Emotion (CSS-in-JS)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/akodefy.git
cd akodefy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment to Vercel

This project is optimized for Vercel deployment with the following configuration:

### Quick Deploy

1. **Connect your repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project

2. **Automatic deployment**:
   - Every push to the main branch will trigger a new deployment
   - Pull requests will create preview deployments

### Manual Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.ts` - Optimized for production builds

## 📁 Project Structure

```
src/
├── components/         # React components
├── assets/            # Static assets
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── theme.ts           # Material-UI theme
├── App.tsx            # Main App component
└── main.tsx           # Entry point
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration optimized for production
- `vercel.json` - Vercel deployment configuration
- `tsconfig.json` - TypeScript configuration

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Type check without emitting files

## 🌐 Live Demo

Once deployed on Vercel, your website will be available at your custom Vercel domain.

## 📞 Contact

For any questions or support, please contact:
- Email: akodefyinfotech@gmail.com
- Phone: +91 90804 45315

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
