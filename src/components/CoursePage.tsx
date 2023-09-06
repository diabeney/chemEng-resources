import { Mainheading } from "../styles/reusableComponents";
import { Subheading } from "../styles/reusableComponents";
import { Lowheading } from "../styles/reusableComponents";
import { LevelTag } from "../styles/reusableComponents";
import { Paragraph } from "../styles/reusableComponents";
import Book from "./Books";
import { BooksContainer } from "../styles/reusableComponents";
import PageLinks from "./PageLinks";
import ReportIssue from "./ReportIssue";
import { TCoursePage } from "../types/types";

function CoursePage({
  course_code,
  course_title,
  popular_books,
  videos,
  qna,
  introduction,
  topics,
}: TCoursePage) {
  return (
    <>
      <Mainheading>{course_title}</Mainheading>
      <Paragraph style={{ paddingBlock: "1em" }}>
        <LevelTag level="General">{course_code}</LevelTag>
      </Paragraph>
      <Paragraph>{introduction}</Paragraph>
      <Subheading>Topics</Subheading>
      {topics &&
        topics.map((topic, i) => {
          return (
            <div key={i}>
              <Lowheading>&bull; {topic.topic_title}</Lowheading>
              <Paragraph>{topic.topic_description}</Paragraph>
            </div>
          );
        })}
      <Subheading>Books</Subheading>
      <BooksContainer>
        {popular_books &&
          popular_books.map((book, i) => {
            return (
              <Book
                title={book.book_title}
                author={book.book_author}
                imgUrl={book.book_image?.asset.url}
                key={i}
              />
            );
          })}
      </BooksContainer>
      <Subheading>Resources</Subheading>
      <Lowheading>Videos</Lowheading>
      {videos &&
        videos.map((video, i) => {
          return (
            <Paragraph key={i}>
              <PageLinks to={video.video_url}>
                &bull; {video.video_title} - YouTube.
              </PageLinks>
            </Paragraph>
          );
        })}
      <Lowheading>Questions and Answers</Lowheading>
      {qna &&
        qna.map((item, i) => {
          return (
            <Paragraph key={i}>
              <PageLinks to={item.qna_url}>
                &bull; {item.question_n_answers}
              </PageLinks>
            </Paragraph>
          );
        })}
      <br />
      <br />
      <ReportIssue />
    </>
  );
}

export default CoursePage;
