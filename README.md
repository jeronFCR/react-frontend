# ROOMZ Frontend Test React

This project was bootstrapped with [Vite](https://vite.dev/guide/) and runs on [node v22](https://nodejs.org/en/download).

## Getting started

To install dependencies, run:

```sh
pnpm i
```

To start the project in development mode:

```sh
pnpm start
```

Create a `.env.local` file in the root directory with the following content:

```sh
VITE_API_URL=${SERVER URL}
VITE_API_REFETCH=${REFETCH TIME}
```

## Testing

Run unit tests with Vitest:

```sh
pnpm test
```

Run end-to-end tests with Playwright:

```sh
pnpm test:e2e
```

## Important Dependencies

- `react`: Core library for building user interfaces.
- `react-router-dom`: Declarative routing for React applications.
- `vite`: A build tool that provides a fast development experience for modern web projects.
- `vitest`: A fast unit testing framework for modern JavaScript and TypeScript projects.
- `@tanstack/react-query`: Manages server-state and caching in React applications.
- `i18next`: Internationalization framework for handling multiple languages.
- `msw`: Mock Service Worker for API mocking and testing.

### UI Dependencies

- `tailwindcss`: A utility-first CSS framework for styling applications.
- `daisyui`: A plugin for Tailwind CSS that provides pre-styled UI components.
- `lucide-react`: A collection of customizable SVG icons for React.
- `framer-motion`: Library for creating animations in React applications.
- `sonner`: A lightweight and customizable toast notification library.

## Best Practices
For best practices, refer to the [BEST_PRACTICES.md](./docs/BEST_PRACTICES.md) file.

## Future Steps
For planned future improvements, check the [FUTURE_STEPS.md](./docs/FUTURE_STEPS.md) file.
