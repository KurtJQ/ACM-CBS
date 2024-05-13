import express from "express";
import db from "../db/connection.js";
import { Int32 } from "mongodb";

const router = express.Router();

//Get List

router.get("/", async (req, res) => {
  try {
    let collection = db.collection("transactions");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error retrieving all transactions");
  }
});

//Get Many by ID
router.get("/:id", async (req, res) => {
  try {
    const query = { studentID: new Int32(req.params.id) };

    const collection = db.collection("transactions");
    let result = await collection.find(query).toArray();

    res.send(result).status(200);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error retrieving transactions");
  }
});

//Add
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      _id: req.body._id,
      studentID: req.body.studentID,
      cashierID: req.body.cashierID,
      amount: req.body.amount,
      item: req.body.item,
      date: req.body.date,
      year: req.body.year,
      semester: req.body.semester,
    };
    let collection = db.collection("transactions");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (e) {
    res.status(500).send("Error adding transaction!");
  }
});

//Delete
router.delete(":/id", async (req, res) => {
  try {
    const query = { _id: new Int32(req.params.id) };

    const collection = db.collection("transactions");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error deleting transaction");
  }
});

export default router;
