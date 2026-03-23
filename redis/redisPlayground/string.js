import { client } from "./client.js";

async function init() {
  //set the key value
  await client.set("user:4", "Peter Parker from nodejs");

  // get the key value
  const result = await client.get("user:4");

  console.log("Result->", result);

  //expire the key pair
    await client.set("user:5", "Peter Parker from nodejs for expire data");
    await client.expire("user:5", 10)
}

init();
