import styled from "styled-components";
import { Paragraph } from "../styles/reusableComponents";

export default function Book({
  title,
  author,
  imgUrl,
}: Record<"title" | "author" | "imgUrl", string>) {
  return (
    <BookWrapper>
      <ImageContainer>
        <img
          src={imgUrl}
          /*Just slicing up the title text 
          displayed in the alt when image isn't loaded for easy reading */
          alt={`${title.length > 15 ? title.slice(0, 15) : title}'s picture`}
        />
      </ImageContainer>
      <DetailsContainer>
        <h3>{title}</h3>
        <Paragraph>{author}</Paragraph>
      </DetailsContainer>
    </BookWrapper>
  );
}

const DetailsContainer = styled.section`
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h3 {
    font-size: 1.1rem;
  }

  p {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.section`
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const BookWrapper = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.secondary500};
  display: grid;
  grid-template-columns: 40% auto;
  border-radius: 1rem;
  overflow-x: hidden;

  @media (min-width: 30em) {
    /* width: 20rem; */
  }
`;
