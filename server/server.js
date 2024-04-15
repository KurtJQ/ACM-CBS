import express from "express";
import cors from "cors";
import student from "./routes/student.js";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/student", student);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});