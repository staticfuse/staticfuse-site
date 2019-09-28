import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Box, Flex, Heading, Text, Button, Icon } from "@chakra-ui/core";
import MCOptin from "../components/MCOptin"
import Footer from "../components/Footer";
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({data}) => (
  <Layout>
    <Header />
    <Flex
      alignItems="center"
      minH="45vh"
      borderBottom="1px solid #eee"
      direction="row"
      textAlign="center"
      py={8}
    >

      <Flex direction="column" alignItems="center" w="100%" textAlign="center" px={2}>

        <Box height="auto" w="100%" maxW="350px" m="10px auto"><Img fluid={data.file.childImageSharp.fluid} alt="Gatsby + WordPress logos" /></Box>
        
        <Heading m="0 auto" mb={4} color="orange.600" fontWeight="300" fontSize={["2xl","4xl"]}  letterSpacing="0.05em">Headless WordPress With Gatsby</Heading>
        <Text color="gray.500" mb={4}>Themes, plugins, and workflow tools to help you build decoupled WordPress + Gatsby sites faster.</Text>
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

export const query = graphql`
  query {
    file(name: {eq: "wp-plus-gatsby"}) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`