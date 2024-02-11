import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4200;
app.use(bodyParser.urlencoded({ extended: true }));

const homepage = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/Express/public/index.html`;
const balita = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/Express/public/nayska.ejs`;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(homepage);
});

app.post("/mensahe", (req, res) => {
  const ngalan = req.body.ngalan;
  res.render(balita, { ngalan: req.body.ngalan });
});
