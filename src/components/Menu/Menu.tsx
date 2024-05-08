// src/components/Menu/Menu.tsx

import React from 'react';
import { MenuContainer, MenuItem } from './MenuStyle';


interface MenuProps {
    collapsed: boolean;
}

const Menu: React.FC<MenuProps> = ({ collapsed }) => {
    return (
        <MenuContainer>
            <MenuItem>
                <i className="fas fa-chart-bar"></i>
                <div style={{ marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>Statistics</div>
            </MenuItem>
            <MenuItem>
                <i className="fas fa-bell"></i>
                <div style={{ marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>Notifications</div>
            </MenuItem>
            <MenuItem>
                <i className="fas fa-cog"></i>
                <div style={{ marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>Settings</div>
            </MenuItem>
            <MenuItem>
                <i className="fas fa-upload"></i>
                <div style={{ marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>Files Upload</div>
            </MenuItem>
            <MenuItem>
                <i className="fas fa-question-circle"></i>
                <div style={{ marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>Help!</div>
            </MenuItem>
        </MenuContainer>
    );
}

export default Menu;
