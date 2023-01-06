import React from "react";
import { ContentInProgress } from "../styles/reusableComponents";
import { Paragraph } from "../styles/reusableComponents";
import { Lowheading } from "../styles/reusableComponents";

function InProgress() {
  return (
    <ContentInProgress variant="In Progress">
      <Lowheading>Still in development</Lowheading>
      <Paragraph>
        This page is still being developed. You can still go ahead and read but
        please report any issue you find on the page.
      </Paragraph>
    </ContentInProgress>
  );
}

export default InProgress;
