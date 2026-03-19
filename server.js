const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/schoolDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const AdmissionSchema = new mongoose.Schema({
  name: String,
  studentClass: String,
  parent: String,
  phone: String
});

const Admission = mongoose.model("Admission", AdmissionSchema);

// API Route
app.post("/admission", async (req, res) => {
  const data = new Admission(req.body);
  await data.save();
  res.send("Data Saved Successfully");
});

// Server Start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});