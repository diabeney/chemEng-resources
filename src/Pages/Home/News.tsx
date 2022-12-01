import styled from "styled-components";
import { Container } from "../../styles/reusableComponents";
import { Link } from "react-router-dom";
import NewsImage from "../../assets/fabio-lucas-1Z1wTrhH1Ck-unsplash.jpg";

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function News() {
  const date = new Date();
  const currentDate = `${Months[date.getMonth()]}, ${date.getUTCDate()}`;

  return (
    <NewsWrapper>
      <h1>News & Articles</h1>
      <NewsContainer>
        <NewsCard to="hello">
          <img src={NewsImage} alt="News Image" />
          <NewsText>
            <DateText>{currentDate}</DateText>
            <h2>Ghana makes an impressive win against Portugal</h2>
          </NewsText>
        </NewsCard>
        <NewsCard to="hello">
          <img src={NewsImage} alt="News Image" />
          <NewsText>
            <DateText>{currentDate}</DateText>
            <h2>Ghana makes an impressive win against Portugal</h2>
          </NewsText>
        </NewsCard>
        <NewsCard to="hello">
          <img src={NewsImage} alt="News Image" />
          <NewsText>
            <DateText>{currentDate}</DateText>
            <h2>Ghana makes an impressive win against Portugal</h2>
          </NewsText>
        </NewsCard>
      </NewsContainer>
    </NewsWrapper>
  );
}

const DateText = styled.p`
  width: 6rem;
  position: absolute;
  right: 10%;
  top: -20%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.accent900};
  color: #fff;
  font-width: 700;
  font-size: 1.5em;
`;
const NewsCard = styled(Link)`
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  flex-grow: 1;

  & img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 10rem;
    transform: scale(1.3);
    transition: transform 300ms linear;
  }

  &:hover img {
    transform: scale(1);
  }

  @media (min-width: 50em) {
    width: fit-content;
  }
`;
const NewsText = styled.article`
  width: 18rem;
  padding: 1em;
  position: relative;
  transform: translate(10%, -20%);
  box-shadow: rgba(0, 0, 0, 0.05) -4px 9px 25px -6px;
  background-color: ${({ theme }) => theme.background};

  h2 {
    margin-top: 20%;
  }
`;

const NewsContainer = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 2em;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 50em) {
    flex-direction: row;
    justify-content: center;
    padding: 1em;
  }
`;

const NewsWrapper = styled(Container)`
  height: fit-content;
  width: 100vw;
  max-width: 1400px;
  margin-inline: auto;
  padding: 1.2em;

  h1 {
    padding: 1em;
    font-size: 2.5em;
  }
`;
export default News;
