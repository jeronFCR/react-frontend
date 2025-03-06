import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  changeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, changeFn, dataTestId }) => {
  return (
    <label className="fieldset-label">
      <input type="checkbox" className="checkbox checkbox-primary" data-testid={dataTestId} checked={checked} onChange={changeFn} />
      {label}
    </label>
  );
};
