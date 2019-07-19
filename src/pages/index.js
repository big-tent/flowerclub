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
    height: 45vh;
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
`
const LandingMessage = styled.p`
  color: #181414;
  font-size: 1.7vw;
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    font-size: 3vw;
    margin-bottom: 1.5rem;
  }
`

const MeetingHeader = styled.h2`
  background: #ccedab;
  border-radius: 47px;
  color: #193003;
  font-size: 2.1vw;
  margin-bottom: 1rem;
  padding: 0.5rem;
  text-align: center;
  max-width: 17rem;
  @media (max-width: 900px) {
    font-size: 3.5vw;
  }
`

const MeetingTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    flex-direction: row;
  }
`

const MeetingText = styled.h4`
  color: #193003;
  font-style: normal;
  font-weight: 700;
  font-size: 2.1vw;
  line-height: 1.3;
  margin-right: 2rem;
  a {
    color: inherit;
    text-decoration: none;
    :hover {
      color: #407010;
    }
  }
  @media (max-width: 900px) {
    font-size: 3.2vw;
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
        <MeetingHeader>NEXT MEETING</MeetingHeader>
        <MeetingTextHolder>
          <MeetingText>Monday, July 1, 8pm</MeetingText>
          <MeetingText>
            <a href="https://www.google.com/maps/place/St+Dunstan's+Church,+Canterbury/@51.283687,1.0685673,17z/data=!4m5!3m4!1s0x47decbb75bd7c775:0x997b786bae47a78f!8m2!3d51.2836868!4d1.0707559">
              St Dunstan’s Church Hall
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
          src
        }
      }
      caption
    }
  }
`
