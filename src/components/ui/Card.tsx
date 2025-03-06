import React, { ReactNode, useId } from 'react';

import { motion } from 'framer-motion';

import { Button } from './Button';

interface CardAction {
  text: string;
  onClick: () => void;
}

interface CardProps {
  title?: string;
  children: ReactNode;
  actions?: CardAction[];
  className?: string;
  dataTestId?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, actions = [], className, dataTestId }) => {
  const id = useId();

  return (
    <div className={`card w-96 bg-base-100 shadow-xl rounded-2xl ${className}`} data-testid={dataTestId}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
        <div className="card-actions justify-end">
          {actions.map((action, index) => (
            <Button key={`${id}-${index}`} onClick={action.onClick}>
              {action.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AnimatedCard = motion.create(Card);
