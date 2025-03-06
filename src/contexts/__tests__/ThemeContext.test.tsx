import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';

import AppRoutes from '../../routes/AppRoutes';
import { ThemeProvider } from '../ThemeContext';

describe('ThemeContext', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => 'customLight'),
      setItem: vi.fn(),
    });
  });

  it('should toggle theme and update localStorage', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    );

    const toggleButton = getByTestId('swap-theme-checkbox');
    fireEvent.click(toggleButton);

    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'customDark');
  });

  it('should persist theme in localStorage between sessions', () => {
    render(
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    );

    expect(localStorage.getItem).toHaveBeenCalledWith('theme');
  });
});
