import { fireEvent, render } from '@testing-library/react';

import { SingleInput } from '../../form/Input';

describe('SingleInput component', () => {
  it('renders input with placeholder and value', () => {
    const { getByPlaceholderText } = render(<SingleInput value="Test value" placeholder="Enter text" changeFn={() => {}} />);
    const input = getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('Test value');
  });

  it('calls changeFn when input value changes', () => {
    const changeFnMock = vi.fn();
    const { getByPlaceholderText } = render(<SingleInput value="Test value" placeholder="Enter text" changeFn={changeFnMock} />);
    const input = getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(changeFnMock).toHaveBeenCalledTimes(1);
  });

  it('does not call changeFn if value does not change', () => {
    const changeFnMock = vi.fn();
    const { getByPlaceholderText } = render(<SingleInput value="Test value" placeholder="Enter text" changeFn={changeFnMock} />);
    const input = getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'Test value' } });
    expect(changeFnMock).not.toHaveBeenCalled();
  });
});
