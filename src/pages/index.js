//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"
import Row from "../components/00-shared/Row"
//page specific components
import FullPage from "../components/00-shared/FullPage"
import Image from "../components/01-home/Image"
import Textblock from "../components/00-shared/Textblock"

const IndexPage = () => (
  <>
    <FullPage>
      <Container small auto>
        <Row>
          <Image />
          <Textblock />
        </Row>
      </Container>
    </FullPage>
  </>
)

export default IndexPage
