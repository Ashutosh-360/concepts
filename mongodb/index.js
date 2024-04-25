const { MongoClient } = require("mongodb");
MongoClient.connect("mongodb://localhost/testdb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db("test1");
const collection = db.collection("inventory");

const callFunction = async () => {
  await client.connect();
  //   db.blog.insertMany( [
  //     {
  //       _id: 1,
  //       content: "This morning I had a cup of coffee.",
  //       about: "beverage",
  //       keywords: [ "coffee" ]
  //     },
  //     {
  //       _id: 2,
  //       content: "Who likes chocolate ice cream for dessert?",
  //       about: "food",
  //       keywords: [ "poll" ]
  //     },
  //     {
  //       _id: 3,
  //       content: "My favorite flavors are strawberry and coffee",
  //       about: "ice cream",
  //       keywords: [ "food", "dessert" ]
  //     }
  //  ] )

  // Create a Single-Field Text Index
  // db.blog.createIndex( { "content": "text" } )

  // db.blog.find({
  //   $text: { $search: "coffee" },
  // });

  // Create a Compound Text Index
  // db.blog.createIndex({
  //   about: "text",
  //   keywords: "text",
  // });

  // The index supports text search queries on the about and keywords fields. For example, the following query returns documents where the string food appears in either the about or keywords field:

  // db.blog.find(
  //    {
  //       $text: { $search: "food" }
  //    }
  // )

  // Create a Wildcard Text Index
  // db.blog.createIndex( { "$**": "text" } )

  // Search for Multiple Terms
  // Query the blog collection for documents that contain the string poll or coffee:
  // db.blog.find( { $text: { $search: "poll coffee" } } )

  // Search for an Exact Phrase
  // Query the blog collection for documents that contain the phrase chocolate ice cream:

  // db.blog.find( { $text: { $search: "\"chocolate ice cream\"" } } )
  // Create a text index with different weights for each indexed field:  // db.blog.createIndex(
  //    {
  //      content: "text",
  //      keywords: "text",
  //      about: "text"
  //    },
  //    {
  //      weights: {
  //        content: 10,
  //        keywords: 5
  //      },
  //      name: "BlogTextIndex"
  //    }
  //  )
  const result = await collection.find({ "stock.quantity": { $lt: 5 } }).toArray();
  console.log(result);
  // const indexes = await db.collection("inventory").indexes();
  // console.log(indexes);
};

callFunction();
