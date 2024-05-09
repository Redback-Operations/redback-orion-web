import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { LogoutButtonContainer } from './LogoutButtonStyle';

interface LogoutButtonProps {
    onClick: () => void;
    collapsed: boolean; // Explicitly typing collapsed as boolean
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onClick, collapsed }) => {
    return (
        <LogoutButtonContainer onClick={onClick}>
            <FontAwesomeIcon icon={faSignOutAlt} size="1x" style={{ marginRight: '20px', display: collapsed ? 'none' : 'inline-block' }} />
            <div style={{ fontSize: '24px', marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>LogOut</div>
        </LogoutButtonContainer>
    );
}

export default LogoutButton;
