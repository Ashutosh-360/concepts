const { MongoClient } = require("mongodb");
MongoClient.connect("mongodb://localhost/testdb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db("test1");
const collection = db.collection("inventory");

const callFunction = async () => {
  await client.connect();
  // Create an Index on a Single Field
  // const result = await collection.createIndex({ gpa: 1 });

  // const result = await collection.createIndex({ location: 1 });
  
  // the following queries do not use the index on the location field because they query on specific fields within the embedded document:
  // db.students.find( { "location.city": "Sacramento" } )
  // db.students.find( { "location.state": "New York" } )
  
  // Create an Index on an Embedded Document
  //db.students.createIndex( { "location.state": 1 } )
  // return;
  const indexes = await db.collection("inventory").indexes();
  console.log(indexes);
};

callFunction();
