import { Mainheading } from "../../../styles/reusableComponents";
import { Paragraph } from "../../../styles/reusableComponents";
import { LevelTag } from "../../../styles/reusableComponents";
import { ListContainer } from "../../../styles/reusableComponents";
import { Lowheading } from "../../../styles/reusableComponents";
import { contentsList } from "../../../constants/data";
import List from "../../../components/List";
import { Subheading } from "../../../styles/reusableComponents";
import PageLinks from "../../../components/PageLinks";
function InorganicChemistry() {
  return (
    <>
      <Mainheading>Inorganic Chemistry for Engineers</Mainheading>
      <Paragraph style={{ paddingBlock: "1em" }}>
        <LevelTag level="General">CHE 151</LevelTag>
      </Paragraph>
      <Paragraph>
        Inorganic chemistry is a branch of chemistry that focuses on the study
        of the properties, behavior, and reactions of inorganic compounds.
        Inorganic compounds primarily consist of elements other than carbon and
        hydrogen, such as metals, metalloids, and nonmetals.
      </Paragraph>
      <ListContainer>
        <Lowheading>Contents on this page</Lowheading>
        <List data={contentsList} />
      </ListContainer>
      <Subheading>{contentsList[0]}</Subheading>
      <Lowheading>Atomic Structure and Periodic Table</Lowheading>
      <Paragraph>
        The study of atomic structure and the periodic table is crucial in
        inorganic chemistry as it forms the foundation for understanding the
        behavior and properties of elements and their compounds. It allows
        chemists to interpret and predict chemical reactions, design new
        materials, and explore the wide range of applications in fields like
        materials science, catalysis, environmental chemistry, and bioinorganic
        chemistry.
      </Paragraph>
      <Lowheading>Chemical Bonding</Lowheading>
      <Paragraph>
        The course on Chemical Bonding provides students with a comprehensive
        understanding of the different types of chemical bonding, including
        ionic, covalent (with a focus on VSEPR theory), and metallic bonding.
        Through a combination of theory, examples, and hands-on exercises,
        students will explore the fundamental principles underlying these
        bonding types and their implications in chemical systems.
      </Paragraph>
      <Subheading>{contentsList[1]}</Subheading>
      <Subheading>{contentsList[2]}</Subheading>
      <Lowheading>Videos</Lowheading>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=RxWmdyjR544&list=PLybg94GvOJ9GlYQJWEhxOBtNXH5DKeNsN">
          &bull; Professor Dave Explains - Introduction to InOrganic and
          Organomettalic chemistry- YouTube Playlist.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=1xSQlwWGT8M&list=PL405CA74A7E5361AD">
          &bull; Khan Academy - Inorganic Chemistry- YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=DBrq31w8vC4&pp=ygUhdnNlcHIgdGhlb3J5IGFuZCBtb2xlY3VsYXIgc2hhcGVz">
          &bull; Organic Chemistry Tutor - VSEPR Theory ( Basic Introduction )-
          YouTube.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.youtube.com/watch?v=DWS5HlyndAI">
          &bull;Najam Academy - Tricks to shapes of molecules - YouTube.
        </PageLinks>
      </Paragraph>
      <Lowheading>Articles & PDFs</Lowheading>
      <Paragraph>
        <PageLinks to="https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Book%3A_Introduction_to_Inorganic_Chemistry_(Wikibook)/01%3A_Review_of_Chemical_Bonding/1.03%3A_The_Shapes_of_Molecules_(VSEPR_Theory)_and_Orbital_Hybridization">
          &bull;LibreTexts Chemistry - The Shapes of Molecules (VSEPR Theory)
          and Orbital Hybridization.
        </PageLinks>
      </Paragraph>
      <Paragraph>
        <PageLinks to="https://www.teachmint.com/tfile/studymaterial/b-sc/inorganicchemistry/vseprtheorypdf/dd14f7c4-5566-432d-8773-ad75ec2d9a1d">
          Teachmint - VSEPR Theory - [PDF]
        </PageLinks>
      </Paragraph>
    </>
  );
}

export default InorganicChemistry;
