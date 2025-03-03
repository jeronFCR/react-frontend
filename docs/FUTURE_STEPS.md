# Future Steps

This document outlines the upcoming steps and improvements planned for the project. These tasks include both technical enhancements and potential architectural decisions that will help us improve scalability, maintainability, and functionality.

## 1. Storybook + Visual Testing with Loki

### Storybook Integration:

We plan to integrate [Storybook](https://storybook.js.org/) into the project to build and display UI components in isolation. This will provide a comprehensive tool for design systems and facilitate better collaboration between developers and designers.

### Visual Testing with Loki:

Once Storybook is integrated, we'll add [Loki](https://github.com/oblador/loki), a visual regression testing tool, to ensure that UI changes do not inadvertently affect the look and feel of components. Loki will capture screenshots and compare them with the baseline to detect any unintended visual differences.

## 2. Husky Dependency to Ensure Code Quality

We plan to add [Husky](https://typicode.github.io/husky/) as a Git hook manager to enforce code quality. Husky will prevent developers from pushing code that decreases test coverage by running checks before commits or pushes. This step will help maintain a high-quality codebase by avoiding errors from being introduced.

## 3. Prettier Dependency to Maintain Code Formatting

To ensure consistent code formatting throughout the project, we will integrate [Prettier](https://prettier.io/) into the build process. Prettier will automatically format code when committing changes, improving readability and reducing the chance of formatting issues during collaboration.

## 4. Dockerization

We plan to create a [Docker](https://www.docker.com/) configuration for the project to simplify the development, testing, and deployment processes. Docker will allow us to containerize the application, ensuring consistency across different environments and making it easier to scale in production.

## 5. Language Configuration and Additional Translations

We are currently implementing [i18next](https://www.i18next.com/) for internationalization (i18n), which will allow the project to support multiple languages. The next step is to create a component that enables users to switch languages easily. We’ll also expand the translations to include more languages and manage them efficiently, ensuring that the application can easily scale to different regions and languages.

## 6. Custom Toast Notification System

We are planning to replace the current reliance on the `sonner` library with a custom-built toast notification system. By doing so, we will have better control over the toast notifications, customizing them according to our needs and ensuring they integrate seamlessly with the overall application. This new system will allow for more flexibility and consistency in handling notifications across the app.

## 7. E2E Github Workflow

We are planning to improve E2E tests and create a new workflow using the schedule option to run automated tests at specific intervals.

---

## Technical Discussions

These are some technical considerations and potential changes we are evaluating for the future:

### 1. UI Component Reusability Across Apps

We are considering the idea of building a component library for this project that could be reused across different applications. By creating a shared UI components library, we can standardize the look and feel across multiple projects, reducing development time and ensuring consistency.

### 2. Usage in Other Devices and Potential PWA

We are exploring the possibility of using this application on various devices and whether it should be turned into a [Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps). A PWA could provide an app-like experience across mobile and desktop platforms, with offline capabilities and push notifications.

### 3. Icon Layering for Future Flexibility

We are thinking about implementing a layer for icons to make them easier to replace or customize in the future. This would involve centralizing the icon management, allowing us to easily swap icons when needed without affecting other parts of the application.

### 4. Zustand for State Management?

We are considering the potential benefits of using [Zustand](https://github.com/pmndrs/zustand) for state management in the application. Zustand is a minimalistic state management library for React, and we’re evaluating whether it could replace or complement the current state management solution to improve performance or simplicity.

### 5. gRPC for Backend Communication

We’re exploring the possibility of using [gRPC](https://grpc.io/) for communication between the frontend and backend. By leveraging gRPC, we could define API contracts using Protocol Buffers, allowing us to generate strongly-typed models for the client and server. This would improve the consistency and reliability of communication, especially in larger systems.
