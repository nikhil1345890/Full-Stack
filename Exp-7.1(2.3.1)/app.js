import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

app.get("/api/products", (req, res) => res.json(products));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
