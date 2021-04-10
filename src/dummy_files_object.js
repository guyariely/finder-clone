const files = {
  "Computer Architecture": {
    type: "folder",
    files: {
      "Exam 1.txt": { type: "textfile" },
      "Exam 2.txt": { type: "textfile" },
      "Exam 3.txt": { type: "textfile" },
      "Exam 4.txt": { type: "textfile" },
      "Exam 5.txt": { type: "textfile" },
      "Exam 6.txt": { type: "textfile" },
    },
  },
  "todos.txt": { type: "textfile" },
  Web: {
    type: "folder",
    files: {
      React: {
        type: "folder",
        files: {
          "hooks.txt": { type: "textfile" },
          "suspense.txt": { type: "textfile" },
          "context.txt": { type: "textfile" },
          "redux.txt": { type: "textfile" },
          "server-components.txt": { type: "textfile" },
        },
      },
      CSS: {
        type: "folder",
        files: {
          Layout: {
            type: "folder",
            files: {
              "CSS Grid.txt": { type: "textfile" },
              "flexbox.txt": { type: "textfile" },
              "bootstrap.txt": { type: "textfile" },
            },
          },
          "css variables.txt": { type: "textfile" },
          "css animation.txt": { type: "textfile" },
        },
      },
      "HTML cheatsheet.txt": { type: "textfile" },
      "JS array functions.txt": { type: "textfile" },
    },
  },
};

const root = {
  Home: {
    type: "folder",
    files: {
      Documents: {
        type: "folder",
        files: {},
      },
      Desktop: {
        type: "folder",
        files: {},
      },
      Downloads: {
        type: "folder",
        files: {},
      },
    },
  },
};

export { files, root };
