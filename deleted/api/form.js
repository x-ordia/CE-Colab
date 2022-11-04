import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
    const data = req.body;
    const client = await
    MongoClient.connect(
      "mongodb+srv://root:dBV0OloLbkEXCOat@clustercolab.r84qbtw.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db("Carts");
    const collection = db.collection("Suggestions");
    const result = await collection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
