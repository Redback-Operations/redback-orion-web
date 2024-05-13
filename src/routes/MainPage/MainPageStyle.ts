import styled from 'styled-components';

export const SidebarContainer = styled.div<{ collapsed: boolean }>`
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

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    cursor: pointer;
    color: white;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LogoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: auto;
    gap: 99px;
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

export const CrowdImage = styled.img<{ collapsed: boolean }>`
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

export const SportsIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ImageCarousel = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    transition: opacity 0.5s ease;
`;

export const CarouselContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;