//create global styles

import { createGlobalStyle } from "styled-components";
    
const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:0;
    }

    body{
        background-color: ${({theme})=>theme.colors.mainColor} ;
    }

`;

export default GlobalStyles