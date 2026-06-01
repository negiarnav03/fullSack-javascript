import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

let data = null;

// ✅ Load JSON properly
const recipes = JSON.parse(
  fs.readFileSync("./recipe.json", "utf-8")
);

// 👉 Serve HTML
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

// 👉 API route
app.post("/api/recipe", (req, res) => {
  const choice = req.body.choice;

  switch (choice) {
    case "chicken":
      data = recipes[0];
      break;
    case "beef":
      data = recipes[1];
      break;
    case "fish":
      data = recipes[2];
      break;
  }

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});