import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex items-center justify-center min-h-dvh p-4">
    {children}
  </div>
);
