# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
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
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
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
## How to Run the Project

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open your browser to `http://localhost:5173` to view the Practice Summary Cards.

## Practice Summary Card Implementation

### Component & Styling Decisions
- **Component Structure**: I created a single main `PracticeSummaryCard` component with a subcomponent-like structure for the trend chart (implemented inline for simplicity). The component is self-contained, receiving props for the practice data. This keeps it reusable and easy to maintain.
- **Styling Approach**: I used Tailwind CSS v4 for utility-first styling, which provides rapid development and consistency. Classes are applied directly in the JSX for responsive design and hover effects.
- **Visual Consistency and Responsiveness**: Consistent spacing (using rem/em), typography hierarchy (headings for sections), and color scheme (neutral with accent colors for status). Responsiveness is achieved with flexbox for layout and grid for metrics, stacking on mobile.

### Scaling & Real-World Use
- **Integration into Dashboard**: Reuse the component by passing data from API calls. Use CSS variables for theming to match the dashboard's design system. Place in a grid layout with pagination for multiple cards.
- **Extra Day Improvements**: Add accessibility (ARIA labels, keyboard navigation), animations (fade-in on load), unit tests with Jest/React Testing Library, theming support via CSS variables, and internationalization for text.

### Time Management
- Setup: 10 minutes (reviewing project structure)
- Layout & Structure: 30 minutes (creating component and types)
- Styling & Polish: 40 minutes (CSS, responsiveness, hover effects)
- README/Explanation: 20 minutes
```
