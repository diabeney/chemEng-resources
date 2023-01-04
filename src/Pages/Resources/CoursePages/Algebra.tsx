import { Mainheading } from "../../../styles/reusableComponents";
import { Subheading } from "../../../styles/reusableComponents";
import { Lowheading } from "../../../styles/reusableComponents";
import { Notice } from "../../../styles/reusableComponents";
import { LevelTag } from "../../../styles/reusableComponents";
import InProgress from "../../../components/InProgress";
import { Paragraph } from "../../../styles/reusableComponents";
import List from "../../../components/List";
import { ListContainer } from "../../../styles/reusableComponents";
import Book from "../../../components/Books";
import { BooksContainer } from "../../../styles/reusableComponents";
import PageLinks from "../../../components/PageLinks";
import ReportIssue from "../../../components/ReportIssue";

const contents = ["Must Learn Topics", "Popular Books", "Useful Resources"];
const booksData = [
  {
    title: "Linear Algebra and it's Application",
    author: "Gilbert Strang",
    img_url:
      "https://cdn.asaha.com/assets/thumbs/997/9979cffe8c220442550f77b602cbdc49.jpg",
  },
  {
    title: "Elementary Linear Algebra 10th edition",
    author: "Howard Anton",
    img_url:
      "https://cdn.asaha.com/assets/thumbs/4e2/4e2b1f151d4594dfbcaeb31cbeb96561.jpg",
  },
  {
    title: "Schaum's Outline of Linear Algebra",
    author: "Schaums",
    img_url:
      "https://cdn.asaha.com/assets/thumbs/d0e/d0ede8b0ffab15ca808db2ff3515cb03.jpg",
  },
];

function Algebra({ done }: { done: boolean }) {
  return (
    <>
      <Mainheading>Algebra (MATH 151)</Mainheading>
      <div style={{ paddingBlock: "1em" }}>
        <LevelTag level="General">General</LevelTag>
      </div>
      <Paragraph>
        Algebra is a branch of mathematics in which letters and symbols are used
        to represent numbers and quantities in equations and formulas. It is
        used to manipulate and simplify expressions and to solve systems of
        equations. Understanding algebra is also important for studying other
        subjects in engineering, such as calculus and differential equations.
      </Paragraph>
      {done || <InProgress />}
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contents} />
      </ListContainer>
      <Subheading>{contents[0]}</Subheading>
      <Lowheading>&bull;Complex Numbers</Lowheading>
      <Paragraph>
        In mathematics, a complex number is a number that can be written in the
        form <b>(a + bi)</b>, where <b>a</b> and <b>b</b> are real numbers and i
        is the imaginary unit. <br />
        <br />
        In chemical engineering, they may be used to solve equations that arise
        in the design of chemical plants or in the analysis of chemical
        reactions. They may also be used to represent oscillating or rotating
        systems, such as mixing tanks or chemical reactors.
      </Paragraph>
      <Lowheading>&bull;Matrix algebra</Lowheading>
      <Paragraph>
        A matrix is a rectangular array of numbers or symbols, arranged in rows
        and columns.
        <br />
        <br />
        Matrices are used in the development of mathematical models for chemical
        processes. For example, they can be used to represent the rates of
        chemical reactions or the transport of heat and mass in a chemical
        system.
      </Paragraph>
      <Notice variant="Info">
        <Lowheading>Note</Lowheading>
        <Paragraph>
          An article on the applications of matrices in chemical engineering can
          be found{" "}
          <a
            target="_blank"
            href="https://pubs.acs.org/doi/10.1021/ie50548a027"
            className="page__link"
          >
            here
          </a>
        </Paragraph>
      </Notice>
      <Lowheading>&bull;Vector algebra and application</Lowheading>
      <Paragraph>
        Vector algebra is a branch of mathematics that deals with vectors and
        vector-valued functions. A vector is a mathematical object that has both
        magnitude and direction.
        <br />
        <br />
        Vectors are used in chemical engineering in the following ways:
        <br />
        <br />
        1. Vector algebra is used to represent and analyze physical quantities
        that have both magnitude and direction, such as flow rate,
        concentration, and temperature. For example, vectors can be used to
        describe the flow of fluids in a chemical plant or the distribution of
        heat and mass in a chemical reactor.
        <br />
        <br />
        2. Vector algebra is used to describe the movement and transportation of
        materials in chemical processes. For example, vectors can be used to
        represent the flow of materials through pipes, tanks, and other process
        equipment.
        <br />
        <br />
        3. Vector algebra is used to represent geometric shapes and
        transformations in space. For example, vectors can be used to describe
        the geometry of process equipment or the movement of materials within a
        chemical plant.
      </Paragraph>
      <Subheading>{contents[1]}</Subheading>
      <Notice variant="Warning">
        <Lowheading>Problem</Lowheading>
        <Paragraph>
          Due to copyright issues, you cannot download the books directly here,
          however you can search and download them on{" "}
          <a
            href="https://www.pdfdrive.com/"
            target="_blank"
            className="page__link"
          >
            PDFdrive
          </a>
        </Paragraph>
      </Notice>
      <BooksContainer>
        {booksData.map((book) => {
          return (
            <Book
              title={book.title}
              author={book.author}
              imgUrl={book.img_url}
              key={book.title}
            />
          );
        })}
      </BooksContainer>
      <Subheading>{contents[2]}</Subheading>
      <Lowheading>Videos</Lowheading>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=yRwQ7A6jVLk&list=PLmqUUxWAllkGD6tKpbDgi7S4e45NYt_57">
          &bull; Organic Chemistry Tutor - Introduction to Matrices - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=JnTa9XtvmfI&t=35542s">
          &bull; FreeCodeCamp - Linear Algebra Full College Course - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=fNk_zzaMoSs">
          &bull; 3Blue1Brown - Essence of Linear Algebra - YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=OQz1ydBcQSA">
          &bull; Organic Chemistry Tutor - Complex numbers basic operations -
          YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra">
          &bull; KhanAcademy - Vector Intro for Linear Algebra
        </PageLinks>
      </Paragraph>
      <Lowheading>Questions and Answers</Lowheading>
      <Paragraph>
        <PageLinks to="https://web.pdx.edu/~erdman/LINALG/Linalg_pdf.pdf">
          &bull;John M. Erdman, Portland State University - Exercises and
          problems in Linear Algebra
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://byjus.com/maths/linear-algebra/">
          &bull;BYJU'S - Linear Algebra
        </PageLinks>
      </Paragraph>
      <br />
      <br />
      <ReportIssue />
    </>
  );
}

export default Algebra;
