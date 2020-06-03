import React from "react"
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby'

import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Início" />

    <Container>
      <Row>
        { data.allMarkdownRemark.edges.map(post => (
          <Col md="4" xs="12" className="mt-5" key={post.node.id}>
            <Card>
              <CardImg top width="100%" src={post.node.frontmatter.image.childImageSharp.fluid.src} alt={post.node.frontmatter.title} />
              <CardBody>
                <CardTitle>{post.node.frontmatter.title}</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Link to={post.node.frontmatter.path}>Button</Link>
              </CardBody>
            </Card>
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
