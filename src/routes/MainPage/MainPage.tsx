import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarContainer, Heading, Menu, MenuItem , LogoutContainer, LogoutButton, UserAvatar, CrowdImage, RightSidebarContainer, SportsIconsContainer } from './MainPageStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faChartBar, faBell, faCog, faUpload, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFootballBall, faBasketballBall, faBaseballBall } from '@fortawesome/free-solid-svg-icons';

function MainPage(): JSX.Element {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const images = ['crowd.png', 'crowd2.jpg', 'crowd3.jpg'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

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
                        <NavLink to="/" activeClassName="activeLink">
                            <FontAwesomeIcon icon={faHome} size="2x" style={{ marginRight: '20px', color: 'red' }} />
                            {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', color: 'white' }}>Home</div>}
                        </NavLink>
                    </MenuItem>
                    <MenuItem style={{ marginBottom: '20px' }}>
                        <NavLink to="/statistics" activeClassName="activeLink">
                            <FontAwesomeIcon icon={faChartBar} size="2x" style={{ marginRight: '20px', color: 'red' }} />
                            {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', color: 'white' }}>Statistics</div>}
                        </NavLink>
                    </MenuItem>
                    <MenuItem style={{ marginBottom: '20px' }}>
                        <NavLink to="/notifications" activeClassName="activeLink">
                            <FontAwesomeIcon icon={faBell} size="2x" style={{ marginRight: '20px', color: 'red' }} />
                            {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', color: 'white' }}>Notifications</div>}
                        </NavLink>
                    </MenuItem>
                    <MenuItem style={{ marginBottom: '20px' }}>
                        <NavLink to="/settings" activeClassName="activeLink">
                            <FontAwesomeIcon icon={faCog} size="2x" style={{ marginRight: '20px', color: 'red' }} />
                            {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', color: 'white' }}>Settings</div>}
                        </NavLink>
                    </MenuItem>
                    <MenuItem style={{ marginBottom: '20px' }}>
                        <NavLink to="/upload" activeClassName="activeLink">
                            <FontAwesomeIcon icon={faUpload} size="2x" style={{ marginRight: '20px', color: 'red' }} />
                            {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', color: 'white' }}>Files Upload</div>}
                        </NavLink>
                    </MenuItem>
                    <MenuItem style={{ marginBottom: '20px' }}>
                        <NavLink to="/help" activeClassName="activeLink">
                            <FontAwesomeIcon icon={faQuestionCircle} size="2x" style={{ marginRight: '20px', color: 'red' }} />
                            {!collapsed && <div style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', color: 'white' }}>Help!</div>}
                        </NavLink>
                    </MenuItem>
                </Menu>
                <LogoutContainer style={{ marginTop: '20px', display: collapsed ? 'none' : 'block' }}>
                    <div className="user-info" style={{ display: 'flex', alignItems: 'center' }}>
                        <UserAvatar src="logo.png" alt="User Avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '3px solid #CA6D00' }} />
                        <div className="user-name" style={{ fontSize: '24px', marginLeft: '10px', display: collapsed ? 'none' : 'block' }}>Madhav</div>
                    </div>
                    <LogoutButton onClick={() => console.log("Logout clicked")} style={{ fontSize: '24px', marginTop: '20px' }}>
                        <FontAwesomeIcon icon={faSignOutAlt} size="1x" style={{ marginRight: '20px', display: collapsed ? 'none' : 'inline-block' }} />
                        <div style={{ fontSize: '24px', marginLeft: '10px', display: collapsed ? 'none' : 'block', color: 'white' }}>LogOut</div>
                    </LogoutButton>
                </LogoutContainer>
            </SidebarContainer>
            <CrowdImage src={images[currentImageIndex]} alt="Crowd Image" collapsed={collapsed} />
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
