import { render, screen } from '@testing-library/react';

import { DataDisplay } from '../DataDisplay';

describe('DataDisplay Component', () => {
  it('should render the label and children correctly', () => {
    render(
      <DataDisplay label="Name">
        <span>Room 1</span>
      </DataDisplay>
    );
    const labelElement = screen.getByText('Name:');
    const childElement = screen.getByText('Room 1');

    expect(labelElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });

  it('should apply the provided className', () => {
    render(
      <DataDisplay label="Type" className="test-class">
        <span>Display</span>
      </DataDisplay>
    );
    const paragraphElement = screen.getByText('Type:').parentElement;

    expect(paragraphElement).toHaveClass('test-class');
  });
});
