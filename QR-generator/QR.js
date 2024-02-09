// import fs from "fs";
// import qr from "qr-image";

// const qrData = qr.image("Nice ka", { type: "svg" });

// fs.writeFile("qr-data.img", qrData, (err) => {
//   if (err) throw err;

//   console.log(`created a file called "qr-data", check it out`);
// });

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: `What's your URL?`,
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("QR-text.txt", url, (err) => {
      if (err) throw err;
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
