import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import Chevron from "../components/svg/chevron-svg"

const EventListingItem = styled.li`
  border-bottom: 2px solid #cccccc;
  list-style: none;
  padding: 2rem 0;
  margin: 0;
  @media (max-width: 600px) {
    padding: 3.5vh 0;
  }
`

const EventHolder = styled.article`
  display: flex;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const DateHolder = styled.div`
  display: flex;
  margin-right: 1rem;
  align-items: center;
`

const Date = styled.h2`
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: -0.01em;
  margin-left: 0.75rem;
  color: #2b4e09;
  width: 20rem;
  @media (max-width: 900px) {
    font-size: 30px;
    width: auto;
  }
  @media (max-width: 600px) {
    font-size: 6.5vw;
  }
`

const EventWords = styled.div``

const EventTitle = styled.h2`
  color: #333333;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    font-size: 30px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 600px) {
    font-size: 6.5vw;
    margin-top: 0;
  }
`

const EventCopy = styled.div`
  h1,
  h2,
  h3 {
    color: #a6a6a6;
    font-size: 30px;
    margin-bottom: 0.5rem;
    @media (max-width: 600px) {
      font-size: 5.6vw;
    }
  }
  p {
    color: #333333;
  }
`

const EventListing = ({ node }) => (
  <EventListingItem>
    <EventHolder>
      <DateHolder>
        <Chevron />
        <Date>{node.date}</Date>
      </DateHolder>
      <EventWords>
        <EventTitle>{node.title}</EventTitle>
        <EventCopy
          dangerouslySetInnerHTML={{
            __html: node.content.childMarkdownRemark.html,
          }}
        />
      </EventWords>
    </EventHolder>
  </EventListingItem>
)

const EventsPage = ({ data }) => (
  <Layout>
    <SEO title="Events" />
    <PageHeader pagetitle="Calendar of events" />
    <ul>
      {data.allContentfulEvent.edges.map((edge, i) => (
        <EventListing node={edge.node} key={i} />
      ))}
    </ul>
  </Layout>
)

export default EventsPage

export const eventsQuery = graphql`
  query eventsQuery {
    allContentfulEvent(sort: { fields: date }) {
      edges {
        node {
          date(formatString: "DD MMMM, YYYY")
          title
          content {
            childMarkdownRemark {
              html
            }
          }
          slug
        }
      }
    }
  }
`
