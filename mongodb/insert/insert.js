const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const dbName = "mydatabase";

const client = new MongoClient(uri);

async function updateDocument() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);

    const collection = db.collection("mycollection");

    const filter = { name: "John" };

    const update = { $set: { age: 45, nickname: "ash" } };
    //   const result = await collection.updateOne(filter, update,{upsert:true});
    //   const result = await collection.insertMany(data);
    //   console.log(result)
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Call the updateDocument function
updateDocument();
