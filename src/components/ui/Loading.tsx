import React from 'react';

interface LoadingProps {
  dataTestId?: string;
}

export const Loading: React.FC<LoadingProps> = ({ dataTestId }) => (
  <span data-testid={dataTestId} role="presentation" className="loading loading-bars loading-xl text-primary"></span>
);
