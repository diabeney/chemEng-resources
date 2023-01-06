import { Paragraph } from "../styles/reusableComponents";

function ReportIssue() {
  return (
    <Paragraph>
      Found an issue on this page?{" "}
      <a target="_blank" className="page__link">
        Please correct it here.
      </a>
    </Paragraph>
  );
}

export default ReportIssue;
