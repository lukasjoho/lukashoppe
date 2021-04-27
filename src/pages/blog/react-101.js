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
import Highlight from "react-highlight"
import "highlight.js/styles/atelier-lakeside-dark.css"
//Change from here on downwards
//Use gatsby image component for images - Add inline prop if image inside column
const BorrowPage = () => {
  const { imageTeam, imageInstagram } = useStaticQuery(graphql`
    query {
      imageTeam: file(relativePath: { eq: "image-techlabs-team.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageInstagram: file(
        relativePath: { eq: "image-techlabs-instagram.jpg" }
      ) {
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
    <Container small>
      {/* change bloghead  */}
      <BlogHead
        title="react 101"
        tags={["frontend development", "javascript", "concepts"]}
      />
      {/* change row inside */}
      <BlogRow>
        <Col small>
          <h2>react at techlabs</h2>
        </Col>
        <Col large>
          <p>
            Last semester I was a web development mentor for the digital shaper
            programm of{" "}
            <PremiumLink href="https://techlabs.org">TechLabs.</PremiumLink> The
            program equips young people with state-of-the-art tech skills in the
            fields of data science, artificial intelligence, web development and
            ux design.
          </p>
          <p>
            Groups of 4 - 6 students get assigned a mentor who helps them
            navigating through the learning journey of 8 weeks online learning +
            8 weeks project phase.
          </p>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col>
          <BlogImage
            image={getImage(imageTeam.childImageSharp.gatsbyImageData)}
          />
        </Col>
        <Col>
          <BlogImage
            image={getImage(imageInstagram.childImageSharp.gatsbyImageData)}
          />
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small>
          <h2>the team</h2>
        </Col>
        <Col large>
          <p>
            My team of 6 ux design and web development "techies" was super
            motivated to learn the fundamentals of frontend web-development and
            therefore quickly acquired the necessary HTML and CSS skills to then
            get started with javascript and react.
          </p>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small>
          <h2>the gameplan</h2>
        </Col>
        <Col large>
          <p>
            My roadmap for getting the techies familiar with core concepts and
            architectural structures of react looked the following:
            <ul>
              <li>
                <strong>Folder structure: </strong> Learn how to set up and
                structure a react project into components, utils, assets and
                configuration files.
              </li>
              <li>
                <strong>Component creation: </strong>
                Learn how to create the building blocks of a react application
                with functional components.
              </li>
              <li>
                <strong>React state: </strong>
                Understand component level state and get up and running with the
                useState hook.
              </li>
              <li>
                <strong>Controlled components:</strong>
                Understand the difference between controlled and uncontrolled
                components.
              </li>
              <li>
                <strong>Lift state: </strong>
                Lift and pass state across components to share state throughout
                the app.
              </li>
              <li>
                <strong>Local storage:</strong>
                Learn how to utilize browsers local storage to add rapid
                prototyping techniques to the project.
              </li>
            </ul>
          </p>
          <p>
            Let's dive in, to see what we learned together over the course of 8
            weeks:
          </p>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small>
          <h2>Folder structure</h2>
        </Col>
        <Col large>
          <p>
            Structuring my react projects has been something I neglected for a
            long time as I was working mainly alone on my projects. Only with
            increasing collaborative project work I understood the importance of
            clean and well-structured react folder architecture for project
            maintenance.
          </p>
          <p>
            Together we learned, that every react-project has a{" "}
            <strong>root</strong> a <strong>src</strong> and from there on a
            folder structure that is highly unopinionated. <br />
            Though, I shared what I think every react-project should be
            structured at its very core, which namely are following folders:
          </p>
          <p>
            <strong>Components:</strong> This folder holds all our functional
            components. We could also subdivide this folder further into
            stateful and stateless components.
          </p>
          <p>
            <strong>Assets:</strong> This folder contains the tangible assets we
            use in our application such as images, icons and json data. (I find
            that for rapid prototyping its always good to have quick access to
            some json mock data)
          </p>
          <p>
            <strong>Utils:</strong> This folder holds all our utitities and
            helper functions. These are little code snippets that help us
            throughout our application.
          </p>
          <small>root</small>
          <Highlight language="javascript">
            {`- src
--- assets
----- images
----- icons
----- json
--- components
----- header
----- footer
----- button
--- utils
--- pages
`}
          </Highlight>
          <p>
            I was very happy that the rather basic session around structuring a
            react application already sparked excitment in the team. It helped
            the team to get up and running with the project and hence, empowered
            and motiviated them to execute on the project even more.
          </p>
          <p className="quote">
            "Overwhelmed by our fast progress we presented our results to Lukas,
            our mentor. Lukas was able to give us a lot of feedback and helped
            us with the folder structure of the react app and with making our
            code cleaner. He also introduced us to “live share” for VS code, so
            that we were able to work together in one coding editor."
          </p>
          <small>
            <a href="https://inside-techlabs.medium.com/clubme-the-platform-that-brings-together-people-with-a-common-interest-d5b1d5791a80">
              https://inside-techlabs.medium.com/clubme-the-platform-that-brings-together-people-with-a-common-interest-d5b1d5791a80
            </a>
          </small>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small>
          <h2>component creation</h2>
        </Col>
        <Col large>
          <p>
            Components are the building blocks of any react application. In the
            TechLabs track we looked at how to create functional components,
            split them into smaller ones and reuse them throughout the
            application. We learned that each react component is a function that
            accepts input in the form of objects passed as props and that each
            function returns HTML.
          </p>
          <small>Registration.js</small>
          <Highlight language="javascript">
            {`const Registration = ({data}) => {
const accountState = data.accountState;
  return(
    <h1>Registration page</h1>
    ...
  )
}
export default Registration;`}
          </Highlight>
          <small>some other component</small>
          <Highlight language="javascript">
            {`...
<Route path='/registrieren'>
  <Registration />
</Route>
...`}
          </Highlight>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small>
          <h2>react state</h2>
        </Col>
        <Col large>
          <p>
            Our next session was fully dedicated to addition of state to our
            components and the understanding of how stateful logic makes and
            breakes a react application. <br />
            We used the useState hook and learned that it is no more than a
            value pair that returns a state variable as well as a function which
            updates our state whenever we call it. The component subsequently
            re-renders everytime we mutate state.
          </p>
          <Highlight language="javascript">
            {`...
const [show, setShow] = useState(false);

handleShow = () => {
  setShow(!show)
}

return(
  <>
    ...
    {show && <Modal/>}
    ...
    <button onClick={handleShow}>See more</button>
    ...
  </>
)
...`}
          </Highlight>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small>
          <h2>Controlled components</h2>
        </Col>
        <Col large>
          <p>
            By default HTML form elements such as text inputs, checkboxes and
            radio buttons manage their own internal state. In other words: We
            can directly type in anything we want into our input fields without
            giving our app specific instructions on what to do with the value of
            the element we are targeting. Its a traditional HTML behaviour and
            commonly referred to as uncontrolled components.
          </p>
          <small>uncontrolled component</small>
          <Highlight language="javascript">
            {`...
return(
  <>
    ...
    <input
      type='text'
      name='name'
    />
    ...
  </>
)
...`}
          </Highlight>
          <p>
            Instead of letting the DOM manage the state of its nodes we learned
            how to control our UI component with its very own state. We did this
            by utilising reacts props and callbacks such as onChange. The
            onChange event handler fires a function handleChange which then
            handles the state change. We now have full control over our
            components state.
          </p>
          <small>controlled component</small>
          <Highlight language="javascript">
            {`...
const [value, setValue] = useState({
  name: '',
  description: '',
  mail: '',
  adress: '',
});

const handleChange = (e) => {
  setValue({ ...value, [e.target.name]: e.target.value });
};

...

return(
  <>
    ...
    <input
      type='text'
      name='name'
      value={value.name}
      onChange={handleChange}
    />
    ...
  </>
)
...`}
          </Highlight>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small>
          <h2>Lifting state up</h2>
        </Col>
        <Col large>
          <p>
            With further development of our little web-application the group
            came across the issue of not being able to use state from one
            component in another component. It was time to lift state up!
          </p>
          <p>
            Sharing stateful logic horizontally across the component tree can be
            done by removing local state from child components and letting its
            common parent component take care of it. The parent component can
            then pass the state down to its children via props. As the child
            component lost control over its local state accordingly, we also
            pass down a handleChange function that gets called within the child
            but updates state in the parent.
          </p>
          <small>parent component</small>
          <Highlight language="javascript">
            {`...
const [value, setValue] = useState({
  name: '',
  description: '',
  mail: '',
  adress: '',
});
const handleChange = (e) => {
  setValue({ ...value, [e.target.name]: e.target.value });
};

return(
  <Form
    value={value}
    handleChange={handleChange}
  />
)
...`}
          </Highlight>
          <small>child component</small>
          <Highlight language="javascript">
            {`...
const Form = ({ value, handleChange }) => {
  return(
    <>
      ...
        <input
        type='text'
        name='name'
        value={value.name}
        onChange={handleChange}
        />
      ...
    </>
  )
}
...`}
          </Highlight>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small>
          <h2>Local storage</h2>
        </Col>
        <Col large>
          <p>
            After I heard of local storage as a react newbie for the first time
            I thought this would be super far away. How could my application be
            able to access my browser and then store data in there?
          </p>
          <p>
            Turns out that this is actually a pretty simple two-step concept of
            <ul>
              <li>
                saving data via <strong>localStorage.setItem()</strong>
              </li>
              <li>
                and then retrieving (getting) it via{" "}
                <strong>localStorage.getItem()</strong>
              </li>
            </ul>
            I thought it would be super cool to teach localStorage in a TechLabs
            project as it allows the team to build more sophisticated prototypes
            in a quick and easy way.
          </p>
          <p>
            Our goal was to use form data in another component. With already
            having acquired the skills of using, lifting and controlling state,
            the group had no problems setting up the form itself and storing its
            input as an object in the forms state.{" "}
          </p>
          <p>
            We then learned to call the setItem method on a form submit. Because
            the web storage API only stores key value pairs as strings we also
            had to stringify the form object.
          </p>
          <small>form component</small>
          <Highlight language="javascript">
            {`...
const [value, setValue] = useState({
  name: '',
  description: '',
  mail: '',
  adress: '',
});

const handleSubmit = () => {
  localStorage.setItem('value', JSON.stringify(value));
};

return(
  <>
    ...
    <button onClick={handleSubmit}>Register</button>
    ...
  </>
)
...`}
          </Highlight>
          <p>
            In the component where we wanted to have the data, we used the{" "}
            <strong>useEffect</strong> hook. It helps us to invoke the fetching
            of our storage items on inital page render and fetch our stored
            items by calling getItem. We additionally had to parse the string to
            convert it back into a javascript object.{" "}
          </p>
          <small>other component</small>
          <Highlight language="javascript">
            {`...
const [value, setValue] = useState(null);

useEffect(() => {
  setValue(JSON.parse(localStorage.getItem('value')));
}, []);

return(
  <>
    ...
    <h1>{value && value.name}</h1>
    ...
  </>
)
...`}
          </Highlight>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col small>
          <h2>conclusion</h2>
        </Col>
        <Col large>
          <p>
            Getting the basics right early on is important to build robust
            things with react. While there are many more practices to master, I
            personally think that these 6 concepts provide a good starting point
            to understand what react is capable of. In my opinion react has a
            smooth learning curve in general and can be a soft gateway into the
            world of javascript.
          </p>
        </Col>
      </BlogRow>
    </Container>
  )
}

export default BorrowPage
