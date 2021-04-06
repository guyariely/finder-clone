import "./Files.scss";
import "./folder.png";
import "./textfile.png";

function Files() {
  return (
    <main id="files">
      <div class="folder">
        <div class="icon-wrapper">
          <div class="folder icon"></div>
        </div>
        <p class="folder-name">Exam 1</p>
      </div>
      <div class="file active">
        <div class="icon-wrapper">
          <div class="file icon"></div>
        </div>
        <p class="file-name">Archive.zip</p>
      </div>
      <div class="folder">
        <div class="icon-wrapper">
          <div class="folder icon"></div>
        </div>
        <p class="folder-name">Exam 2</p>
      </div>
      <div class="folder">
        <div class="icon-wrapper">
          <div class="folder icon"></div>
        </div>
        <p class="folder-name">Web</p>
      </div>
      <div class="file">
        <div class="icon-wrapper">
          <div class="file icon"></div>
        </div>
        <p class="file-name">todo.txt</p>
      </div>
    </main>
  );
}

export default Files;
