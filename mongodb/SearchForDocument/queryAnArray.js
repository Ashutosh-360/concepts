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
    
    console.log(result);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Call the updateDocument function
updateDocument();
