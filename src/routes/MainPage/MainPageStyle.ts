import styled from 'styled-components';

interface SidebarProps {
    collapsed: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
    width: ${({ collapsed }) => (collapsed ? '80px' : '297px')};
    height: 100vh;
    background: black;
    color: white;
    padding: 20px;
    position: relative;
    transition: width 0.3s ease;
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 60px;
    cursor: pointer;
    color: white;
`;

export const Operations = styled.span`
    color: #CA6D00;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
`;

export const LogoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: auto;
    gap: 20px;
`;

export const LogoutButton = styled.div`
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

export const UserAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 3px solid #CA6D00;
`;

interface CrowdImageProps {
    collapsed: boolean;
}

export const CrowdImage = styled.img<CrowdImageProps>`
    position: absolute;
    top: 0;
    right: ${({ collapsed }) => (collapsed ? '80px' : '297px')};
    width: auto;
    height: 100vh;
    z-index: -1;
`;
