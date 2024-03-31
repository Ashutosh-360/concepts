const { MongoClient } = require("mongodb");
MongoClient.connect("mongodb://localhost/testdb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db("test");
const collection = db.collection("inventory");

const callFunction = async () => {
  await client.connect();
  const result = await collection.createIndex({ item: -1 });

  // return;
  const indexes = await db.collection("inventory").indexes();
  console.log(indexes);
};

callFunction();
