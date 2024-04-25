const { MongoClient } = require("mongodb");
MongoClient.connect("mongodb://localhost/testdb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db("test");
const collection = db.collection("inventory");

const callFunction = async () => {
  await client.connect();

  // method on the inventory collection to update the first document
  // where item equals "paper"
  //   let result = await collection.updateOne(
  //     { item: "notebook" },
  //     {
  //       $set: { "size.uom": "cm", status: "B" },
  //       $currentDate: { lastModified: true },
  //     }
  //   );

  //   method on the inventory collection to update all documents
  // where qty is less than 50

  //   let result = await collection.updateMany(
  //     { qty: { $lt: 50 } },
  //     {
  //       $set: { 'size.uom': 'in', status: 'P' },
  //       $currentDate: { lastModified: true }
  //     }
  //   );

  //   replaces the first document from the inventory collection where item: "paper"
  //   let result = await collection.replaceOne(
  //   { item: 'paper' },
  //   {
  //     item: 'paper',
  //     instock: [
  //       { warehouse: 'A', qty: 60 },
  //       { warehouse: 'B', qty: 40 }
  //     ]
  //   }
  // );

  return;
  console.log(result);
};

callFunction();
