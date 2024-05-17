import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Sidebar,
  SidebarButton,
  ProfileContainer,
  ProfileImageWrapper,
  ProfileImage,
  CameraButton,
  PersonalDetails,
  PersonalDetailsHeader,
  InputGroup,
  Label,
  Input,
  SaveButton,
  HamburgerMenu,
  MenuItems,
} from '../styles/ProfileStyles';
import profileImage from './images/profile-img.png';
import cameraIcon from './images/camera-icon.png';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'ABC',
    lastName: 'XYZ',
    dateOfBirth: '2000-01-01',
    phoneNumber: '+62-123456789',
    teamName: 'Team XYZ',
    weight: '70',
    height: '175',
    country: 'Country',
    city: 'City',
  });
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleCameraClick = () => {
    // Implement the action for the camera button click, e.g., open file upload dialog
    alert("Camera button clicked!");
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <Sidebar>
        <HamburgerMenu onClick={handleMenuToggle}>≡</HamburgerMenu>
        {showMenu && (
          <MenuItems>
            <SidebarButton onClick={handleEditToggle}>Edit Profile</SidebarButton>
            <SidebarButton as={Link} to="/stats">Player Stats</SidebarButton>
            <SidebarButton as={Link} to="/team">Team Stats</SidebarButton>
            <SidebarButton>Notifications</SidebarButton>
            <SidebarButton>Password & Security</SidebarButton>
            <SidebarButton as={Link} to="/login">Sign Out</SidebarButton>
          </MenuItems>
        )}
      </Sidebar>
      <ProfileContainer>
        <ProfileImageWrapper>
          <ProfileImage src={profileImage} alt="Profile" />
          <CameraButton onClick={handleCameraClick}>
            <img src={cameraIcon} alt="Camera" />
          </CameraButton>
        </ProfileImageWrapper>
        <h2>{profile.firstName} {profile.lastName}</h2>
        <p>Welcome!</p>
        <PersonalDetails>
          <InputGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </InputGroup>
          <InputGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </InputGroup>
          <InputGroup>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              value={profile.dateOfBirth}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </InputGroup>
          <InputGroup>
            <Label>Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </InputGroup>
          <InputGroup>
            <Label>Team Name</Label>
            <Input
              type="text"
              name="teamName"
              value={profile.teamName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </InputGroup>
          <InputGroup>
            <Label>Weight</Label>
            <Input
              type="text"
              name="weight"
              value={profile.weight}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </InputGroup>
          <InputGroup>
            <Label>Height</Label>
            <Input
              type="text"
              name="height"
              value={profile.height}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </InputGroup>
          <InputGroup>
            <Label>Country</Label>
            <Input
              type="text"
              name="country"
              value={profile.country}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </InputGroup>
          <InputGroup>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              value={profile.city}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </InputGroup>
          {isEditing && (
            <SaveButton onClick={handleEditToggle}>Save</SaveButton>
          )}
        </PersonalDetails>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;