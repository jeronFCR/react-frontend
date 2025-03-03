import React from "react";

interface SingleInputProps {
  className?: string;
  placeholder?: string;
  value: string | number;
  changeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
}

export const SingleInput: React.FC<SingleInputProps> = ({
  value,
  placeholder,
  changeFn,
  className,
  dataTestId,
}) => {
  return (
    <input
      type="text"
      className={`input input-primary ${className}`}
      placeholder={placeholder}
      data-testid={dataTestId}
      value={value}
      onChange={changeFn}
    />
  );
};
