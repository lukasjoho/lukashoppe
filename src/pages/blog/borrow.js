//dependencies
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

//utils
import Breakpoint from "src/components/00-shared/_breakpoints.js"
//general components
import Container from "../../components/00-shared/Container"
import Col from "../../components/00-shared/Col"

//page specific components
import BlogHead from "../../components/05-blog/BlogHead"
import PremiumLink from "../../components/00-shared/PremiumLink"
import BlogRow from "../../components/05-blog/BlogRow"
import { BlogImage } from "../../components/05-blog/BlogImage"
import SEO from "src/components/00-shared/Seo.js"
//Change from here on downwards
//Use gatsby image component for images - Add inline prop if image inside column
const BorrowPage = () => {
  const { image1, image2, image3 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "borrow/image-borrow-hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      image2: file(relativePath: { eq: "borrow/image-borrow-design.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      image3: file(relativePath: { eq: "borrow/image-borrow-code.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)
  return (
    <>
      <SEO
        title="borrow"
        description="A TechLabs project."
        url="https://lukashoppe.com/blog/borrow"
      />
      <Container small>
        {/* change bloghead  */}
        <BlogHead
          title="borrow"
          tags={["project work", "web development", "UX"]}
        />
        {/* change row inside */}
        <BlogRow>
          <Col small>
            <h2>a techlabs project</h2>
          </Col>
          <Col large>
            <p>
              Borrow is a project I supported as a web development mentor in the{" "}
              <PremiumLink href="https://techlabs.org">TechLabs</PremiumLink>{" "}
              Digital Shaper Program. Part of the program is a project phase
              where participants implement project ideas to apply their newly
              acquired tech skills in a collaborative setting and get the chance
              to participate in a real world product development process.
            </p>
            <BlogImage
              inline
              image={getImage(image1.childImageSharp.gatsbyImageData)}
            />
            <p>
              The web development track aims to give techies (participants of
              the digital shaper program) the right set of tools to design
              websites, shape product experiences and dive into the field of
              dynamic web-application development.
            </p>
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>product vision</h2>
          </Col>
          <Col large>
            <p>
              Part one of the project consisted of a thorough design thinking
              process and a product vision definition. The team ensured to come
              up with a compelling idea statement that laid foundation for
              future work:
            </p>
            <p className="quote">
              "From the beginning of our ideation on, our shared mission was to
              connect people with each other. But we wanted to underlay this
              mission with a deeper purpose. So, we developed the idea of
              creating an app that gives people the opportunity to share their
              stuff in the easiest way possible, so that borrowing and lending
              items becomes way more attractive than buying. We dream of a local
              community that is founded on a sense of community and a
              willingness to share. This approach is part of a circular economy
              and thereby supports Tech4Good."
            </p>
            <small>
              <a href="https://inside-techlabs.medium.com/the-borrow-app-d938d9d2da72">
                https://inside-techlabs.medium.com/the-borrow-app-d938d9d2da72
              </a>
            </small>
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>design it</h2>
          </Col>
          <Col large>
            <p>
              With the idea and the project name 'Borrow' set, the UX Team
              created wireframes in Figma, set up an informational architecture,
              explored color schemes and design concepts and ultimately came up
              with a prototype. Together we iterated over the design and found
              improvements.
            </p>
            <BlogImage
              inline
              image={getImage(image2.childImageSharp.gatsbyImageData)}
            />
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>tech handoff</h2>
          </Col>
          <Col large>
            <p>
              Before giving it to the project's development team we scratched
              the surface of web development by doing some technical writing. We
              translated the designs into pseudo code to make the transition
              into development as smooth as possible.
            </p>
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>the setback</h2>
          </Col>
          <Col large>
            <p>
              Unfortunately, the team encountered communication problems and
              bottlenecks on the developer side. It led to the tough decision of
              not developing the app itself, but reducing the project scope to
              the development of a landing page which features the imaginary
              app. Spinning up landing pages to talk to potential customers,
              track traffic or gain investors attention on a product or idea is
              an essential skill. TechLabs proves to be the perfect environment
              to give it a try.
            </p>
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>macro-structure it</h2>
          </Col>
          <Col large>
            <p>
              After aggreeing on the modified roadmap, we outlined the structure
              of the page and roughly structured it into several sections:
              <ul>
                <li>Hero Section (Emotional - Talk to the customer)</li>
                <li>Feature Showcase(Contextual - Show the key benefits)</li>
                <li>How To Section (Functional - Show how it works)</li>
                <li>Testimonial (Validate - "Others are already using it!")</li>
                <li>Team (Technical - Support product with strong team)</li>
                <li>CTA (CTA: Actionable - "Get started now!")</li>
              </ul>{" "}
              We made sure to get the macro view first. After that the UX design
              team went ahead and created the high fidelity design including
              real product mock ups.
            </p>
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>real code</h2>
          </Col>
          <Col large>
            <p>
              On the development side with a scarce resource of 1,5 developers
              we then took the design and translated it into real code. Using
              GatsbyJS and SCSS we were able to quickly build the architecture
              and style the website. We used netlifys github integration to host
              the static website and modify continuously only by executing git
              push.
            </p>
            <BlogImage
              inline
              image={getImage(image3.childImageSharp.gatsbyImageData)}
            />
            <p>
              The result is up and running at{" "}
              <PremiumLink href="https://getborrow.netlify.app/">
                getborrow.netlify.app
              </PremiumLink>
              . Anika and Lina from the UX team also issued{" "}
              <PremiumLink href="https://inside-techlabs.medium.com/the-borrow-app-d938d9d2da72">
                an article
              </PremiumLink>{" "}
              about the product development phase on medium . Make sure to check
              it out!
            </p>
          </Col>
        </BlogRow>
      </Container>
    </>
  )
}

export default BorrowPage
