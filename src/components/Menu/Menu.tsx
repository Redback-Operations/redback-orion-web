import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faBell, faCog, faUpload, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { MenuContainer, MenuItem } from './MenuStyle';

interface MenuProps {
    collapsed: boolean; // Explicitly typing collapsed as boolean
}

const Menu: React.FC<MenuProps> = ({ collapsed }) => {
    return (
        <MenuContainer>
            <MenuItem style={{ marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faHome} size="2x" style={{ marginRight: '20px' }} />
                {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>Home</div>}
            </MenuItem>
            <MenuItem style={{ marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faChartBar} size="2x" style={{ marginRight: '20px' }} />
                {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>Statistics</div>}
            </MenuItem>
            <MenuItem style={{ marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faBell} size="2x" style={{ marginRight: '20px' }} />
                {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>Notifications</div>}
            </MenuItem>
            <MenuItem style={{ marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faCog} size="2x" style={{ marginRight: '20px' }} />
                {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>Settings</div>}
            </MenuItem>
            <MenuItem style={{ marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faUpload} size="2x" style={{ marginRight: '20px' }} />
                {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>Files Upload</div>}
            </MenuItem>
            <MenuItem style={{ marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faQuestionCircle} size="2x" style={{ marginRight: '20px' }} />
                {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>Help!</div>}
            </MenuItem>
        </MenuContainer>
    );
}

export default Menu;
