const fs = require("fs");

// fs.writeFile("text.txt", "YellowSpak", (err) => {
//   if (err) throw err;
// });

fs.readFile("newpath/dagonMiester.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
