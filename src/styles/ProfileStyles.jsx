import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SidebarButton = styled.button`
  padding: 15px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
  font-weight: bold;
  width: 100%;  // Ensure the buttons take full width of the container

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  // Apply a smooth transition effect
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

export const HamburgerMenu = styled.button`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;  // Ensure a consistent width
  padding: 0;  // Remove any default padding

  // Apply a smooth transition effect
  transition: all 0.3s ease-in-out;
`;

export const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const CameraButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const PersonalDetails = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

export const PersonalDetailsHeader = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  text-align: center;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const SaveButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;