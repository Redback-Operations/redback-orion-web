import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  RegisterWrapper,
  RegisterBox,
  ImageContainer,
  RegisterForm,
  TitleContainer,
  TitleText,
  Title,
  SubTitle,
  InputGroup,
  Label,
  Input,
  Button,
  Logo,
  Divider,
  FooterText,
  Check
} from '../styles/RegisterStyles';
import registerImage from './images/register-img.jpg';
import redbackLogo from './images/redback-logo.png';

const Register = () => {
  return (
    <Container>
      <RegisterWrapper>
        <RegisterBox>
          <RegisterForm>
            <TitleContainer>
              <Logo src={redbackLogo} alt="Redback Logo" />
              <TitleText>
                <Title>Create your</Title>
                <SubTitle>Athlete Insight Hub Account</SubTitle>
              </TitleText>
            </TitleContainer>
            <InputGroup>
              <Label>Name</Label>
              <Input type="text" placeholder="Your Name" />
            </InputGroup>
            <InputGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Your Email" />
            </InputGroup>
            <InputGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <InputGroup>
              <Label>Repeat Password</Label>
              <Input type="password" placeholder="Repeat your password" />
            </InputGroup>
            <InputGroup>
              <Check type="checkbox" id="agree-term" />
              <Label htmlFor="agree-term">I agree all statements in <a href="#">Terms of service</a></Label>
            </InputGroup>
            <Button>Register</Button>
            <FooterText>
              Already have an account? <Link to="/login">Login</Link>
            </FooterText>
          </RegisterForm>
        </RegisterBox>
        <ImageContainer>
          <img src={registerImage} alt="Register" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </ImageContainer>
      </RegisterWrapper>
    </Container>
  );
};

export default Register;