import express from "express";
import bodyParser from "body-parser";

const app = express();

const girlRatings = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/Express/public/girlRating.html`;

function middlewear(req, res, next) {
  console.log(req.body);
  next();
}
app.use(bodyParser.urlencoded({ extended: true }));

app.use(middlewear);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

app.get("/", (req, res) =>
  res.sendFile(
    `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/Express/public/index.html`
  )
);

app.post("/submit", (req, res) => {
  res.send(
    `<h1>The name of the girl is ${req.body.name} and her rating is ${req.body.rating}</h1>`
  );
});
