// src/components/Menu/Menu.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders menu items correctly', () => {
    const { getByText } = render(<Menu collapsed={false} />);
    expect(getByText('Statistics')).toBeInTheDocument();
    expect(getByText('Notifications')).toBeInTheDocument();
    // Add more assertions as needed
});
