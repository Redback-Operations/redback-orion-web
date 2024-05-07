import { useState } from 'react';
import { SidebarContainer, Heading, Operations, Menu, MenuItem, LogoutContainer, LogoutButton, UserAvatar, CrowdImage } from './MainPageStyle';

function MainPage(): JSX.Element {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleSidebar = (): void => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SidebarContainer collapsed={collapsed}>
                <Heading onClick={toggleSidebar}>
                    <span style={{ display: collapsed ? 'none' : 'block' }}>
                        <span style={{ color: 'red' }}>Red</span>back <Operations>Operations</Operations>
                    </span>
                    <i className={collapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'}></i>
                </Heading>
                <Menu>
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
                </Menu>
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
            </SidebarContainer>
            <CrowdImage src="crowd.png" alt="Crowd Image" collapsed={collapsed} />
        </div>
    );
}

export default MainPage;
