import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const HeroImage = styled(Img)`
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.5);
  object-fit: cover;
  max-height: 64vh;
  min-width: 35vw;
  @media (max-width: 900px) {
    align-self: center;
    height: 40vh;
    width: 55vw;
  }
  @media (max-width: 600px) {
    height: 30vh;
    width: 55vw;
  }
`

const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7vw;
  @media (max-width: 900px) {
    margin-top: 2rem;
    margin-left: 0;
  }
`
const LandingHeader = styled.h1`
  color: #181414;
  font-size: 2.8vw;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    font-size: 4.5vw;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 6vw;
  }
`
const LandingMessage = styled.p`
  color: #181414;
  font-size: 1.7vw;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    font-size: 3vw;
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 4vw;
  }
`

const MeetingTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    flex-direction: row;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const MeetingText = styled(LandingMessage)`
  a {
    color: #333333;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.5s;
    :hover {
      color: #578f1e;
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <IndexWrapper>
      <HeroImage
        fluid={data.contentfulHeroImage.image.fluid}
        alt={data.contentfulHeroImage.caption}
      />
      <LandingText>
        <LandingHeader> Welcome to Canterbury Flower Club</LandingHeader>
        <LandingMessage>
          We have a varied programme for all abilities. We hold demonstrations,
          workshops and competitions, giving you the opportunity to increase
          your skills and have fun
        </LandingMessage>
        <MeetingTextHolder>
          <MeetingText>
            We meet on the third Monday of every month at the&nbsp;
            <a href="http://www.arcahall.co.uk/location/">
              Ashford Road Community Association Hall
            </a>
          </MeetingText>
        </MeetingTextHolder>
      </LandingText>
    </IndexWrapper>
  </Layout>
)

export default IndexPage

export const heroQuery = graphql`
  query MyQuery {
    contentfulHeroImage {
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      caption
    }
  }
`
