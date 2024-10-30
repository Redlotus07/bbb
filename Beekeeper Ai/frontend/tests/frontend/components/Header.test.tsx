import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/Header'; // Adjust the path as necessary

test('renders header text', () => {
    render(<Header />);
    const headerElement = screen.getByText(/beekeeper ai/i); // Adjust based on your header content
    expect(headerElement).toBeInTheDocument();
});