import styled from "styled-components";
import { Container } from "../../styles/reusableComponents";
import { PrimaryButton } from "../../styles/reusableComponents";
import JoinImage from "../../assets/hero.png";

function Join() {
  return (
    <Container height="100vh" width="100vw" padding="2em 0em">
      <JoinUsWrapper>
        <TextBox>
          <h1>Ready to make an impact?</h1>
          <p>
            Join a community of Chemical Engineers to help educate Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
          </p>
          <PrimaryButton variant="secondary" padding=".6em 1em">
            Join Us
          </PrimaryButton>
        </TextBox>
        <ImageBox>
          <img src={JoinImage} alt="Cube" />
        </ImageBox>
      </JoinUsWrapper>
    </Container>
  );
}

const ImageBox = styled.section`
  @media (min-width: 50em) {
    width: 50%;
  }
`;

const TextBox = styled.section`
  padding: 0.6em;

  p {
    padding-block: 0.8em;
  }

  @media (min-width: 50em) {
    width: 50%;
    height: fit-content;
    padding: 2em;
  }
`;

const JoinUsWrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  padding: 1em 0.4em;
  display: grid;
  height: 100vh;
  gap: 0.6em;
  place-content: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? `hsl(220, 15%, 96%)` : `hsl(220, 15%, 16%)`};

  h1 {
    font-size: 2.8em;
  }

  @media (min-width: 50em) {
    width: 90%;
    height: 80%;
    margin-inline: auto;
    border-radius: 4em;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default Join;
