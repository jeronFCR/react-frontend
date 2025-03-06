import { render, screen } from '@testing-library/react';

import BatteryDisplay from '../BatteryDisplay';

describe('BatteryDisplay Component', () => {
  it('renders full battery icon when battery is 50 or more', () => {
    render(<BatteryDisplay battery={80} />);
    expect(screen.getByTestId('device-battery-icon')).toBeDefined();
    expect(screen.getByTestId('device-battery-icon')).toHaveClass('text-success');
  });

  it('renders medium battery icon when battery is between 26 and 49', () => {
    render(<BatteryDisplay battery={40} />);
    expect(screen.getByTestId('device-battery-icon')).toHaveClass('text-warning');
  });

  it('renders low battery icon when battery is 25 or less', () => {
    render(<BatteryDisplay battery={10} />);
    expect(screen.getByTestId('device-battery-icon')).toHaveClass('text-error');
  });

  it('displays battery percentage when showNumber is true', () => {
    render(<BatteryDisplay battery={75} showNumber />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('does not display number when showNumber is false', () => {
    render(<BatteryDisplay battery={75} showNumber={false} />);
    expect(screen.queryByText('75%')).not.toBeInTheDocument();
  });
});
