import styled from "styled-components";
import { GridContainer, Container } from "../../styles/reusableComponents";
import { PrimaryButton } from "../../styles/reusableComponents";
import NewsLetterImage from "../../assets/DrawKit Vector Illustration Team Work (6).svg";
import { Mark } from "../../styles/reusableComponents";

function NewsLetter() {
  return (
    <Container width="100vw" padding="0">
      <GridContainer width="100%" padding="0" evenColumns={true}>
        <InputWrapper>
          <h1>
            Don't miss out on any news <Mark>- seriously.</Mark>
          </h1>
          <p>
            Subscribe to our weekly newsletters to keep up with Lorem ipsum
            dolor sit amet consectetur.
          </p>
          <form>
            <input type="text" placeholder="kofi@example.com" />
            <PrimaryButton padding=".6em 2em" variant="primary">
              Submit
            </PrimaryButton>
          </form>
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
  }
  p {
    padding-block: 1em;
  }
  form {
    display: flex;
    gap: 1em;
    flex-direction: column;

    input {
      max-width: 24rem;
      height: 2.3em;
      border-radius: 0.2em;

      &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.accent};
      }
    }
  }
`;

const TextWrapper = styled.section`
  img {
    margin-block: auto;
  }
`;

export default NewsLetter;
