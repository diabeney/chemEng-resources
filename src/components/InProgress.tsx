import React from "react";
import { ContentInProgress } from "../styles/reusableComponents";
import { Paragraph } from "../styles/reusableComponents";
import { Lowheading } from "../styles/reusableComponents";

function InProgress() {
  return (
    <ContentInProgress variant="In Progress">
      <Lowheading>Still in development</Lowheading>
      <Paragraph>
        This page is not yet complete Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Asperiores, ut!
      </Paragraph>
    </ContentInProgress>
  );
}

export default InProgress;
