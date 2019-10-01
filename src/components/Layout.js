import React from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import myTheme from "../theme/theme";
import { Global } from "@emotion/core";
import Header from "./Header";
import Footer from "./Footer"

const Layout = props => {
  return (
    <ThemeProvider theme={myTheme}>
      <CSSReset />
      <Global
        styles={{
          body: {
            lineHeight: "1.625",
            color: myTheme.colors.text
          },
          p: {
            marginBottom: "1.25rem"
          },
          ".entry-content a": {
            borderBottom: "1px dotted #eee",
            color: myTheme.colors.links,
            textDecoration: "none"
          },
          "h1, h2, h3, h4, h5": {
            marginBottom: "1.25rem",
            fontWeight: "400",
            lineHeight: "1.25",
            color: myTheme.colors.headings,
            fontFamily: myTheme.fonts.heading,
          },
          h1: {
            fontSize: "3rem"
          },
          h2: {
            fontSize: "2.25rem"
          },
          h3: {
            fontSize: "1.875rem"
          },
          h4: {
            fontSize: "1.5rem"
          },
          h5: {
            fontSize: "1.25rem"
          },
          "ul, ol": {
            paddingLeft: "1.5rem",
            marginBottom: ".75rem"
          },
          "ul li, ol li": {
            paddingLeft: ".5rem",
            marginBottom: ".5rem"
          },
          iframe: {
            width: "100%"
          },
          ".screen-reader-text": {
            position: "absolute",
            left: "-10000px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden"
          },
          ".entry-content img.aligncenter, .entry-content .aligncenter img": {
            display: "block",
            margin: "0 auto"
          },
          ".aligncenter": {
            textAlign: "center"
          },
          ".alignleft": {
            float: "left",
            marginRight: "15px"
          },
          ".alignright": {
            float: "right",
            marginLeft: "15px"
          },
          blockquote: {
            paddingLeft: "15px",
            borderLeft: "4px solid #ccc",
            fontFamily: "Georgia, Times, serif",
            fontSize: "18px",
            fontStyle: "italic",
            opacity: ".8"
          },
          ".button": {
            backgroundColor: myTheme.colors.buttonBg, 
            padding: "8px 15px", 
            borderRadius: "0.25rem", 
            color: "#fff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1.2",
            height: "2.5rem",
            minWidth: "2.5rem",
            fontWeight: 500
          },
          ".button:hover": {
            backgroundColor: myTheme.colors.buttonHover,
            color: "#eee"
          }
        }}
      />
      <Header />
      <Box maxW={ props.fullWidth ? "100%" : "4xl"} m="auto">
      {props.children}
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
