import React, { ReactNode } from "react";

interface FieldSetProps {
  children: ReactNode;
  title: string;
}

export const FieldSet: React.FC<FieldSetProps> = ({ children, title }) => {
  return (
    <fieldset>
      <legend className="mb-2 font-semibold text-xs">{title}</legend>

      <div className="flex justify-content items-center gap-4">{children}</div>
    </fieldset>
  );
};
