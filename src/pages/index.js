import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HeroImage = styled(Img)`
  object-fit: cover;
  height: 500px;
  width: 500px;
`

const LandingText = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  max-width: 30rem;
`
const LandingHeader = styled.h1`
  color: #181414;
  font-size: 42px;
  margin-bottom: 3rem;
`
const LandingMessage = styled.p`
  color: #181414;
  font-size: 24px;
  margin-bottom: 3rem;
`

const MeetingHeader = styled.h2`
  background: #ccedab;
  border-radius: 47px;
  color: #193003;
  font-size: 30px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  text-align: center;
  width: 17rem;
`

const MeetingText = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.3;
  color: #193003;
  a {
    text-decoration: none;
    color: inherit;
    :hover {
      color: #407010;
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
        <MeetingHeader>NEXT MEETING</MeetingHeader>
        <MeetingText>
          Monday, July 1, 8pm
          <br />
          <a href="https://www.google.com/maps/place/St+Dunstan's+Church,+Canterbury/@51.283687,1.0685673,17z/data=!4m5!3m4!1s0x47decbb75bd7c775:0x997b786bae47a78f!8m2!3d51.2836868!4d1.0707559">
            St Dunstan’s Church Hall
          </a>
        </MeetingText>
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
