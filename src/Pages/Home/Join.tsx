import styled from "styled-components";
import { Container } from "../../styles/reusableComponents";
import { PrimaryButton } from "../../styles/reusableComponents";
import JoinImage from "../../assets/hero.png";

function Join() {
  return (
    <Container height="100vh" width="100vw" padding="2em 0em">
      <JoinWrapper>
        <JoinText>
          <h1>Ready to make an impact?</h1>
          <p>
            Join a community of Chemical engineers to help review Lorem ipsum,
            dolor sit amet consectetur adipisicing elit.
          </p>
          <PrimaryButton variant="primary" padding=".4em 1.6em">
            Join Us
          </PrimaryButton>
        </JoinText>
        <ImageBox>
          <img src={JoinImage} alt="Cube illustration" />
        </ImageBox>
      </JoinWrapper>
    </Container>
  );
}

const JoinWrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  padding: 0.6em 0.8em;
  gap: 1em;

  h1 {
    font-size: 2.5em;
  }

  p {
    padding-block: 0.8em;
  }

  @media (min-width: 50em) {
    background-color: ${({ theme }) =>
      theme.mode === "light" ? `rgb(243,244,247)` : `hsl(220, 15%, 16%)`};
    width: 90%;
    border-radius: 0.8em;
    margin-inline: auto;
    flex-direction: row;
  }
`;
const JoinText = styled.section`
  display: grid;
  place-content: center;
  padding: 1em;
  @media (min-width: 50em) {
    h1 {
      font-size: 3em;
    }
    width: 50%;
  }
`;

const ImageBox = styled.section`
  display: grid;
  place-content: center;
  @media (min-width: 50em) {
    width: 50%;
  }
`;

export default Join;
