import styled from "styled-components";
import { GridContainer, Container } from "../../styles/reusableComponents";
import { PrimaryButton } from "../../styles/reusableComponents";
import NewsLetterImage from "../../assets/DrawKit Vector Illustration Team Work (6).svg";
import { Mark } from "../../styles/reusableComponents";

function Contact() {
  return (
    <Container width="100vw" padding="0">
      <GridContainer width="100%" padding="0" evenColumns={true}>
        <InputWrapper>
          <h1>
            Turn your dreams into a reality <Mark>- seriously.</Mark>
          </h1>
          <p>
            Lorem, ipsum dolor. to keep up with Lorem ipsum dolor sit amet
            consectetur.
          </p>

          <PrimaryButton padding=".6em 2em" variant="primary">
            Get in touch
          </PrimaryButton>
        </InputWrapper>
        <TextWrapper>
          <img src={NewsLetterImage} alt="" />
        </TextWrapper>
      </GridContainer>
    </Container>
  );
}

const InputWrapper = styled.div`
  padding: 1em 2em;
  display: grid;
  place-content: center;
  h1 {
    font-size: 3em;
    line-height: 1.2;
  }
  p {
    padding-block: 1em;
  }
`;

const TextWrapper = styled.section`
  img {
    margin-block: auto;
  }
`;

export default Contact;
