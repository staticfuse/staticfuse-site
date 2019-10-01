import React from "react"
import { graphql } from "gatsby"
import DocsWrap from "../components/Docswrap"
import { Heading, Text, Box } from "@chakra-ui/core"

export default function DocsTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <DocsWrap>
        <h1>{frontmatter.title}</h1>
        { frontmatter.date ? <Text as="p" size="sm" color="gray.400" mb={4} h="auto" w="auto">{frontmatter.date}</Text> : '' }
        <Box
          className="docs-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </DocsWrap>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`