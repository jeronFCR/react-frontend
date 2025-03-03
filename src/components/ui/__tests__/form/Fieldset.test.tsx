import { render } from "@testing-library/react";

import { FieldSet } from "../../form/Fieldset";

describe("FieldSet component", () => {
  it("should render the title", () => {
    const { getByText } = render(
      <FieldSet title="Test Title">
        <></>
      </FieldSet>
    );

    const titleElement = getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
  });
});
