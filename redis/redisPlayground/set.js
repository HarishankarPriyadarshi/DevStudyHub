import { client } from "./client.js";

// unorder set
async function init() {
  // add to set
  await client.sadd("ip", "127.0.0.0");
  await client.sadd("ip", "127.0.4.0");
  await client.sadd("ip", "127.0.60.0");
  await client.sadd("ip", "127.0.0.70");

  const result = await client.srem("ip", "127.0.0.0");
  console.log("result", result); // result 1
}

init();

// order set :-> it is more like the priority queue it take one additional input when we store data and sort the on that basis to store
async function orderedSetFunction() {
  const res1 = await client.zadd("racer_scores", 10, "Norem");
  console.log(res1);

  const res2 = await client.zadd("racer_scores", 12, "Castilla");
  console.log(res2);

  const res3 = await client.zadd(
    "racer_scores",
    8, "Sam-Bodden",
    10, "Royce",
    6, "Ford",
    14, "Prickett",
    12, "Castilla"
  );
  console.log(res3);
}
orderedSetFunction();
