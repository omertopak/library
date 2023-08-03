// Card Style

import styled from "styled-components";
import Flex from "../../styles/Flex";

export const CardDiv = styled(Flex)`
    flex-direction:column;
    height:20rem;
    width:17rem;
    border-radius:1rem;
    margin: 0.7rem;
    box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.navbarBgColor};
`
export const CardImg = styled.img`
    min-height: 10rem;
    max-height: 10rem;
`
export const CardTitle = styled.h1`
    font-size: 1.2rem;
    text-align: center;
    overflow: scroll;
    height: 5rem;
    margin:1rem;
`
export const CardDetailButton = styled.button`
     width:10rem;
    border:1px;
    border-radius:10px;
    height:30px;
    border-bottom-left-radius:0px;
    border-top-right-radius:0px;
    &:hover {
    background-color:#618ebe7c;
    
    
  }
`

