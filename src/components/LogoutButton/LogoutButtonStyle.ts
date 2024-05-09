import styled from 'styled-components';

export const LogoutButtonContainer = styled.div`
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
