import axios from "axios";
import express from "express";
import { client } from "./client.js";
import cli from "@angular/cli";
const app = express();

app.get("/", async (req, res) => {
  const cachedData = await client.get("photos");
  if (cachedData) {
    res.send(JSON.parse(cachedData));
    console.log("cached data is printed");
  }

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos",
  );
  await client.set("photos", JSON.stringify(data));

  res.send(data);
});

const port = 4000;

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
