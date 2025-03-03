import { render, screen } from "@testing-library/react";

import { Skeleton, SkeletonSmall, SkeletonList } from "../Skeleton";

describe("Skeleton Component", () => {
  it("Should render the component correctly", () => {
    render(<Skeleton />);

    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });
});

describe("SkeletonSmall Component", () => {
  it("Should render the component correctly", () => {
    render(<SkeletonSmall />);

    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });
});

describe("SkeletonList Component", () => {
  it("Should render the component correctly", () => {
    render(<SkeletonList />);

    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });
});
