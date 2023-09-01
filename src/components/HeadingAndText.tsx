import { Subheading } from "../styles/reusableComponents";
import { Lowheading } from "../styles/reusableComponents";
import { Paragraph } from "../styles/reusableComponents";
type HeadingAndTextProps = {
  headingType: "Sub" | "Low";
  headingText: string;
  paragraph?: string;
};

function HeadingAndText({
  headingType,
  headingText,
  paragraph,
}: HeadingAndTextProps) {
  return (
    <>
      {headingType === "Sub" ? (
        <Subheading> {headingText}</Subheading>
      ) : (
        <Lowheading>{headingText}</Lowheading>
      )}
      {paragraph && <Paragraph>{paragraph}</Paragraph>}
    </>
  );
}

export default HeadingAndText;
