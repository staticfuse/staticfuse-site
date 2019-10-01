import React from "react";
import { Box, Stack } from "@chakra-ui/core";

const Item = ({ children }) => <Box p={5}>{children}</Box>;

export default () => (
  <Box borderRight="1px solid #eee" h="100%">
    <Stack spacing={2}>
      <Item>Menu item</Item>
      <Item>Menu item</Item>
      <Item>Menu item</Item>
      <Item>Menu item</Item>
    </Stack>
  </Box>
);
