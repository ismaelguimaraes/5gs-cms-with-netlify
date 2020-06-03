import React from "react"
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { createGlobalStyle } from 'styled-components';

import CardNoticia from "../components/Cards";
import Banner from '../components/Banner';
import Layout from "../components/layout";
import SEO from "../components/seo";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #6ACC85;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <GlobalStyle />
    <SEO title="Início" />

    <Container>
      <Row>
        <Col md="12" xs="12">
          <Banner />
        </Col>
        { data.allMarkdownRemark.edges.map(post => (
          <Col md="4" xs="12" className="mt-5" key={post.node.id}>
            <CardNoticia
              src={post.node.frontmatter.path}
              srcImagem={post.node.frontmatter.image.childImageSharp.fluid.src}
              title={post.node.frontmatter.title}
              resume={post.node.frontmatter.resume}
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
            resume
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
