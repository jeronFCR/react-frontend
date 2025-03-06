import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type?: 'primary' | 'accent' | 'neutral' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  className?: string;
  disabled?: boolean;
  dataTestId?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'primary', className, disabled, dataTestId }) => (
  <button className={`btn btn-${type} opacity-(--custom-opacity) ${className}`} onClick={onClick} disabled={!!disabled} data-testid={dataTestId}>
    {children}
  </button>
);
