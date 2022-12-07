import { Container } from "../../styles/reusableComponents";
import styled from "styled-components";
import {
  RiSendPlaneLine,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { ToggleTheme } from "../../components/ThemeWrapper";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CARDS } from "../../constants/style-constants";

const footerLinks = [
  "Home",
  "FAQs",
  "Services",
  "Learn More",
  "Terms & Conditions",
];

function Footer() {
  const { theme } = useContext(ToggleTheme);
  const year = new Date().getFullYear();
  return (
    <Container width="100vw" padding="0" backgroundColor={theme.secondary}>
      <FooterWrapper>
        <NewsletterContainer>
          <h2>Get latest updates</h2>
          <p>Subscribe to our weekly newsletters to Lorem, ipsum dolor.</p>
          <form>
            <input type="text" placeholder="kofi@example.com" />
            <button>
              <RiSendPlaneLine color={theme.background} />
            </button>
          </form>
        </NewsletterContainer>
        <PageLinksContainer>
          <ul>
            <h3>Useful Links</h3>
            {footerLinks.map((link) => {
              return (
                <li key={link}>
                  <Link to={link.toLowerCase()}>{link}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <h3>Contact Us</h3>
            <li>
              <a href="mailto:addodiabene69@gmail.com">info@chesources.com</a>
            </li>
            <li>Operators , Akosombo</li>
            <li>
              <a href="tel:+233559959049">+233 559959049</a>
            </li>
          </ul>
        </PageLinksContainer>
        <SocialLinksContaier>
          <LinkWrapper backgroundColor={CARDS.BLUE.backgroundColor}>
            <RiTwitterFill size={32} color={CARDS.BLUE.headingColor} />
          </LinkWrapper>
          <LinkWrapper backgroundColor={CARDS.RED.backgroundColor}>
            <RiInstagramFill size={32} color={CARDS.RED.headingColor} />
          </LinkWrapper>
          <LinkWrapper backgroundColor={CARDS.LINKEDINBLUE.backgroundColor}>
            <RiLinkedinBoxFill size={32} color={CARDS.LINKEDINBLUE.textColor} />
          </LinkWrapper>
        </SocialLinksContaier>
        <CopyrightBox>
          Copyright &copy; {year}, All rights reserved.
        </CopyrightBox>
      </FooterWrapper>
    </Container>
  );
}

type LinkWrapperProps = {
  backgroundColor: string;
};

const CopyrightBox = styled.section`
  width: 100%;
  padding-block: 1.5em;
  text-align: center;
  border-top: 1px solid
    ${({ theme }) =>
      theme.mode === "light" ? `rgb(223,224,227)` : `hsl(220, 15%,36%)`};

  @media (min-width: 30em) {
    grid-column: span 2;
  }
  @media (min-width: 50em) {
    grid-column: span 3;
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  position: relative;
  display: grid;
  gap: 1em;
  margin-top: 3em;
  place-content: center;

  @media (min-width: 30em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 50em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NewsletterContainer = styled.section`
  padding: 1em;
  height: fit-content;

  h2 {
    padding-block: 0.6em;
  }

  p {
    font-size: 1em;
  }
  form {
    display: flex;
    gap: 0.6em;
    padding-block: 1em;
    color: ${({ theme }) => theme.foreground};
    input {
      max-width: 24rem;
      height: 2.3em;
      border: none;
      color: inherit;
      background: transparent;
      border-bottom: 1px solid
        ${({ theme }) =>
          theme.mode === "light" ? `rgb(233,234,237)` : `hsl(220,15%,16%)`};
      font-size: 1em;

      &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.accent};
      }
    }

    button {
      aspect-ratio: 1/1;
      height: 2.3em;
      display: grid;
      place-items: center;
      border: none;
      background-color: ${({ theme }) => theme.accent};
    }
  }

  @media (min-width: 30em) {
    grid-column: span 2;
  }

  @media (min-width: 50em) {
    grid-column: span 1;
  }
`;

const PageLinksContainer = styled.section`
  display: flex;
  gap: 0.8em;

  ul {
    padding: 1em;

    li {
      padding-block: 0.6em;
      transition: transform 250ms cubic-bezier(0.01, 1.09, 0.78, 1);
      &:hover {
        color: ${({ theme }) => theme.accent};
        transform: translateX(3px);
      }
    }
  }
`;

const SocialLinksContaier = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em;
  justify-content: center;
`;

const LinkWrapper = styled.article<LinkWrapperProps>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: transform 300ms cubic-bezier(0.01, 1.09, 0.78, 1);
  &:hover {
    transform: scale(1.2);
  }
`;

export default Footer;
