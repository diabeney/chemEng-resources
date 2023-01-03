import { Paragraph } from "../styles/reusableComponents";

function ReportIssue() {
  return (
    <Paragraph>
      Found an issue on this page? Please correct it{" "}
      <a target="_blank" className="page__link">
        here.
      </a>
    </Paragraph>
  );
}

export default ReportIssue;
