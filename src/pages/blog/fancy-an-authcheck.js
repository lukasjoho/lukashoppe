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
import SEO from "src/components/00-shared/Seo.js"
//Change from here on downwards
//Use gatsby image component for images - Add inline prop if image inside column
const BorrowPage = () => {
  const { imageAuth1, imageAuth2, imageAuth3 } = useStaticQuery(graphql`
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
      imageAuth1: file(relativePath: { eq: "image-auth-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageAuth2: file(relativePath: { eq: "image-auth-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      imageAuth3: file(relativePath: { eq: "image-auth-3.jpg" }) {
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
    <>
      <SEO
        title="Fancy an authCheck?"
        description="In this post, I show how I manage user authenticated actions on the clientside."
        url="https://lukashoppe.com/blog/fancy-an-authcheck"
      />
      <Container small>
        {/* change bloghead  */}
        <BlogHead
          title="fancy an authCheck?"
          tags={["frontend development", "user authentication", "wrappers"]}
        />
        {/* change row inside */}
        <BlogRow>
          <Col small>
            <h2>challenge</h2>
          </Col>
          <Col large>
            <p>
              While building a full stack web application where users should be
              able to trigger various authenticated actions, I not only wanted
              to protect the API routes on the backend, but also trigger
              client-side UI based on the users authentication side, i.e.
              whether they have an active session or not.
            </p>
            <p>
              An example would be a user attempting to message another user.
              They should only be able to do so once signed in, so that the
              application can identify the user. There are usually countless
              other occasions in web applications where users should only be
              able to trigger a certain action once they have an active session.
            </p>
            <p>
              To be clear: We want to protect the action on the backend anyways.
              However, the frontend should render UI that guides the user
              towards their action in case they are not logged in. In this case
              this is the triggering of a login modal.
            </p>
          </Col>
        </BlogRow>
        <BlogRow>
          <Col>
            <BlogImage
              image={getImage(imageAuth1.childImageSharp.gatsbyImageData)}
            />
          </Col>
          <Col>
            <BlogImage
              image={getImage(imageAuth2.childImageSharp.gatsbyImageData)}
            />
          </Col>
          <Col>
            <BlogImage
              image={getImage(imageAuth3.childImageSharp.gatsbyImageData)}
            />
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>planning the components</h2>
          </Col>
          <Col large>
            <p>
              Hence, I wanted to build this logic out in the most reusable way.
              I figured I would need 2 core components to do so:
            </p>
            <p>
              <strong>Global Login Modal:</strong> My login modal should be
              controlled on a global app level instead of managing itself on
              component-based state.
            </p>
            <p>
              <strong>AuthChecker:</strong> I need a component that wraps any
              existing component in the app and checks the users authentication
              state before firing the default onClick action of the element.
            </p>
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>global login modal</h2>
          </Col>
          <Col large>
            <p>
              To manage the login modal globally, I first created a Global
              Context that holds the value for an isOpen boolean and an onOpen
              and onClose function to toggle the modal.
            </p>
            <small>GlobalModalContext.ts</small>

            <Highlight language="javascript">
              {`type GlobalModalContextType = {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
};

const initialState: GlobalModalContextType = {
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
};

export const GlobalModalContext = createContext({ ...initialState });

export const useGlobalModalContext = () => {
  const value = useContext(GlobalModalContext);
  return value;
};
`}
            </Highlight>
            <p>
              I then created a Global Modal component that consumes the context.
              It renders all elements that my global login modal needs and
              passes the content of the modal from a separate component.
            </p>
            <small>GlobalModal.tsx</small>
            <Highlight language="javascript">
              {`const GlobalModalComponent = () => {
  const { isOpen, onClose } = useGlobalModalContext();
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size='xl'>
      <ModalOverlay />
      <ModalContent>
        <LoginModal onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};
`}
            </Highlight>
            <p>
              This way, all my login component needs to care about, is its own
              functionality. It does not need to anything about modal behaviour.
              In fact the component itself doesnt know about its existence as a
              modal.
            </p>
            <small>LoginModal.tsx</small>

            <Highlight language="javascript">
              {`const LoginModal = ({ onClose }) => { return (
                <form>...</form>
              )}
`}
            </Highlight>
            <p>
              I then pass the Global Modal Component into a Context Provider
              wrapper which uses the useDisclousre hook from chakra to populate
              the context with its respective values. (Here, we could have also
              built our own global modal state and respective toggle functions
              but as I am a big chakra fan, I used their prebuilt functions.)
            </p>
            <small>GlobalModal.tsx</small>
            <Highlight language="javascript">
              {`export const GlobalModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GlobalModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      <GlobalModalComponent />
      {children}
    </GlobalModalContext.Provider>
  );
};
`}
            </Highlight>
            <p>Then, wrap the application with the provider.</p>
            <small>_app.tsx</small>

            <Highlight language="javascript">
              {`export const App = ({   Component, pageProps }) => {
  return (
    ...
    <GlobalModal>
    ...
   <Component {...pageProps} />
   ...
   </GlobalModal>
   ...
  );
};

`}
            </Highlight>
          </Col>
        </BlogRow>
        <BlogRow>
          <Col small>
            <h2>the auth checker</h2>
          </Col>
          <Col large>
            <p>
              The AuthCheck component should be independent from any child
              component. So, to not only pass the child as props but also be
              able to use its onClick event handler where the default action is
              called, we use React.clone and call the onClick.
            </p>
            <small>AuthCheck.tsx</small>

            <Highlight language="javascript">
              {`const AuthCheck = ({ children }) => {
  const handleClick = (e) => {
    if (session) {
      children.props.onClick();
    }
  };
  return (
    <>{React.cloneElement(children, { onClick: (e) => handleClick(e) })}</>
  );
};

export default AuthCheck;

`}
            </Highlight>
            <p>
              Now, consume the session. Trigger the default element action if
              user has a session and trigger the modal function from the context
              if user has no session.
            </p>
            <small>AuthCheck.tsx</small>

            <Highlight language="javascript">
              {`const AuthCheck = ({ children }) => {
  const { data: session, status } = useSession();
  const { onOpen } = useGlobalModalContext();
  const handleClick = (e) => {
    if (!session) {
      onOpen();
    }
    if (session) {
      children.props.onClick();
    }
  };
  return (
    <>{React.cloneElement(children, { onClick: (e) => handleClick(e) })}</>
  );
};

export default AuthCheck;
`}
            </Highlight>
            <p>
              Finally, use the AuthCheck component to wrap the element invoking
              the action you want to protect. That's it! You can now enjoy
              protecting UI client-side with only two lines of code.
            </p>
            <small>SendMessageButton.tsx</small>

            <Highlight language="javascript">
              {`<AuthCheck>
  <Button onClick={() => openMessageModal()}>
    Message
  </Button>
</AuthCheck>
`}
            </Highlight>
          </Col>
        </BlogRow>
      </Container>
    </>
  )
}

export default BorrowPage
