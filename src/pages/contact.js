import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"

import phone from "../images/phone-icon-grey.svg"

const ContactsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  padding: 2rem 0;
`

const ContactHolder = styled.div`
  background: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
`

const NameHolder = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
`

const MugShot = styled.div`
  background: red;
  border-radius: 30px;
  height: inherit;
  margin-right: 0.5rem;
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

const PhoneHolder = styled.div`
  align-items: center;
  border-bottom: 1px solid #cccccc;
  display: flex;
  padding-bottom: 0.5rem;
`

const PhoneIcon = styled.img`
  height: 28px;
  margin-right: 0.5rem;
`

const Phone = styled.p`
  font-size: 36px;
  color: #808080;
`

const Email = styled.p`
  color: #808080;
  font-weight: bold;
  font-size: 18px;
  padding-top: 0.5rem;
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Canterbury`, `Flower`, `Club`]} />
    <PageHeader pagetitle="Contact us" />
    <ContactsGrid>
      <ContactHolder>
        <NameHolder>
          <MugShot />
          <NameTitleHolder>
            <Name>Diana Cooper</Name>
            <Title>Treasurer</Title>
          </NameTitleHolder>
        </NameHolder>
        <PhoneHolder>
          <PhoneIcon src={phone} alt="phone icon" />
          <Phone>07886 453 837</Phone>
        </PhoneHolder>
        <Email>diana@canterburyflowerclub.com</Email>
      </ContactHolder>
      <ContactHolder>
        <h3>Diana Cooper</h3>
        <h6>Treasurer</h6>
        <p>07886 453 837</p>
        <p>diana@canterburyflowerclub.com</p>
      </ContactHolder>
      <ContactHolder>
        <h3>Diana Cooper</h3>
        <h6>Treasurer</h6>
        <p>07886 453 837</p>
        <p>diana@canterburyflowerclub.com</p>
      </ContactHolder>
    </ContactsGrid>
  </Layout>
)

export default ContactPage
