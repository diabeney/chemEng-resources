import React from "react";
import { ActivitiesText } from "../../constants/style-constants";
import BackgroundImage from "../../assets/thisisengineering-raeng-ovWUKV1btXk-unsplash.jpg";
import { RiCheckboxCircleFill } from "react-icons/ri";
import styled from "styled-components";
import { CARDS } from "../../constants/style-constants";
import { Container } from "../../styles/reusableComponents";

function EngineeringBenefits() {
  return (
    <ActivitiesWrapper backgroundImage={BackgroundImage}>
      <Activities>
        <div>
          <h1>Why choose Chemical Engineering?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            alias, saepe dolore nihil et atque voluptatem blanditiis tempora
            totam voluptas?
          </p>
        </div>
        <section>
          {ActivitiesText.map((item) => {
            return (
              <article key={item}>
                <RiCheckboxCircleFill color={CARDS.GREEN.textColor} size={32} />
                <p>{item}</p>
              </article>
            );
          })}
        </section>
      </Activities>
    </ActivitiesWrapper>
  );
}

export const ActivitiesWrapper = styled(Container)`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
      to bottom,
      hsla(220, 15%, 16%, 0.8),
      hsla(237, 63%, 0%, 0.6)
    ),
    url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-inline: auto;
`;

export const Activities = styled(Container)`
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  margin-inline: auto;
  padding-block: 3em;
  display: flex;
  background-color: transparent;
  flex-direction: column; 
  gap: 2em;

    div {
      width: 100%;
      padding: .4em .2em;
      position: sticky: 
      top: 0;

      h1 {
        font-size: 2.5em;
        color: white;
      }

      p {
        color: white;
      }
    }

    section {
      width: 100%;
      padding: .6em;
      display: flex;
      flex-direction: column;
      gap: 1em;

      article {
        width: 100%;
        background-color: ${({ theme }) => theme.background};
        padding: 1.8em 1.6em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .4em;
        border-radius: .4em;
        color: ${({ theme }) => theme.accent};
        
        &:hover {
        background-color: ${({ theme }) => theme.accent};
          color: ${({ theme }) => theme.background};
        }

        
      }
    }
 

    @media (min-width: 50em) {
      flex-direction: row;
      div {
        width: 50%;

        h1 {
          font-size: 3rem;
        }
      }
  
      section {
        width: 50%;
        padding: 2em;
      }
    }
  
  `;

export default EngineeringBenefits;
