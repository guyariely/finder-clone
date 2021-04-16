import "./File.scss";

function File({ name, type, isActive, onClickFile }) {
  return (
    <div
      name={name}
      className={`${isActive ? "active" : ""} file`}
      onClick={e => onClickFile(e, name)}
    >
      <div className="icon-wrapper">
        <div className={`${type} icon`}></div>
      </div>
      <p className="name">{name}</p>
    </div>
  );
}

export default File;
