import React from "react";
import { ThemeProvider, CSSReset, theme} from "@chakra-ui/core";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {children}
  </ThemeProvider>
);
