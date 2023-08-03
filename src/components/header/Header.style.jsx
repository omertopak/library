// Header Style

import styled from "styled-components";
import Flex from "../../styles/Flex";

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap:nowrap;
    flex-direction:column;
    gap:10px;
    margin:20px auto;
    width:500px;
    height:140px;

`


export const SearchInput = styled.input`
    width:20rem;
    margin-top:20px;
    border:1px;
    border-radius:10px;
    height:30px;
    margin-right:1px;
    border-top-right-radius:0px;
    border-bottom-right-radius:0px;
`
export const SearchSelect = styled.select`
    width:10rem;
    border:1px;
    border-radius:10px;
    height:30px;
    border-top-left-radius:0px;
    border-bottom-left-radius:0px;
`

export const SearchButton = styled.button`
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

export const DataDiv = styled(Flex)`
    
`
