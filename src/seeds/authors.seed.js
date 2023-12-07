const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Author = require("../api/models/author.model");

const DB_URL = process.env.DBURL;

const arrayAuthors =      
[
    {
    "author": "Isaac Asimov",
    "countrie": "United States",
    "books": ["6571858fb57506c24a2daaad","6571858fb57506c24a2daaae", "6571858fb57506c24a2daaaf", "6571858fb57506c24a2daab0", "6571858fb57506c24a2daab1", "6571858fb57506c24a2daab2", "6571858fb57506c24a2daab3", "6571858fb57506c24a2daab4", "6571858fb57506c24a2daab5", "6571858fb57506c24a2daab6", "6571858fb57506c24a2daab7","6571858fb57506c24a2daab8","6571858fb57506c24a2daab9", "6571858fb57506c24a2daaba"]
    },
    {
    "author": "David Brin",
    "countrie": "United States",
    "books": ["6571858fb57506c24a2daabb","6571858fb57506c24a2daabc","6571858fb57506c24a2daabd","6571858fb57506c24a2daabe","6571858fb57506c24a2daabf","6571858fb57506c24a2daac0","6571858fb57506c24a2daac1"]
    },
    {
    "author": "James S. A. Corey",
    "countrie": "United States",
    "books": ["6571858fb57506c24a2daac2","6571858fb57506c24a2daac3", "6571858fb57506c24a2daac4", "6571858fb57506c24a2daac5","6571858fb57506c24a2daac6","6571858fb57506c24a2daac7","6571858fb57506c24a2daac8","6571858fb57506c24a2daac9","6571858fb57506c24a2daaca"]
    },
    {
    "author": "John Scalzi",
    "countrie": "United States",
    "books": ["6571858fb57506c24a2daacb","6571858fb57506c24a2daacc","6571858fb57506c24a2daacd","6571858fb57506c24a2daace","6571858fb57506c24a2daacf","6571858fb57506c24a2daad0","6571858fb57506c24a2daad1","6571858fb57506c24a2daad2","6571858fb57506c24a2daad3", "6571858fb57506c24a2daad4"]
    },
    {
    "author": "Frank Herbert",
    "countrie": "United States",
    "books": ["6571858fb57506c24a2daaad", "6571858fb57506c24a2daaae", "6571858fb57506c24a2daaaf", "6571858fb57506c24a2daab0", "6571858fb57506c24a2daab1", "6571858fb57506c24a2daab2", "6571858fb57506c24a2daab3", "6571858fb57506c24a2daab4", "6571858fb57506c24a2daab5", "6571858fb57506c24a2daab6", "6571858fb57506c24a2daab7","6571858fb57506c24a2daab8","6571858fb57506c24a2daab9", "6571858fb57506c24a2daaba"]
    }
]


mongoose.connect(DB_URL)
.then(async () => {
    const allAuthors = await Author.find();
    if (allAuthors.length > 0) {
        await Author.collection.drop();
        console.log("deleted authors");
    }
})
.catch((error) => console.log("error deleting Authors", error))
.then(async () => {
    const AuthorMap = arrayAuthors.map((author) => new Author(author));
    await Author.insertMany(AuthorMap);
    console.log("authors addins");
})
.catch((error) => console.log("error adding authors",error))
.finally(() => mongoose.disconnect());