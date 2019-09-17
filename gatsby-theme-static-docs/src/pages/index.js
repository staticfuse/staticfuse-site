import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Box, Flex, Heading, Text, Button, Icon } from "@chakra-ui/core";
import MCOptin from "../components/MCOptin"
import Footer from "../components/Footer";

export default () => (
  <Layout>
    <Header />
    <Flex
      alignItems="center"
      h="45vh"
      borderBottom="1px solid #eee"
      direction="row"
      textAlign="center"
    >
      <Flex direction="column" alignItems="center" w="100%" textAlign="center">
        <Heading m="0 auto" mb={4} color="orange.600" fontWeight="300" fontSize={["2xl","4xl"]}  letterSpacing="0.05em">Build Websites With Gatsby</Heading>
        <Text color="gray.500" mb={4}>Themes, plugins, and workflow tools to help you build Gatsby sites faster.</Text>
        <Button variantColor="orange" mt={2}>Get Started</Button>
      </Flex>
    </Flex>
    <MCOptin />
    <Flex align="center" maxW="4xl" m="auto" py={8} px={2} direction={["column", "row"]} justify="space-between">
        <Box textAlign="center" w={["100%","30%"]}>
            <Icon name="question-outline" size="25px" color="gray.300" />
            <Heading as="h4" fontSize="2xl" my={4} fontWeight="300" color="orange.600">Why</Heading>
            <Text color="gray.600">Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.</Text>
        </Box>
        <Box textAlign="center" w={["100%","30%"]}>
            <Icon name="info-outline" size="25px" color="gray.300" />
            <Heading as="h4" fontSize="2xl" my={4} fontWeight="300" color="orange.600">How</Heading>
            <Text color="gray.600">Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.</Text>
        </Box>
        <Box textAlign="center" w={["100%","30%"]}>
            <Icon name="settings" size="25px" color="gray.300" />
            <Heading as="h4" fontSize="2xl" my={4} fontWeight="300" color="orange.600">What</Heading>
            <Text color="gray.600">Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.</Text>
        </Box>
    </Flex>
    <Footer />
  </Layout>
);
