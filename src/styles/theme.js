import { ThemeProvider } from 'styled-components';
//import { ChakraProvider } from "@chakra-ui/react";
//import customTheme from "../themes/chakra";

import theme from "../themes/default";
import GlobalStyles from './globals';


const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
    );

export default Theme;