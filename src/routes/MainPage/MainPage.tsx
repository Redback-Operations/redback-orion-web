import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faChartBar, faBell, faCog, faUpload, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { faFootballBall, faBasketballBall, faBaseballBall } from '@fortawesome/free-solid-svg-icons'; // Import sports icons

const SidebarContainer = styled.div`
    width: ${({ collapsed }) => (collapsed ? '80px' : '297px')};
    height: 100vh;
    background: black;
    color: white;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    transition: width 0.3s ease;
    z-index: 1000;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    cursor: pointer;
    color: white;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const LogoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: auto;
    gap: 99px;
`;

const LogoutButton = styled.div`
    cursor: pointer;
    background-color: black;
    padding: 10px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    border: 2px solid white;
    color: white;
    
    &:hover {
        background-color: red;
    }
`;

const UserAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 3px solid #CA6D00;
`;

const CrowdImage = styled.img<{ collapsed: boolean }>` // Define collapsed prop in the styled component
    position: fixed;
    top: 0;
    ${({ collapsed }) => (collapsed ? 'left: 80px;' : 'left: 297px;')}
    width: auto;
    height: 100vh;
    z-index: -1;
    transition: left 0.3s ease;
`;

export const RightSidebarContainer = styled.div`
    width: 80px;
    height: 100vh;
    background: darkgreen; /* Match the background color of the left sidebar */
    color: white;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SportsIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

function MainPage(): JSX.Element {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleSidebar = (): void => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SidebarContainer collapsed={collapsed}>
                <Heading style={{ fontSize: '32px', marginBottom: '40px' }}>
                    <FontAwesomeIcon icon={faBars} size="lg" onClick={toggleSidebar} style={{ cursor: 'pointer', marginRight: '10px' }} />
                    <span style={{ display: collapsed ? 'none' : 'block', marginLeft: '10px' }}>
                        <span style={{ color: 'red', fontSize: '30px' }}>Red</span>back <span style={{ color: '#CA6D00', fontSize: '30px' }}>Operations</span>
                    </span>
                </Heading>
                <Menu>
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
                </Menu>
                <LogoutContainer style={{ marginTop: '20px', display: collapsed ? 'none' : 'block' }}>
                    <div className="user-info" style={{ display: 'flex', alignItems: 'center' }}>
                        <UserAvatar src="logo.png" alt="User Avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '3px solid #CA6D00' }} />
                        <div className="user-name" style={{ fontSize: '24px', marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>Madhav</div>
                    </div>
                    <LogoutButton onClick={() => console.log("Logout clicked")} style={{ fontSize: '24px', marginTop: '20px' }}>
                        <FontAwesomeIcon icon={faSignOutAlt} size="1x" style={{ marginRight: '20px', display: collapsed ? 'none' : 'inline-block' }} />
                        <div style={{ fontSize: '24px', marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>LogOut</div>
                    </LogoutButton>
                </LogoutContainer>
            </SidebarContainer>
            <CrowdImage src="crowd.png" alt="Crowd Image" collapsed={collapsed} />
            <RightSidebarContainer>
                <SportsIconsContainer>
                    <FontAwesomeIcon icon={faFootballBall} size="2x" style={{ color: 'white' }} />
                    <FontAwesomeIcon icon={faBasketballBall} size="2x" style={{ color: 'white' }} />
                    <FontAwesomeIcon icon={faBaseballBall} size="2x" style={{ color: 'white' }} />
                </SportsIconsContainer>
            </RightSidebarContainer>
        </div>
    );
}

export default MainPage;
