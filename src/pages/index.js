import React from "react"
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'reactstrap';

import CardNoticia from "../components/Cards";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Início" />

    <Container>
      <Row>
        { data.allMarkdownRemark.edges.map(post => (
          <Col md="4" xs="12" className="mt-5" key={post.node.id}>
            <CardNoticia
              src={post.node.frontmatter.path}
              srcImagem={post.node.frontmatter.image.childImageSharp.fluid.src}
              title={post.node.frontmatter.title}
            />
          </Col>
        )) }
      </Row>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 20) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            image {
              childImageSharp {
                fluid {
                    src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
