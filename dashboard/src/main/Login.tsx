import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

type PropsType = {
  authenticate: () => void
};

export default class Login extends Component<PropsType> {
  render() {
    return (
      <StyledLogin>
        <LoginPanel>
          <GradientBg />
          <FormWrapper>
            <Logo src={logo} />
            <Line />
            <Prompt>Log in to Porter</Prompt>
            <Input placeholder='Username' />
            <Input type='password' placeholder='Password' />
            <Button onClick={this.props.authenticate}>Continue</Button>
          </FormWrapper>
        </LoginPanel>
      </StyledLogin>
    );
  }
}

const Line = styled.div`
  height: 3px;
  width: 100px;
  background: #ffffff22;
  margin: 40px 0px 35px;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
  margin-top: 25px;
  border-radius: 2px;
  border: 0;
  background: #819BFD;
  color: white;
  font-weight: 500;
  font-size: 14px;
`;

const Input = styled.input`
  width: 200px;
  font-family: 'Work Sans', sans-serif;
  margin: 8px 0px;
  height: 30px;
  padding: 8px;
  background: #ffffff12;
  color: #ffffff;
  border: 0;
  border-radius: 2px;
  font-size: 14px
`;

const Prompt = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 18px;
`;

const Logo = styled.img`
  width: 150px;
  margin-top: 63px;
<<<<<<< HEAD
  user-select: none;
=======
>>>>>>> 00bdb9028faac5bb0c17eabe2b90abe0400be933
`;

const FormWrapper = styled.div`
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  background: #111114;
  z-index: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GradientBg = styled.div`
  background: linear-gradient(#8ce1ff, #a59eff, #fba8ff);
  width: 180%;
  height: 180%;
  position: absolute;
  animation: flip 6s infinite linear;
  @keyframes flip {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const LoginPanel = styled.div`
  width: 330px;
  height: 430px;
  background: white;
  margin-top: -20px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #111114;
`;
