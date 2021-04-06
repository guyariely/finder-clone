import File from "../File/File";
import "./Files.scss";

function Files() {
  return (
    <main id="files">
      <File type="folder" name="Exam 1" />
      <File type="textfile" name="Archive.zip" />
      <File type="folder" name="Exam 2" />
      <File type="folder" name="Web" />
      <File type="textfile" name="todo.txt" />
    </main>
  );
}

export default Files;
