import React from "react";
import { Box, Flex } from "@chakra-ui/core";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Layout from "./Layout";

export default ({ children }) => (
  <Layout>
    <Flex align="start">
      <Box w={["0", "300px"]}>
        <Sidebar />
      </Box>
      <Box m="auto" w="100%" maxW="4xl" p={4}>
        <Search />
        {children}
      </Box>
    </Flex>
  </Layout>
);
