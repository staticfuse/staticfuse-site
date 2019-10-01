import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import HamburgerMenu from "./Hamburger";
import { Link } from "gatsby";

export default () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 480px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleMenu = () => {
    toggleMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Box
        display={!isSmallScreen ? "none" : "block"}
        onClick={toggleMenu}
        w="50%"
        textAlign="right"
      >
        <HamburgerMenu />
      </Box>
      <Box
        alignItems="center"
        fontFamily="heading"
        fontSize={["base","sm"]}
        color="primary"
        flexDirection={!isSmallScreen ? "row" : "column"}
        overflow="hidden"
        bg="#fff"
        rounded={4}
        w={isSmallScreen && isMenuOpen ? "100%" : "auto"}
        p={isSmallScreen && isMenuOpen ? 4 : ""}
        display={isSmallScreen && !isMenuOpen ? "none" : "flex"}
      >
      <Box mb={isSmallScreen ? "10px" : "0"}>
          <Link to="./">
            Home
          </Link>
        </Box>
        {/* <Box mb={isSmallScreen ? "10px" : "0"}>
          {" "}
          <Link to="/docs" style={{ marginLeft: "10px" }}>
            Docs
          </Link>
        </Box> */}
        <Box mb={isSmallScreen ? "10px" : "0"}>
          <Link to="./gatsby-wordpress" style={{ marginLeft: "25px" }}>
            Why Gatsby + WordPress?
          </Link>
        </Box>
        <Box mb={isSmallScreen ? "10px" : "0"}>
          <Link to="./about" style={{ marginLeft: "25px" }}>
            About
          </Link>
        </Box>
      </Box>
    </>
  );
};
