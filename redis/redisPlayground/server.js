import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello i am back");
});

const port = 4000;

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
