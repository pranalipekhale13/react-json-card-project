import "./PageTitle.css";

function PageTitle({ title,subtitle }) {
  return (
    <div className="page-title">
      <h1 className="title">{title}</h1>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </div>
  );
}

export default PageTitle;