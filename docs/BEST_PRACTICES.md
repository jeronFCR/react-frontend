# Best Practices for Project Structure

This document explains the project structure and best practices we follow to maintain a clean, scalable, and maintainable codebase. A well-structured project is crucial for collaboration, reducing complexity, and ensuring that as the project grows, it remains manageable.

---

## Project Structure

```plaintext
src/
  ├── assets/          # Static files like images, fonts, and icons
  ├── components/      # UI components, organized by functionality
  │   └── ui/          # Reusable UI elements like buttons, cards, modals
  ├── contexts/        # React Contexts to manage global state
  ├── helpers/         # Utility functions for reusable logic
  ├── hooks/           # Custom hooks for abstracted logic
  ├── interfaces/      # TypeScript interfaces and types
  ├── locales/         # Translation files for internationalization
  ├── pages/           # Main pages
  ├── reducers/        # Reducers or other state management logic
  ├── routes/          # Routing-related logic
  ├── services/        # API calls and business logic
  ├── styles/          # Global styles and theme definitions
  └── main.tsx         # Entry point of the application
```