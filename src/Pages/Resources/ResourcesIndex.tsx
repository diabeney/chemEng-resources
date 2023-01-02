import { ListContainer } from "../../styles/reusableComponents";
import { Mainheading } from "../../styles/reusableComponents";
import { Paragraph } from "../../styles/reusableComponents";
import { Subheading } from "../../styles/reusableComponents";
import { Lowheading } from "../../styles/reusableComponents";
import { LevelTag } from "../../styles/reusableComponents";
import { Notice } from "../../styles/reusableComponents";
import { ContentInProgress } from "../../styles/reusableComponents";
import List from "../../components/List";

const contents = [
  "What is this site?",
  "Who this page is for?",
  "Entry requirements",
  "Conventions used.",
];

function ResourcesIndex() {
  return (
    <div>
      <Mainheading>Introduction</Mainheading>
      <Paragraph>
        The College of Engineering - Department of Chemical Engineering runs a
        4-year undergraduate programme leading to the degree of Bachelor of
        Science (BSc) in Chemical Engineering. The current course structure,
        after revision came into effect in the 2009/10 academic year.
        <br />
        <br />
        In this page you'll get to know what this page is about, the group of
        people this project is for and the conventions used in the various
        pages.
      </Paragraph>
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contents} />
      </ListContainer>
      <Subheading>What is this site?</Subheading>
      <Paragraph>
        This site provides all the necessary information needed to pursue a
        major in chemical engineering. Most of the information are based on the
        curriculum provided by{" "}
        <a
          href="https://www.knust.edu.gh/"
          target="_blank"
          className="page__link"
        >
          Kwame Nkrumah University Of Science and Technology (KNUST)
        </a>{" "}
        College of Engineering. It also provides all the resources (books,
        softwares, cheatsheets and handbooks) needed by all chemical engineering
        students.
      </Paragraph>
      <Subheading>Who is this page for?</Subheading>
      <Paragraph>
        This website is particularly for current chemical engineering students
        and other students who plan on studying chemical engineering in KNUST or
        any college that offers chemical engineering as a major.
      </Paragraph>
      <Subheading>Entry Requirements</Subheading>
      <Lowheading>1. WASSCE/SSCE Applicants</Lowheading>
      <Paragraph>
        Credits(A1 - C6) in the following three(3) core subjects: English
        Language, Mathematics and Integrated Science and credits in the
        following THREE(3) elective subjects: Mathematics, Physics, Chemistry.
      </Paragraph>
      <Lowheading>2. "A" level applicants</Lowheading>
      <Paragraph>
        {" "}
        Credits in FIVE(5) subjects at the GCE Ordinary ("O") Level (or its
        equivalent) including English and Mathematics, and passes at the GCE
        Advanced("A") level in Mathematics. Physics and Chemistry obtained not
        more than three(3) years ago.
      </Paragraph>
      <Lowheading>3. Matured applicants</Lowheading>
      <Paragraph>
        Applicant must be 25years at the time of submitting the application,
        have three (3) years of working experience in addition to passing an
        interview and have <br /> EITHER <br /> Credits is FIVE(5) subjects at
        the GCE Ordinary("O") level including English and Mathematics <br /> OR{" "}
        <br /> WASSCE/SSCE credits in the following THREE(3) core subjects:
        English Language, Mathematics and Integrated Science and credits in the
        following THREE(3) elective subjects: Mathematics, Physics and
        Chemistry.{" "}
      </Paragraph>
      <Subheading>Conventions used</Subheading>
      <Lowheading>&bull;Tags</Lowheading>
      <div style={{ paddingBlock: "1em" }}>
        <LevelTag level="General">General</LevelTag>|
        <LevelTag level="Specific">Specific</LevelTag>
      </div>
      <Paragraph>
        The various pages use tags such as{" "}
        <LevelTag level="General">General</LevelTag> - which denotes a general
        information whereas the <LevelTag level="Specific">Specific</LevelTag>{" "}
        denotes an information that's specific to KNUST.
      </Paragraph>
      <Lowheading>2. Notice</Lowheading>
      <Paragraph>
        Sometimes, attention is drawn to the reader using special notices.
      </Paragraph>
      <Lowheading>&bull;Info</Lowheading>
      <Notice variant="Info">
        <Lowheading>Info</Lowheading>
        <Paragraph>
          Contents in blocks like this provides more information on a particular
          concept.
        </Paragraph>
      </Notice>
      <Lowheading>&bull;Warning</Lowheading>
      <Notice variant="Warning">
        <Lowheading>Warning</Lowheading>
        <Paragraph>
          Contents in this block denotes information that should be avoided or
          that requires extra attention.
        </Paragraph>
      </Notice>
      <Lowheading>&bull;In Progess</Lowheading>
      <Paragraph>
        This project is in it's early stages and we are constantly updating the
        page to ensure users get the best content here. In view of this you will
        see a lot of this tag which shows that a particular page is still being
        developed/improved.
      </Paragraph>
      <ContentInProgress variant="In Progress">
        <Lowheading>This page is still in progress</Lowheading>
        <Paragraph>
          This page is still being developed. You can still go ahead and read
          but please report any issue you find on the page.
        </Paragraph>
      </ContentInProgress>
    </div>
  );
}

export default ResourcesIndex;
