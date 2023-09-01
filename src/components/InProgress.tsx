import { ContentInProgress } from "../styles/reusableComponents";
import { Paragraph } from "../styles/reusableComponents";
import { Lowheading } from "../styles/reusableComponents";

function InProgress() {
  return (
    <ContentInProgress variant="In Progress">
      <Lowheading>Still in development</Lowheading>
      <Paragraph>
        This page is still being developed. We'll complete it soon.
      </Paragraph>
    </ContentInProgress>
  );
}

export default InProgress;
