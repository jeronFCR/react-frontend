import { fireEvent, render, screen } from '@testing-library/react';

import { Card } from '../Card';

describe('Card Component', () => {
  it('should render the title and children correctly', () => {
    render(
      <Card title="Test Title">
        <p>Test Content</p>
      </Card>
    );
    const titleElement = screen.getByText('Test Title');
    const contentElement = screen.getByText('Test Content');

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('should render actions and handle clicks', () => {
    const mockAction = vi.fn();

    render(
      <Card title="Action Test" actions={[{ text: 'Click Test', onClick: mockAction }]}>
        <p>Test Content</p>
      </Card>
    );

    const buttonElement = screen.getByText('Click Test');
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(mockAction).toHaveBeenCalled();
  });

  it('should apply the provided className', () => {
    render(
      <Card title="Class Test" className="custom-class">
        <p>Test Content</p>
      </Card>
    );

    const cardElement = screen.getByText('Class Test').closest('.card');
    expect(cardElement).toHaveClass('custom-class');
  });
});
