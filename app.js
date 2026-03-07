const express = require("express");
const cors = require("cors");

const uploadRoute = require("./routes/uploadResume");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/upload-resume", uploadRoute);

app.get("/", (req, res) => {
  res.send("Resume Parser API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});