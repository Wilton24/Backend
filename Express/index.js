import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

const homepage = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/Express/public/index.html`;
const secret = `C:/Users/Edna/Desktop/udemy/Angela Yu/Backend/Express/public/secret.html`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => next());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res, next) => {
  res.sendFile(homepage);
});

app.post("/check", (req, res, next) => {
  if (req.body.password !== `dragon`) {
    res.send("Wrong password po");
    console.log('Sayop ka po');
  } else if (req.body.password == `dragon`) {
    res.sendFile(secret);
  }
});
