import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import HamburgerMenu from "./Hamburger";
import { Link } from "gatsby";

export default () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = () => {
    let mql = window.matchMedia("(max-width: 750px)");
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) &&
      mql.matches
    ) {
      console.log("setting mobile true");
      return true
    }
    return false
  };

  useEffect( () => {
    checkIfMobile() ? setIsMobile(true) : setIsMobile(false)
  })
  
  return (
    <>
      <Box
        display={!isMobile ? "none" : "block"}
        onClick={() =>
          isMenuOpen ? toggleMenuOpen(false) : toggleMenuOpen(true)
        }
      >
        <HamburgerMenu />
      </Box>
      <Box
        alignItems="center"
        fontWeight="bold"
        fontSize="sm"
        color="gray.500"
        flexDirection={!isMobile ? "row" : "column"}
        overflow="hidden"
        right="20px"
        top="80px"
        bg="#fff"
        rounded={4}
        w={isMobile && isMenuOpen ? "100%" : "auto"}
        p={isMobile && isMenuOpen ? 4 : ""}
        position={isMobile ? "absolute" : "static"}
        display={isMobile && !isMenuOpen ? "none" : "flex"}
      >
        <Link to="/" style={{ marginLeft: "10px" }}>
          About
        </Link>
        <Link to="/docs" style={{ marginLeft: "10px" }}>
          Docs
        </Link>
        <Link to="/docs/my-first-doc" style={{ marginLeft: "10px" }}>
          Single Doc
        </Link>
      </Box>
    </>
  );
};
