import { render, screen } from '@testing-library/react';

import { Layout } from '../Layout';

describe('Layout Component', () => {
  it('should render and display children', () => {
    render(
      <Layout>
        <p>Test</p>
      </Layout>
    );
    const childElement = screen.getByText('Test');
    expect(childElement).toBeInTheDocument();
  });
});
