import React from "react";
import Layout from "../components/Layout";
import { Box } from "@chakra-ui/core";
import BadDudes from "../images/baddudes.jpg";

const AboutPage = () => (
  <Layout>
    <Box>
      <img src={BadDudes} />
      <h1>About Us</h1>
      <p>Two bad dudes working on code.</p>
    </Box>
  </Layout>
);

export default AboutPage;
