const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect("mongodb+srv://user_tutorial:password_tutorial@prueba.9ezomvy.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, // This option is to suppress a deprecation warning for findByIdAndUpdate()
});

// Book model
const Book = mongoose.model("Book", {
  title: String,
  author: String,
  year: Number,
});

// Middleware
app.use(express.json());

// Routes
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/books", async (req, res) => {
  const { title, author, year } = req.body;
  const book = new Book({ title, author, year });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, { title, author, year }, { new: true });
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
