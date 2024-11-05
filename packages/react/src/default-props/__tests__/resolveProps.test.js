// packages/react/src/default-props/__tests__/resolveProps.test.js
import React from 'react';
import { render } from '@testing-library/react';
import DefaultPropsComponent from '../index';

describe('DefaultPropsComponent', () => {
  it('should render with default props', () => {
    const { getByText } = render(<DefaultPropsComponent />);
    
    expect(getByText('Hello, World!')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
  });

  it('should render with provided props', () => {
    const { getByText } = render(<DefaultPropsComponent message="Hello, Test!" count={42} />);
    
    expect(getByText('Hello, Test!')).toBeInTheDocument();
    expect(getByText('42')).toBeInTheDocument();
  });

  it('should not render with incorrect prop types', () => {
    console.error = jest.fn();
    
    render(<DefaultPropsComponent message={100} count="Test" />);
    
    expect(console.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledTimes(2);  // Expect two warnings: one for each incorrect prop type
  });
});