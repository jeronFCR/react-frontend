import { render, screen } from '@testing-library/react';

import { Loading } from '../Loading';

describe('Loading Component', () => {
  it('should render loading component correctly', () => {
    render(<Loading />);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
