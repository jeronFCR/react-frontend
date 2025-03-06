import { fireEvent, render } from '@testing-library/react';

import { Checkbox } from '../../form/Checkbox';

describe('Checkbox component', () => {
  it('renders checkbox with label', () => {
    const { getByLabelText } = render(<Checkbox label="Accept Terms" checked={false} changeFn={() => {}} />);
    const checkbox = getByLabelText('Accept Terms');
    expect(checkbox).toBeInTheDocument();
  });

  it('should be checked when "checked" prop is true', () => {
    const { getByLabelText } = render(<Checkbox label="Accept Terms" checked={true} changeFn={() => {}} />);
    const checkbox = getByLabelText('Accept Terms');
    expect(checkbox).toBeChecked();
  });

  it('should not be checked when "checked" prop is false', () => {
    const { getByLabelText } = render(<Checkbox label="Accept Terms" checked={false} changeFn={() => {}} />);
    const checkbox = getByLabelText('Accept Terms');
    expect(checkbox).not.toBeChecked();
  });

  it('calls changeFn when checkbox is clicked', () => {
    const changeFnMock = vi.fn();
    const { getByLabelText } = render(<Checkbox label="Accept Terms" checked={false} changeFn={changeFnMock} />);
    const checkbox = getByLabelText('Accept Terms');
    fireEvent.click(checkbox);
    expect(changeFnMock).toHaveBeenCalledTimes(1);
  });

  it('does not call changeFn if checkbox state does not change', () => {
    const changeFnMock = vi.fn();
    const { getByLabelText } = render(<Checkbox label="Accept Terms" checked={true} changeFn={changeFnMock} />);
    const checkbox = getByLabelText('Accept Terms');
    fireEvent.click(checkbox);
    expect(changeFnMock).toHaveBeenCalledTimes(1);
  });
});
