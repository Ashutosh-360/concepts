const { MongoClient } = require("mongodb");
MongoClient.connect("mongodb://localhost/testdb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db("test1");
const collection = db.collection("inventory");

const callFunction = async () => {
  await client.connect();
  await client.connect();
  // Compound indexes are indexes that contain references to multiple fields.
  // Compound indexes improve performance for queries on exactly the fields in the index or fields in the index prefix.

  // Restriction
  // You can specify up to 32 fields in a single compound index.

//   db.students.createIndex({
//     name: 1,
//     gpa: -1,
//   });
    
// For example, the index supports these queries:
// db.students.find( { name: "Alice", gpa: 3.6 } )
// db.students.find( { name: "Bob" } )
    

//   await collection.insertMany([  {
//     "item": "t-shirt",
//     "stock": [
//        {
//           "size": "small",
//           "quantity": 8
//        },
//        {
//           "size": "large",
//           "quantity": 10
//        },
//      ]
//  },
//  {
//     "item": "sweater",
//     "stock": [
//        {
//           "size": "small",
//           "quantity": 4
//        },
//        {
//           "size": "large",
//           "quantity": 7
//        },
//      ]
//  },
//  {
//     "item": "vest",
//     "stock": [
//        {
//           "size": "small",
//           "quantity": 6
//        },
//        {
//           "size": "large",
//           "quantity": 1
//        }
//      ]
//  }])
  
  const result = await collection.find({ "stock.quantity": { $lt: 5 } }).toArray();
  console.log(result)
  // const indexes = await db.collection("inventory").indexes();
  // console.log(indexes);
};

callFunction();
