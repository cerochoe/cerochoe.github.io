import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Container from "../components/container"
import Header from "../components/header"
import Heading from "../components/heading"
import Experience from "../components/experience"
import Remark from "../components/remark"
import Contact from "../components/contact"
import Footer from "../components/footer"

const getExperience = ({ edges }) => {
  let remarkCount = 0
  const remarkDatas = edges.map(({ node }) => (
    node.frontmatter.note ? { index: ++remarkCount, content: node.frontmatter.note } : null
  ))

  const experiences = () => (
    edges.map(({ node }, i) => (
      <Experience
      from={node.frontmatter.from}
      to={node.frontmatter.to}
      title={node.frontmatter.title}
      position={node.frontmatter.position}
      at={node.frontmatter.at}
      url={node.frontmatter.url}
      remark={remarkDatas[i] ? `[${remarkDatas[i].index}]` : ""} 
      />
    ))
  )

  const remarks = () => (
    remarkCount > 0 && (
      <div>
        <Remark content="-"/>
        {remarkDatas.filter((remark) => remark).map((remark) => (
          <Remark content={`[${remark.index}] ${remark.content}`} />
        ))}
      </div>
    )
  )
  return (
    <div>
      {experiences()}
      {remarks()}
    </div>
  )
}

const getContacts = ({ contacts }) => (
  contacts.map(({ url, channel }) => (
    <Contact href={url} channel={channel} />
  ))
)

export default ({ data }) => (
  <>
    <Helmet title={data.site.siteMetadata.title}>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700%26display=swap" rel="stylesheet" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="og:url" content={data.site.siteMetadata.siteUrl} />
      <meta name="og:title" content={data.site.siteMetadata.title} />
      <meta name="og:description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Container>
      <Header title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />

      <Heading title="Experience"/>
      {getExperience(data.experience)}

      <Heading title="Education"/>
      {getExperience(data.education)}

      <Heading title="Contacts"/>
      {getContacts(data.site.siteMetadata)}

      <Footer copyright={data.site.siteMetadata.copyright.name} startyear={data.site.siteMetadata.copyright.startYear} />
    </Container>
  </>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
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
    experience: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/experience/"}}, sort: {fields: frontmatter___to, order: DESC}) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            title
            position
            from(formatString: "MMM YYYY")
            to(formatString: "MMM YYYY")
            at
            url
            note
          }
        }
      }
    }
    education: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/education/"}}, sort: {fields: frontmatter___to, order: DESC}) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            title
            position
            from(formatString: "YYYY")
            to(formatString: "YYYY")
            at
            url
            note
          }
        }
      }
    }
  }
`