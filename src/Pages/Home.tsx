import NavBar from "../components/NavBar";
import { HeroContainer, Container, Mark } from "../styles/styledComponents";
import { PrimaryButton } from "../styles/styledComponents";
import HeroImage from "../assets/emmanuel-ikwuegbu-zWOgsj3j0wA-unsplash.jpg";

function Home() {
  return (
    <>
      <NavBar />
      <HeroContainer width="100%" height="fit-content" evenColumns={true}>
        <Container height="100%" padding="1.5em">
          <h1>
            The ultimate engineering majors roadmap
            <Mark> - the guide you need.</Mark>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
            possimus.
          </p>

          <PrimaryButton variant="primary" padding=".6em 1.2em">
            Subscribe
          </PrimaryButton>
        </Container>
        <Container style={{ position: "relative" }} width="100%">
          <img
            src={HeroImage}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectPosition: "top left",
              objectFit: "cover",
            }}
            alt="engineer"
          />
        </Container>
      </HeroContainer>
    </>
  );
}

export default Home;
