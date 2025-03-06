import React, { ReactNode } from 'react';

interface DataDisplayProps {
  label: string;
  children: ReactNode;
  className?: string;
  dataTestId?: string;
}

export const DataDisplay: React.FC<DataDisplayProps> = ({ label, children, className, dataTestId }) => (
  <p className={`text-gray-500 ${className}`} data-testid={dataTestId}>
    <strong>{label}:</strong> {children}
  </p>
);
