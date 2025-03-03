import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import { ThemeProvider } from "@contexts/ThemeContext.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";
import "./styles/index.css";
import "./i18n";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppRoutes />
        <Toaster richColors position="top-right" />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
