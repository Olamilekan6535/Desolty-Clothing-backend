require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");
const connectDB = require("./config/db");

connectDB();

const products = [
  {
    name: "Black Hoodie",
    price: 45,
    image: "https://via.placeholder.com/200",
    description: "Comfy cotton hoodie",
    countInStock: 12,
  },
  {
    name: "Classic White Tee",
    price: 20,
    image: "https://via.placeholder.com/200",
    description: "Everyday wear",
    countInStock: 30,
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
