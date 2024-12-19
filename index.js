const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
const connect = async () => await mongoose.connect(process.env.URI);

// console.log(connect());

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
    connect().catch((err) => console.log(err));

    //Collection Names
    // const projectCollection = client
    //   .db("rakibPortfolio")
    //   .collection("projectCollection");

    // app.get("/", (req, res) => {
    //   res.send("test");
    // });

    // app.get("/projects", async (req, res) => {
    //   const result = await projectCollection.find().toArray();
    //   console.log(result);
    //   res.send(result);
    // });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("server running");
});
