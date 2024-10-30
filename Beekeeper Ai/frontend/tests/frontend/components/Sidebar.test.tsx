import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '../../../src/components/Sidebar'; // Adjust the path as necessary

test('renders sidebar items', () => {
    render(<Sidebar />);
    const sidebarElement = screen.getByText(/dashboard/i); // Adjust based on your sidebar content
    expect(sidebarElement).toBeInTheDocument();
});