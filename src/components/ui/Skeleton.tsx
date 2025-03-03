import React from "react";

interface SkeletonProps {
  dataTestId?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ dataTestId }) => (
  <div
    data-testid={dataTestId}
    role="presentation"
    className="flex w-full flex-col gap-4"
  >
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
);

export const SkeletonSmall: React.FC<SkeletonProps> = ({ dataTestId }) => (
  <div
    data-testid={dataTestId}
    role="presentation"
    className="flex w-full flex-col gap-4"
  >
    <div className="skeleton h-12 w-full"></div>
  </div>
);

export const SkeletonList: React.FC<SkeletonProps> = ({ dataTestId }) => (
  <div data-testid={dataTestId} role="presentation">
    <div className="skeleton h-15 w-full"></div>
    <div className="skeleton h-15 w-full my-2"></div>
    <div className="skeleton h-15 w-full my-2"></div>
    <div className="skeleton h-15 w-full my-2"></div>
    <div className="skeleton h-15 w-full my-2"></div>
    <div className="skeleton h-15 w-full"></div>
  </div>
);
