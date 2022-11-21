//dependencies
import * as React from "react"

//general components

import Container from "../components/00-shared/Container"

//page specific components

import Tagline from "../components/00-shared/Tagline"

import ContentRow from "../components/00-shared/ContentRow"
import Image1 from "../images/product/image-biersafe.jpg"
import Image2 from "../images/product/image-nikolas.jpg"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import SEO from "src/components/00-shared/Seo.js"
const ProductPage = () => {
  const {
    imageBonvelo,
    imageBiersafe,
    imageNikolas,
    imageExcyted,
    imageSustragil,
    imageNewschool,
    imageLh,
    imageBorrow,
    imageTerraviz,
    imageSiemens,
    imageScenariomodelling,
    imageJobfinder,
    imageFreddy,
    imageLancie,
  } = useStaticQuery(graphql`
    query {
      imageFreddy: file(relativePath: { eq: "product/image-freddybock.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageLancie: file(relativePath: { eq: "product/image-lancie.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageBonvelo: file(relativePath: { eq: "product/image-bonvelo.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageSustragil: file(
        relativePath: { eq: "product/image-sustragil.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageNikolas: file(relativePath: { eq: "product/image-nikolas.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageBiersafe: file(relativePath: { eq: "product/image-biersafe.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageExcyted: file(relativePath: { eq: "product/image-excyted.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageNewschool: file(relativePath: { eq: "product/image-school.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageLh: file(relativePath: { eq: "product/image-lh.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageBorrow: file(relativePath: { eq: "product/image-borrow.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageTerraviz: file(relativePath: { eq: "product/image-terraviz.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageSiemens: file(relativePath: { eq: "product/image-siemens.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageScenariomodelling: file(
        relativePath: { eq: "product/image-scenariomodelling.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
      imageJobfinder: file(
        relativePath: { eq: "product/image-jobfinder.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
            quality: 90
          )
        }
      }
    }
  `)
  return (
    <>
      <SEO
        title="Product"
        description="See what I develop and design."
        url="https://lukashoppe.com/product"
      />
      <Container>
        <Tagline
          text="passionate about developing digital products.
i believe that the art of building is the art of listening to your customer."
        />
        <ContentRow
          subtitle="fullstack creator platform"
          title="lancie"
          text="On a mission to make creator-brand relationships more productive, Lancie brings together brands and video creators in one web platform where they can find each other, get in contact and benefit from the most efficient way to make their production happen. I started this side-project, to refine my understanding of web architecture by building a platform from scratch with state-of-the-art web technologies. I here use Next, NestJS, Typescript, PrismaDB, Supabase, Cloudinary, ChakraUI, Hygraph, Vercel and AWS S3. "
          href="https://lancie.io"
          button="visit lancie"
          image={getImage(imageLancie.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="personal website"
          title="a 3h project"
          text="While in Portugal, I was invited to a friends birthday party in the evening. On a rainy morning of the very same day I challenged myself to create a website for him. All I had was 3 hours. Designing, developing, deploying, buying and connecting a domain: I made it on the second. Build with NextJS, Google Map React and TailwindCSS."
          href="https://freddybock.com"
          button="visit freddy's website"
          image={getImage(imageFreddy.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="data science project"
          title="terraViz"
          text="Together with my data science and web development team from the TechLabs data science track, we developed a web application that makes climate change tangible. An interactive map visualizes the change of temprature of the last century across the globe."
          href="https://github.com/TechLabs-Berlin/st21-terraViz"
          button="see github project"
          image={getImage(imageTerraviz.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="case study"
          title="siemens"
          text="A case study about our work at excyted for Siemens building an internal AI website. It explains how we refactored outdated web architecture into lightning fast loading times, more consistend design and a tailor-made content management system with markdown."
          href="https://excyted.io/en/case-studies/siemens-ai"
          button="see case study"
          image={getImage(imageSiemens.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="chartjs and react"
          title="Scenario Modelling"
          text="In this little project I built a dynamic MVP of a financial modelling feature. Based on user input, financial scenarios are displayed to the user in a visual chart."
          href="https://scenariofeature.netlify.app/scenarios/model-1"
          button="see feature"
          image={getImage(
            imageScenariomodelling.childImageSharp.gatsbyImageData
          )}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="web application design & development"
          title="jobfinder"
          text="This case study explains how we at excyted designed and built a web application which offers high school students insights into various jobs in the form of videos. From challenge across discovery and ui design to development and deployment we give a brief explanation for our decisions."
          href="https://excyted.io/en/case-studies/job-finder"
          button="see feature"
          image={getImage(imageJobfinder.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="e-commerce"
          title="bikeshop design concept"
          text="As a weekend side project I redesigned the product page of bonvelo's online shop. I wanted to put my prototyping capabilities to the test. After redesigning the page for 4h with Figma I coded a high-fidelity prototype another 4 hours with NextJS. I spent the last 6h of my weekend to create a video where I explain my thought process behind the design in 100 seconds."
          link="/blog/prototyping"
          button="see more"
          image={getImage(imageBonvelo.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="e-commerce"
          title="biersafe"
          text="This is an ecommerce shopify design, that I crafted for a beer accessory manufacturer from Germany together with the technology studio excyted. The shop uses the shopify storefront api as the shop backend and GatsbyJS on the frontend. The branding was created together with the agency StupidAndSimple"
          href="https://aboutnik.com/"
          button="visit aboutnik"
          image={getImage(imageBiersafe.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="personal crypto website"
          title="about nik"
          text="This is a personal crypto website I created for my friend Nik. As Nik is a crypto enthusiast we went for a site that features his business endeavours, his favourite books, papers and his very own scientific research.
I then coded the site with the javascript framework NextJS."
          href="https://aboutnik.com/"
          button="visit aboutnik"
          image={getImage(imageNikolas.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="school website"
          title="new school"
          text="I developed this school website together with the technology studio excyted. We used GatsbyJS on the frontend and Prismic as content management system on the backend. This gives the school the opportunity to change the websites content and toggle components whenever they like."
          href="https://new-school.netlify.app/"
          button="visit newschool"
          image={getImage(imageNewschool.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="startup landing page"
          title="sustragil"
          text="I designed and developed this landing page for a startup in the chemical supply industry. I designed the one-pager in Figma and developed it with GatsbyJS. The site features a custom tailored hero animation which I created in After Effects. "
          href="https://sustragil.com/"
          button="visit sustragil"
          image={getImage(imageSustragil.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="agency website"
          title="excyted"
          text="I designed this website for the web agency excyted.
I chose a dark theme with thin lines, dots and glow, a bold font poppins and an edgy look to create a digital technology mood through out the site.
I then also developed the site from scratch with GatsbyJS and Contentful."
          href="https://excyted.io/"
          button="visit excyted"
          image={getImage(imageExcyted.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="my very own personal website"
          title="lukas hoppe"
          text="My own website is a reminder to myself and the legible and harmonious use of white-space to create an effective and easy-to-use website. I designed it with Figma and developed it with GatsbyJS. On top of that I used to Contentful to manage my content. I also used framer-motion to include smooth animations."
          image={getImage(imageLh.childImageSharp.gatsbyImageData)}
          reverseMobile
          inside
        />
        <ContentRow
          subtitle="a techlabs project"
          title="borrow app"
          text="As a web development mentor I supported a group of learners in the TechLabs coding program in designing and developing their first app and landing page."
          image={getImage(imageBorrow.childImageSharp.gatsbyImageData)}
          link="/blog/borrow"
          button="see more"
          reverseMobile
          inside
        />
      </Container>
    </>
  )
}

export default ProductPage
