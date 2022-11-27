import { Mark } from "../../styles/reusableComponents";
import { HomeTexts } from "../../constants/style-constants";
import { COLORS } from "../../constants/style-constants";
import CreativeThinking from "../../assets/creative-thinking.svg";
import styled from "styled-components";
import { CardProps } from "../../constants/style-constants";

function Services() {
  return (
    <ServicesPage>
      <h1>
        How to <Mark>benefit from us.</Mark>
      </h1>
      <div>{HomeTexts.SERVICES_TAG}</div>
      <CardsContainer>
        <Card {...COLORS.CARDS.RED}>
          <section>
            <img src={CreativeThinking} alt="Plan" />
          </section>
          <h1>{HomeTexts.CARD_ONE_HEADING}</h1>
          <p>{HomeTexts.CARD_ONE_PARAGRAPTH}</p>
        </Card>
        <Card {...COLORS.CARDS.GREEN}>
          <section>
            <img src={CreativeThinking} alt="Plan" />
          </section>
          <h1>{HomeTexts.CARD_TWO_HEADING}</h1>
          <p>{HomeTexts.CARD_TWO_PARAGRAPTH}</p>
        </Card>
        <Card {...COLORS.CARDS.BROWN}>
          <section>
            <img src={CreativeThinking} alt="Plan" />
          </section>
          <h1>{HomeTexts.CARD_THREE_HEADING}</h1>
          <p>{HomeTexts.CARD_THREE_PARAGRAPTH}</p>
        </Card>
        <Card {...COLORS.CARDS.BLUE}>
          <section>
            <img src={CreativeThinking} alt="Plan" />
          </section>
          <h1>{HomeTexts.CARD_FOUR_HEADING}</h1>
          <p>{HomeTexts.CARD_FOUR_PARAGRAPTH}</p>
        </Card>
      </CardsContainer>
    </ServicesPage>
  );
}

export const Card = styled.article<CardProps>`
  position: relative;
  padding: 0.8em 1em;
  overflow: hidden;
  border-radius: 0.4em;
  color: ${({ color }) => color};

  & section {
    width: fit-content;
    padding: 2em;
    border-radius: 50%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin-inline: auto;

    &:hover {
      background-color: ${({ textColor }) => textColor};
    }

    & img {
      width: 3rem;
    }
  }

  h1 {
    font-size: 1.6em !important;
    padding-block: 0.2em;
    line-height: 1.5;
    color: ${({ theme }) => theme.foreground};
  }

  p {
    font-size: 1em;
    text-align: center;
    color: ${({ theme }) => theme.foreground};
  }
`;

export const CardsContainer = styled.section`
  width: 90%;
  margin-inline: auto;
  z-index: 10;
  position: relative;
  padding: 1em;
  color: ${({ theme }) => theme.foreground};
  display: grid;
  gap: 1.4em;

  @media (min-width: 30em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 40em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ServicesPage = styled.section`
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  color: ${({ theme }) => theme.foreground};
  & h1 {
    text-align: center;
    font-size: 2.5em;
  }

  & div {
    margin-block: 1em;
    width: fit-content;
    margin-inline: auto;
    background-color: ${({ theme }) => theme.accent};
    padding: 0.4em 1em;
    color: #fff;
    border-radius: 3em;
  }

  @media (min-width: 50em) {
    & h1 {
      font-size: 3em;
      padding-top: 0.5em;
    }

    & div {
      margin-block: 5em;
    }
  }
`;
export default Services;
