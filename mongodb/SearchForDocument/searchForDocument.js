const { MongoClient } = require("mongodb");
const data = require("./insert/data.js");
const uri = "mongodb://localhost:27017";

const dbName = "mydatabase";

const client = new MongoClient(uri);

async function updateDocument() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);

    const collection = db.collection("inventory");
    // return;
    // To select all documents in the collection,
    // pass an empty document as the query filter parameter to the find method.
    // const result = await collection.find({}).toArray();

    // The following example selects from the inventory collection
    // all documents where the status equals "D":
    //   const result = await collection.find({ status: "D" }).toArray();

    //   The following example retrieves all documents from the inventory collection
    // where status equals either "A" or "D":
    //   const result = await collection.find({ status: { $in: ["A", "D"] } }).toArray();

    //   A compound query can specify conditions for more than one field in the collection's documents.
    //  const result = await collection.find({ status: "A",qty:{$lt:50} }).toArray();

    // Using the $or operator, you can specify a compound query that joins each clause
    // with a logical OR conjunction so that the query selects the documents in the collection
    // that match at least one condition.
    // const result = await collection
    //   .find({ $or: [{ status: "A" }, { qty: { $lt: 300 } }] })
    //   .toArray();

    // To specify a query condition on fields in an embedded / nested document,
    // use dot notation("field.nestedField").
    //   const result = await collection.find({ "size.uom": "cm" }).toArray();

    console.log(result);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Call the updateDocument function
updateDocument();
