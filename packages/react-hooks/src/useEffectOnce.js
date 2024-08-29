import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import MyComponent from 'src/components/MyComponent';

describe('MyComponent', () => {
  it('renders with initial count', () => {
    const { getByText } = render(<MyComponent initialCount={5} />);
    expect(getByText('Count: 5')).toBeInTheDocument();
  });

  it('increments the count', () => {
    const { getByText } = render(<MyComponent initialCount={0} />);
    const incrementButton = getByText('Increment');
    
    fireEvent.click(incrementButton);
    expect(getByText('Count: 1')).toBeInTheDocument();
    
    fireEvent.click(incrementButton);
    expect(getByText('Count: 2')).toBeInTheDocument();
  });

  it('decrements the count', () => {
    const { getByText } = render(<MyComponent initialCount={2} />);
    const decrementButton = getByText('Decrement');
    
    fireEvent.click(decrementButton);
    expect(getByText('Count: 1')).toBeInTheDocument();
    
    fireEvent.click(decrementButton);
    expect(getByText('Count: 0')).toBeInTheDocument();
  });

  it('does not go below zero if decrement is clicked', () => {
    const { getByText } = render(<MyComponent initialCount={0} />);
    const decrementButton = getByText('Decrement');
    
    fireEvent.click(decrementButton);
    expect(getByText('Count: -1')).toBeInTheDocument();
  });
});