// src/components/LogoutButton/LogoutButtonStyle.ts

import styled from 'styled-components';

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
