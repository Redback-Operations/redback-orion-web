// src/components/LogoutButton/LogoutButton.tsx

import React from 'react';
import { LogoutContainer, LogoutButton, UserAvatar } from './LogoutButtonStyle';

interface LogoutButtonProps {
    collapsed: boolean;
}

const Logout: React.FC<LogoutButtonProps> = ({ collapsed }) => {
    return (
        <LogoutContainer>
            <div className="user-info">
                <UserAvatar src="logo.png" alt="User Avatar" />
                <div className="user-name" style={{ display: collapsed ? 'none' : 'block', marginTop: '10px' }}>Madhav</div>
            </div>
            <LogoutButton onClick={() => console.log("Logout clicked")}>
                <i className="fas fa-sign-out-alt"></i>
                <div style={{ marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>LogOut</div>
            </LogoutButton>
        </LogoutContainer>
    );
}

export default Logout;
