import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import Heading from "../components/heading"
import Remark from "../components/remark"
import Footer from "../components/footer"

export default ({ data }) => (
  <Container>
    <Header title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
    <Heading title=" "/>
    <p className="error">404 Error: Page not found</p>
    <Footer copyright={data.site.siteMetadata.copyright.name} startyear={data.site.siteMetadata.copyright.startYear} />
  </Container>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        copyright {
          name
          startYear
        }
        contacts {
          url
          channel
        }
      }
    }
  }
`