import "dotenv/config";
import express from "express";
import path from "path";

const app = express();

const PORT = process.env.PORT || 7004;

app.use(express.urlencoded({ extended: false, limit: "52428800" }));
app.use(express.json({ limit: "52428800" }));

app.use(express.static(path.join(__dirname + "/public")));

app.listen(PORT, (err) => {
  if (err) throw new console.log("Server not connect");
  console.log(`Server is running on http://${process.env.HOST}:${PORT}`);
});
