// Detail Style

import styled from "styled-components";
import Flex from "../../styles/Flex";



export const DetailContainer = styled(Flex)`
    flex-direction:column;
    width:60%;
    /* justify-content:center; */
    margin:auto;
    background-color: ${({ theme }) => theme.colors.detailBgColor};

`
export const DetailTitle = styled.h1`
    padding:3rem;
`
export const DetailImg = styled.div`
    margin:2rem auto;
    
    
`
export const DetailP = styled.p`
    font-family:Arial, Helvetica, sans-serif;
    font-size:1.2rem;
    font-style: italic;
    line-height:1.7rem;
    margin-top:4rem;
`