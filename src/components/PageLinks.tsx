type PageLinkProps = {
  to: string;
  children: string;
};

const PageLinks = ({ to, children }: PageLinkProps) => {
  return (
    <a href={to} target="_blank" className="page__link">
      {children}
    </a>
  );
};

export default PageLinks;
