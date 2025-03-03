import { render, fireEvent } from "@testing-library/react";

import { Button } from "../Button";

describe("Button component", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <Button onClick={() => {}}>Click Test</Button>
    );
    expect(getByText("Click Test")).toBeInTheDocument();
  });

  it("should apply the default primary class when no type is provided", () => {
    const { container } = render(
      <Button onClick={() => {}}>Click Test</Button>
    );
    expect(container.firstChild).toHaveClass("btn-primary");
  });

  it('should apply the correct class for "accent" type', () => {
    const { container } = render(
      <Button onClick={() => {}} type="accent">
        Click Test
      </Button>
    );
    expect(container.firstChild).toHaveClass("btn-accent");
  });

  it('should apply the correct class for "secondary" type', () => {
    const { container } = render(
      <Button onClick={() => {}} type="secondary">
        Click Test
      </Button>
    );
    expect(container.firstChild).toHaveClass("btn-secondary");
  });

  it('should apply the correct class for "neutral" type', () => {
    const { container } = render(
      <Button onClick={() => {}} type="neutral">
        Click Test
      </Button>
    );
    expect(container.firstChild).toHaveClass("btn-neutral");
  });

  it("should call the onClick when clicked", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click Test</Button>
    );
    fireEvent.click(getByText("Click Test"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should disable the button when disabled prop is passed", () => {
    const { getByText } = render(
      <Button onClick={() => {}} disabled>
        Click Test
      </Button>
    );
    const button = getByText("Click Test");
    expect(button).toBeDisabled();
  });

  it("should not call the onClick when clicked and disabled", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button onClick={onClickMock} disabled>
        Click Test
      </Button>
    );
    fireEvent.click(getByText("Click Test"));
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
