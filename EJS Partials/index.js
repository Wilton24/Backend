import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

const homepage = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/EJS Partials/views/index.ejs`;
const aboutPage = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/EJS Partials/views/about.ejs`;
const contactPage = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/EJS Partials/views/contact.ejs`;
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Render the home page "/" index.ejs
app.get("/", (req, res) => {
  res.render(homepage);
});

// Step 2: Make sure that static files are linked to and the CSS shows up.
app.use(express.static("public"));

// Step 3: Add the routes to handle the render of the about and contact pages.
app.get("/about", (req, res) => {
  res.render(aboutPage);
});
app.get("/contact", (req, res) => {
  res.render(contactPage);
});

//   Hint: Check the nav bar in the header.ejs to see the button hrefs
// Step 4: Add the partials to the about and contact pages to show the header and footer on those pages.

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
