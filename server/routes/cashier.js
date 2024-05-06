import express from "express";
import db from "../db/connection.js";
import { Int32 } from "mongodb";

const router = express.Router();

//Get List
router.get("/", async (req, res) => {
  let collection = await db.collection("cashiers");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

//Get List by ID
router.get("/:id", async (req, res) => {
  let collection = await db.collection("cashiers");
  let query = { _id: new Int32(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not Found").status(404);
  else res.send(result).status(200);
});

//Add List
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      _id: req.body._id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      middleinitial: req.body.middleinitial,
      contactnum: req.body.contactnum,
      email: req.body.email,
      password: req.body.password,
      access_level: req.body.access_level,
    };
    let collection = await db.collection("cashiers");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    res.status(500).send("Error adding account!");
  }
});

//Edit List
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new Int32(req.params.id) };
    const updates = {
      $set: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        middleinitial: req.body.middleinitial,
        contactnum: req.body.contactnum,
        email: req.body.email,
        password: req.body.password,
      },
    };

    let collection = await db.collection("cashiers");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error updating account!");
  }
});

//Delete ID
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new Int32(req.params.id) };

    const collection = db.collection("cashiers");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error deleting account");
  }
});

export default router;
