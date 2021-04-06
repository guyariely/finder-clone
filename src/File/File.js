import "./File.scss";
import "./folder.png";
import "./textfile.png";

function File({ type, name }) {
  return (
    <div className="file">
      <div className="icon-wrapper">
        <div className={`${type} icon`}></div>
      </div>
      <p className="name">{name}</p>
    </div>
  );
}

export default File;
