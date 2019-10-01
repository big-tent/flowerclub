import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Modal from "react-modal"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

const EventGalleryGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 400px;
  grid-gap: 20px;
  padding: 2rem 0;
`

const EventGalleryListingItem = styled.li`
  list-style: none;
`

const EventImage = styled(Img)`
  height: 90%;
`

const EventImageCaption = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-top: 5px;
`

// const GalleryTemplate = ({ data, pageContext }) => {
//   const { event } = pageContext
//   return (
//     <Layout>
//       <SEO
//         title="Gallery"
//         keywords={[`Canterbury`, `Flower`, `Club`, `Gallery`, `Pictures`]}
//       />
//       <PageHeader pagetitle={event} />
//       <EventGalleryGrid>
//         {data.allContentfulImage.edges.map((edge, i) => (
//           <EventGalleryListingItem key={i}>
//             <EventImage
//               fluid={edge.node.image.fluid}
//               alt={edge.node.image.description}
//             />
//             <EventImageCaption>{edge.node.image.description}</EventImageCaption>
//           </EventGalleryListingItem>
//         ))}
//       </EventGalleryGrid>
//     </Layout>
//   )
// }

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#___gatsby")

class GalleryTemplateClass extends React.Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
    }
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    this.subtitle.style.color = "#f00"
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Gallery"
          keywords={[`Canterbury`, `Flower`, `Club`, `Gallery`, `Pictures`]}
        />
        <PageHeader pagetitle="Test" />
        <EventGalleryGrid>
          {this.props.data.allContentfulImage.edges.map((edge, i) => (
            <EventGalleryListingItem key={i} onClick={this.openModal}>
              <EventImage
                fluid={edge.node.image.fluid}
                alt={edge.node.image.description}
              />
              <EventImageCaption>
                {edge.node.image.description}
              </EventImageCaption>
            </EventGalleryListingItem>
          ))}
        </EventGalleryGrid>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </Layout>
    )
  }
}

export default GalleryTemplateClass

export const query = graphql`
  query galleryTemplateQuery($event: String!) {
    allContentfulImage(filter: { event: { eq: $event } }) {
      edges {
        node {
          image {
            description
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          slug
          event
        }
      }
    }
  }
`
