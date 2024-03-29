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
import { CARDS } from "../../constants/style-constants";
import { motion } from "framer-motion";
import { chemCardsContainerAnimations } from "../../constants/framer-animations";
import { chemCardAnimations } from "../../constants/framer-animations";

const footerLinks = [
  {
    title: "About",
    url: "https://test-cheesa.vercel.app/about",
  },
  {
    title: "Executives",
    url: "https://test-cheesa.vercel.app/executives",
  },
];

function Footer() {
  const { theme } = useContext(ToggleTheme);
  const year = new Date().getFullYear();
  return (
    <Container width="100vw" padding="0" backgroundColor={theme.secondary}>
      <FooterWrapper
        variants={chemCardsContainerAnimations}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <NewsletterContainer variants={chemCardAnimations}>
          <h2>Get latest updates</h2>
          <p>
            Subscribe to our weekly newsletters to get notifications from us.
          </p>
          <form>
            <input type="text" placeholder="yaw@domain.com" />
            <button>
              <RiSendPlaneLine color={theme.background} />
            </button>
          </form>
        </NewsletterContainer>
        <PageLinksContainer variants={chemCardAnimations}>
          <ul>
            <h3>Useful Links</h3>
            {footerLinks.map((link) => {
              return (
                <li key={link.title}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })}
          </ul>
          <ul>
            <h3>Contact Us</h3>
            <li>
              <a href="mailto:addodiabene69@gmail.com">chemeng@knust.edu.gh</a>
            </li>
            <li>P.O. Box 320 KNUST PMB, Kumasi - Ghana</li>
            <li>
              <a href="tel:+233559959049">+233 3220 60234</a>
            </li>
          </ul>
        </PageLinksContainer>
        <SocialLinksContaier variants={chemCardAnimations}>
          <LinkWrapper
            href="https://twitter.com/Cheesa_knust19"
            backgroundColor={CARDS.BLUE.backgroundColor}
          >
            <RiTwitterFill size={32} color={CARDS.BLUE.headingColor} />
          </LinkWrapper>
          <LinkWrapper
            href="https://instagram.com/cheesaknust?igshid=ZGUzMzM3NWJiOQ=="
            backgroundColor={CARDS.RED.backgroundColor}
          >
            <RiInstagramFill size={32} color={CARDS.RED.headingColor} />
          </LinkWrapper>
          <LinkWrapper
            href="https://www.linkedin.com/company/chemical-engineering-students-association/"
            backgroundColor={CARDS.LINKEDINBLUE.backgroundColor}
          >
            <RiLinkedinBoxFill size={32} color={CARDS.LINKEDINBLUE.textColor} />
          </LinkWrapper>
        </SocialLinksContaier>
        <CopyrightBox>
          Copyright &copy; {year}, All rights reserved.
        </CopyrightBox>
        <Note>
          Made with &hearts; by{" "}
          <a href="https://dbn-portfolio.netlify.app/">Diabene</a>
        </Note>
      </FooterWrapper>
    </Container>
  );
}

type LinkWrapperProps = {
  backgroundColor: string;
};

const CopyrightBox = styled.section`
  width: 100%;
  padding-top: 1.5em;
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
const Note = styled(CopyrightBox)`
  padding-block: 1rem;
  border-top: none;
  a {
    border-bottom: 1px solid hsl(211, 60%, 60%);

    &:hover {
      color: hsl(211, 60%, 60%);
    }
  }
`;

const FooterWrapper = styled(motion.section)`
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

const NewsletterContainer = styled(motion.section)`
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
      border-bottom: 1px solid ${({ theme }) => theme.secondary500};
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

const PageLinksContainer = styled(motion.section)`
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

const SocialLinksContaier = styled(motion.section)`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em;
  justify-content: center;
`;

const LinkWrapper = styled.a<LinkWrapperProps>`
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
