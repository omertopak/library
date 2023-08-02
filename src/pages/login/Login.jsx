import React from 'react'
import { StyledInput, LoginH, LoginPage,StyledButton,FormContainer,StyledForm } from './Login.style'


const Login = () => {

  
  return (
    <LoginPage>
      <FormContainer>
        <StyledForm >
          <LoginH>Log In</LoginH>
          <StyledInput
            type="text"
            placeholder="Username" 
            required
          />
          <StyledInput
            type="password"
            placeholder="password"
            required
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginPage>
  )
}

export default Login