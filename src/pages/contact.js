import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

import phone from "../images/phone-icon-grey.svg"

const ContactsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  padding: 2rem 0;
`

const ContactHolder = styled.li`
  background: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  list-style: none;
`

const NameHolder = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
`

const MugShot = styled(Img)`
  background: red;
  border-radius: 30px;
  height: 60px;
  margin-right: 1rem;
  object-fit: cover;
  width: 60px;
`

const NameTitleHolder = styled.div``

const Name = styled.h3`
  color: #161616;
  font-size: 30px;
`

const Title = styled.h6`
  font-size: 24px;
  font-weight: normal;
  color: #161616;
`

const PhoneHolder = styled.a`
  align-items: center;
  border-bottom: 1px solid #cccccc;
  display: flex;
  padding-bottom: 0.5rem;
  text-decoration: none;
`

const PhoneIcon = styled.img`
  height: 28px;
  margin-right: 1rem;
`

const Phone = styled.p`
  font-size: 36px;
  color: #808080;
  :hover {
    font-weight: 600;
    cursor: pointer;
  }
`

const Email = styled.a`
  color: #808080;
  font-weight: 700;
  font-size: 18px;
  padding-top: 0.5rem;
  text-decoration: none;
  :hover {
    color: #4d4d4d;
    cursor: pointer;
  }
`

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <PageHeader pagetitle="Contact us" />
    <ContactsGrid>
      {data.allContentfulContactDetails.edges.map((edge, i) => (
        <ContactHolder key={i}>
          <NameHolder>
            <MugShot fluid={edge.node.picture.fluid} />
            <NameTitleHolder>
              <Name>{edge.node.name}</Name>
              <Title>{edge.node.title}</Title>
            </NameTitleHolder>
          </NameHolder>
          <PhoneHolder href={"tel:" + edge.node.phoneNumber}>
            <PhoneIcon src={phone} alt="phone icon" />
            <Phone>{edge.node.phoneNumber}</Phone>
          </PhoneHolder>
          <Email href={"mailto:" + edge.node.email}>{edge.node.email}</Email>
        </ContactHolder>
      ))}
    </ContactsGrid>
  </Layout>
)

export default ContactPage

export const contactQuery = graphql`
  query contactQuery {
    allContentfulContactDetails {
      edges {
        node {
          name
          title
          phoneNumber
          email
          picture {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
