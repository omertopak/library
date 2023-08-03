import React, { useState } from 'react'
import { StyledInput, LoginH, LoginPage,StyledButton,FormContainer,StyledForm } from './Login.style'
import { useLoginContext } from '../../context/LoginContext'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const {user,setUser}=useLoginContext();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const handleClick = (e) =>{
    e.preventDefault();
    setUser({username,password})
    navigate(-1)
  }
  
  console.log(user);
  return (
    <LoginPage>
      <FormContainer>
        <StyledForm onSubmit={handleClick}>
          <LoginH>Log In</LoginH>
          <StyledInput
            type="text"
            placeholder="Username" 
            required
            // value={username}
            onChange={e => setUserName(e.target.value)}
          />
          <StyledInput
            type="password"
            placeholder="password"
            required
            // value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginPage>
  )
}

export default Login