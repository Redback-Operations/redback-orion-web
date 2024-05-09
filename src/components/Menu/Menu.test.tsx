// import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu'; // Importing Menu from its own file

test('renders menu items correctly', () => {
    const { getByText } = render(<Menu collapsed={false} />);
    expect(getByText('Statistics')).toBeInTheDocument();
    expect(getByText('Notifications')).toBeInTheDocument();
    // Add more assertions as needed
});

export default Menu; // Exporting Menu component
