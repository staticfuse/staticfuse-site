import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/core";
import Logo from '../assets/images/staticfuse-icon.png'
import Menu from "./Menu";
import {Link} from "gatsby"

export default () => (
  <Box borderBottom="1px solid #eee">
    <Flex p={2} maxW="56rem" m="auto" justify="space-between" flexWrap="wrap">
      <Link to="./"><Flex align="center" w="50%"><Image display="inline" size="50px" src={Logo} alt="Static Fuse Logo" /><Text as="span" fontWeight="bold" fontSize="sm">StaticFuse</Text></Flex></Link>
      <Menu />
    </Flex>
  </Box>
);
