import React from "react";
import { Box, Stack } from "@chakra-ui/core";

const Item = ({ children }) => <Box p={5}>{children}</Box>;

export default () => (
  <Box borderRight="1px solid #eee" h="100%">
    <Box bg="gray.100" rounded="full" h="100px" w="100px" m="20px auto" color="gray.200">{/*Logo here*/ }</Box>
    <Stack spacing={8}>
      <Item>Menu item</Item>
      <Item>Menu item</Item>
      <Item>Menu item</Item>
      <Item>Menu item</Item>
    </Stack>
  </Box>
);
