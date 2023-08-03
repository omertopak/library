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
    border-radius:30px;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction:column;
    width:240px;
`

export const LoginH = styled.h1`
    color:${({theme})=>theme.colors.loginColor};    
    justify-content:center;
    text-align:center;
    margin-bottom:10px;
`

export const StyledInput = styled.input`
    height: 50px;
    width: 100%;
    margin:5px auto;
    font-size: 14px;
    display: block;
    background-color: ${({theme})=>theme.colors.inputColor} ;
    outline: none;
    border: 1px;
    border-radius:5px;
    
`

export const StyledButton = styled.button`
    margin-top: 50px;
    background-color: ${({ theme }) => theme.colors.navbarBgColor};
    color: ${({ theme }) => theme.colors.logoColor};
    padding: 15px 0;
    opacity: 0.5;
    font-size: 18px;
    font-weight: 600;
    border-radius: 15px;
    border: none;
    
    
`
