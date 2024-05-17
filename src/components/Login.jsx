import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  LoginWrapper,
  LoginBox,
  ImageContainer,
  LoginForm,
  TitleContainer,
  TitleText,
  Title,
  SubTitle,
  InputGroup,
  Label,
  Input,
  Button,
  SocialButton,
  Logo,
  Divider,
  FooterText,
  Check
} from '../styles/LoginStyles';
import loginImage from './images/login-img.png';
import redbackLogo from './images/redback-logo.png';

const Login = () => {
  return (
    <Container>
      <LoginWrapper>
        <ImageContainer>
          <img src={loginImage} alt="Login" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </ImageContainer>
        <LoginBox>
          <LoginForm>
            <TitleContainer>
              <Logo src={redbackLogo} alt="Redback Logo" />
              <TitleText>
                <Title>Welcome to</Title>
                <SubTitle>Athlete Insight Hub</SubTitle>
              </TitleText>
            </TitleContainer>
            <SocialButton bgColor="#dd4b39">Login with Google</SocialButton>
            <SocialButton bgColor="#3b5998">Login with Facebook</SocialButton>
            <Divider><span>OR</span></Divider>
            <InputGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="example@gmail.com" />
            </InputGroup>
            <InputGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <InputGroup>
              <Check type="checkbox" id="remember-me" />
              <Label htmlFor="remember-me">Remember me</Label>
            </InputGroup>
            <Button>Login</Button>
            <FooterText>
              <a href="#">Forgot Password?</a>
            </FooterText>
            <FooterText>
              Don't have an account? <Link to="/register">Register</Link>
            </FooterText>
          </LoginForm>
        </LoginBox>
      </LoginWrapper>
    </Container>
  );
};

export default Login;