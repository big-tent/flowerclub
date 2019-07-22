import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventsTitle = styled.h1`
  border-bottom: 2px solid #cccccc;
  font-size: 48px;
  margin: 0;
  padding-bottom: 2rem;
`

const EventListingItem = styled.li`
  border-bottom: 2px solid #cccccc;
  list-style: none;
  padding: 2rem 0;
  margin: 0;
`

const EventHolder = styled.article`
  display: flex;
  align-items: flex-start;
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
`

const EventWords = styled.div``

const EventTitle = styled.h2`
  color: #333333;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 1rem;
`

const EventCopy = styled.div`
  h1,
  h2,
  h3 {
    color: #808080;
    font-size: 30px;
    margin-bottom: 0.5rem;
  }
  p {
    color: #333333;
  }
`

const EventListing = ({ node }) => (
  <EventListingItem>
    <EventHolder>
      <DateHolder>
        <svg
          width="28"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.585 43.17C33.5061 43.17 43.17 33.5061 43.17 21.585C43.17 9.66393 33.5061 0 21.585 0C9.66393 0 0 9.66393 0 21.585C0 33.5061 9.66393 43.17 21.585 43.17Z"
            fill="#578F1E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.8999 14.4772C17.057 13.6343 17.057 12.2676 17.8999 11.4247C18.7429 10.5817 20.1096 10.5817 20.9525 11.4247L29.5865 20.0587C30.4295 20.9016 30.4295 22.2683 29.5865 23.1112L20.9525 31.7452C20.1096 32.5882 18.7429 32.5882 17.8999 31.7452C17.057 30.9023 17.057 29.5356 17.8999 28.6927L25.0077 21.5849L17.8999 14.4772Z"
            fill="#EBF9DC"
          />
        </svg>
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
    <EventsTitle>Upcoming events</EventsTitle>
    <ul>
      {data.allContentfulEvent.edges.map(edge => (
        <EventListing node={edge.node} />
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
