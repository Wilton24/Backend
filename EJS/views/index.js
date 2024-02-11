import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4200;
const homepage = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/EJS/views/index.ejs`;
const exercise1 = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/EJS/views/exercise1.ejs`;
const NameInputPage = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/EJS/public/nameInputPage.ejs`;
const nameLengthPage = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/EJS/views/nameLengthPage.ejs`;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/exercise1", (req, res) => {
  const data = {
    title: `EJS Tags`,
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };

  res.render(exercise1, data);
});

app.get("/", (req, res) => {
  let weekDayEnd = "";
  let buhatonon = "";

  const currentDate = new Date();

  if (currentDate.getDay() == 0 || currentDate.getDay() == 6) {
    weekDayEnd = `the Week end!`;
    buhatonon = `Try to have some mini leisure`;
  } else {
    weekDayEnd = `a week day!`;
    buhatonon = `Time to study hard and work!`;
  }

  res.render(homepage, {
    weekDayEnd,
    buhatonon,
  });
});

app.get("/NameInputPage", (req, res) => {
  res.render(NameInputPage);
});

app.post("/submitName", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const nameLength = fName.length + lName.length;
  res.render(nameLengthPage, {
    fName,
    lName,
    nameLength,
  });
});
