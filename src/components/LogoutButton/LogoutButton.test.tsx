// import React from 'react';
import { render } from '@testing-library/react';
import LogoutButton from './LogoutButton';

test('renders logout button correctly', () => {
    const mockOnClick = jest.fn(); // Create a mock onClick function
    const { getByText } = render(<LogoutButton onClick={mockOnClick} collapsed={false} />); // Provide the mock onClick function
    expect(getByText('LogOut')).toBeInTheDocument();
    // Add more assertions as needed
});
