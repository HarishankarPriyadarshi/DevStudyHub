// admin create topics
import { kafka } from "./client.js";

async function init() {
  const admin = kafka.admin();
  console.log("admin connecting");
  admin.connect();
  console.log("Admin connection sucessfully");

  console.log("creating topics for the [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topics created sucessfully [rider-updates]");
  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init()