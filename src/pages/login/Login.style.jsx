// Login Style

import styled from "styled-components";
import Flex from "../../styles/Flex";

export const LoginPage = styled(Flex)`
    min-height:90vh;
    background-image: url("https://picsum.photos/1600/900");
    background-repeat: no-repeat;
    background-position:center;  
`

export const FormContainer = styled(Flex)`
    backdrop-filter: blur(10px);
    height:20rem;
    width:20rem;
    border:1px;
    border-radius:3;
`

export const StyledForm = styled.form`
    
`

export const LoginH = styled.h1`
    color:${({theme})=>theme.colors.logincolor};    
`

export const StyledInput = styled.input`
height: 50px;
  width: 100%;
`

export const StyledButton = styled.button`
    
`
