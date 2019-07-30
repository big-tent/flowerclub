import React from "react"
import styled from "styled-components"

const PageTitle = styled.h1`
  border-bottom: 2px solid #cccccc;
  font-size: 48px;
  margin: 0;
  padding-bottom: 2rem;
  @media (max-width: 600px) {
    font-size: 8.5vw;
  }
`

const PageHeader = props => <PageTitle>{props.pagetitle}</PageTitle>

export default PageHeader
