import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/core";
import Logo from '../assets/images/staticfuse-icon.png'
import Menu from "./Menu";

export default () => (
  <Box borderBottom="1px solid #eee">
    <Flex p={2} maxW="56rem" m="auto" justify="space-between" flexWrap="wrap">
      <Flex align="center" w="50%"><Image display="inline" size="50px" src={Logo} alt="Static Fuse Logo" /><Text fontWeight="bold" color="orange.600" fontSize="sm">StaticFuse</Text></Flex>
      <Menu />
    </Flex>
  </Box>
);
