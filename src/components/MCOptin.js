import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Box, Input, Button, Heading, Text } from "@chakra-ui/core";

export default class IndexPage extends React.Component {
  state = {
    name: null,
    email: null
  };

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value
    });
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();

    console.log("submit", this.state);

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`);

        if (result !== "success") {
          throw msg;
        }
        alert(msg);
      })
      .catch(err => {
        console.log("err", err);
        alert(err);
      });
  };

  render() {
    return (
      <Box className="optin-box" w="100%" bg="gray.50" p={4}>
        <Box maxW="2xl" m="auto" textAlign="center">
          <Heading as="h3" mb={1} fontSize="xl">
            Learn Gatsby
          </Heading>

          <Text color="gray.700" fontSize="sm" mb={2}>
            Learn how to build headless WordPress sites with Gatsby.
          </Text>

          <Box as="form" display={["block","flex"]} onSubmit={this._handleSubmit}>
            <Box p={2} w={["100%", "75%"]}>
              <label htmlFor="email" style={{ display: "none" }}>
                Email
              </label>
              <Input
                type="email"
                onChange={this._handleChange}
                name="email"
                placeholder="Enter your email"
              />
            </Box>

            <Box w={["100%", "25%"]} p={2}>
              <Button
                display="block"
                width="100%"
                variantColor="orange"
                type="submit"
                value="Subscribe"
                variant="outline"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
