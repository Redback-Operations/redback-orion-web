// src/components/LogoutButton/LogoutButton.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import LogoutButton from './LogoutButton';

test('renders logout button correctly', () => {
    const { getByText } = render(<LogoutButton collapsed={false} />);
    expect(getByText('LogOut')).toBeInTheDocument();
    // Add more assertions as needed
});
