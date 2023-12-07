const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Book = require("../api/models/book.model");

const DB_URL = process.env.DBURL;

const arrayBooks =      
[
    {
      "title": "I, Robot",
      "publication_year": 1950,
      "collection": "Robot",
      "collection_index": 1,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
        "title": "The Complet Robot",
        "publication_year": 1982,
        "collection": "Robot",
        "collection_index": 2,
        "universe": "Foundation",
        "author": "Isaac Asimov"
      },
      {
        "title": "Robot´s Dreams",
        "publication_year": 1986,
        "collection": "Robot",
        "collection_index": 3,
        "universe": "Foundation",
        "author": "Isaac Asimov"
      },
      {
        "title": "Robot´s Visions",
        "publication_year": 1990,
        "collection": "Robot",
        "collection_index": 4,
        "universe": "Foundation",
        "author": "Isaac Asimov"
      },
      {
        "title": "I, Robot",
        "publication_year": 1950,
        "collection": "I, Robot",
        "collection_index": 1,
        "universe": "Foundation",
        "author": "Isaac Asimov"
      },
    {
      "title": "Foundation",
      "publication_year": 1951,
      "collection": "Foundation Trilogy",
      "collection_index": 1,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
      "title": "Foundation and Empire",
      "publication_year": 1952,
      "collection": "Foundation Trilogy",
      "collection_index": 2,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
      "title": "Second Foundation",
      "publication_year": 1953,
      "collection": "Foundation Trilogy",
      "collection_index": 3,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
      "title": "The Caves of Steel",
      "publication_year": 1954,
      "collection": "Robot Series",
      "collection_index": 1,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
      "title": "The Naked Sun",
      "publication_year": 1957,
      "collection": "Robot Series",
      "collection_index": 2,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
      "title": "The Robots of Dawn",
      "publication_year": 1983,
      "collection": "Robot Series",
      "collection_index": 3,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
      "title": "Foundation's Edge",
      "publication_year": 1982,
      "collection": "Foundation Trilogy",
      "collection_index": 4,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
      "title": "Foundation and Earth",
      "publication_year": 1986,
      "collection": "Foundation Trilogy",
      "collection_index": 5,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
      "title": "Prelude to Foundation",
      "publication_year": 1988,
      "collection": "Foundation Trilogy",
      "collection_index": 0,
      "universe": "Foundation",
      "author": "Isaac Asimov"
    },
    {
        "title": "Startide Rising",
        "publication_year": 1983,
        "collection": "Uplift Saga",
        "collection_index": 2,
        "universe": "Uplift",
        "author": "David Brin"
    },
    {
        "title": "The Uplift War",
        "publication_year": 1987,
        "collection": "Uplift Saga",
        "collection_index": 3,
        "universe": "Uplift",
        "author": "David Brin"
    },
    {
        "title": "Brightness Reef",
        "publication_year": 1995,
        "collection": "Uplift Trilogy",
        "collection_index": 1,
        "universe": "Uplift",
        "author": "David Brin"
    },
    {
        "title": "Infinity's Shore",
        "publication_year": 1996,
        "collection": "Uplift Trilogy",
        "collection_index": 2,
        "universe": "Uplift",
        "author": "David Brin"
    },
    {
        "title": "Heaven's Reach",
        "publication_year": 1998,
        "collection": "Uplift Trilogy",
        "collection_index": 3,
        "universe": "Uplift",
        "author": "David Brin"
    },
    {
        "title": "Sundiver",
        "publication_year": 1980,
        "collection": "Uplift Trilogy",
        "collection_index": 0,
        "universe": "Uplift",
        "author": "David Brin"
    },
    {
        "title": "The Postman",
        "publication_year": 1985,
        "collection": null,
        "collection_index": null,
        "universe": null,
        "author": "David Brin"
    },
    {
        "title": "Leviathan Wakes",
        "publication_year": 2011,
        "collection": "The Expanse",
        "collection_index": 1,
        "universe": "The Expanse",
        "author": "James S. A. Corey"
    },
    {
        "title": "Caliban's War",
        "publication_year": 2012,
        "collection": "The Expanse",
        "collection_index": 2,
        "universe": "The Expanse",
        "author": "James S. A. Corey"
    },
    {
        "title": "Abaddon's Gate",
        "publication_year": 2013,
        "collection": "The Expanse",
        "collection_index": 3,
        "universe": "The Expanse",
        "author": "James S. A. Corey"
    },
    {
        "title": "Cibola Burn",
        "publication_year": 2014,
        "collection": "The Expanse",
        "collection_index": 4,
        "universe": "The Expanse",
        "author": "James S. A. Corey"
    },
    {
        "title": "Nemesis Games",
        "publication_year": 2015,
        "collection": "The Expanse",
        "collection_index": 5,
        "universe": "The Expanse",
        "author": "James S. A. Corey"
    },
    {
        "title": "Babylon's Ashes",
        "publication_year": 2016,
        "collection": "The Expanse",
        "collection_index": 6,
        "universe": "The Expanse",
        "author": "James S. A. Corey"
    },
    {
        "title": "Persepolis Rising",
        "publication_year": 2017,
        "collection": "The Expanse",
        "collection_index": 7,
        "universe": "The Expanse",
        "author": "James S. A. Corey"
    },
    {
        "title": "Tiamat's Wrath",
        "publication_year": 2019,
        "collection": "The Expanse",
        "collection_index": 8,
        "universe": "The Expanse",
        "author": "James S. A. Corey"
    },
    {
        "title": "Leviathan Falls",
        "publication_year": 2022,
        "collection": "The Expanse",
        "collection_index": 9,
        "universe": "The Expanse",
        "author": "James S. A. Corey"
    },
    {
        "title": "Old Man's War",
        "publication_year": 2005,
        "collection": "Old Man's War Series",
        "collection_index": 1,
        "universe": "Old Man's War",
        "author": "John Scalzi"
    },
    {
        "title": "The Ghost Brigades",
        "publication_year": 2006,
        "collection": "Old Man's War Series",
        "collection_index": 2,
        "universe": "Old Man's War",
        "author": "John Scalzi"
    },
    {
        "title": "The Last Colony",
        "publication_year": 2007,
        "collection": "Old Man's War Series",
        "collection_index": 3,
        "universe": "Old Man's War",
        "author": "John Scalzi"
    },
    {
        "title": "Zoe's Tale",
        "publication_year": 2008,
        "collection": "Old Man's War Series",
        "collection_index": 4,
        "universe": "Old Man's War",
        "author": "John Scalzi"
    },
    {
        "title": "The Human Division",
        "publication_year": 2013,
        "collection": "Old Man's War Series",
        "collection_index": 5,
        "universe": "Old Man's War",
        "author": "John Scalzi"
    },
    {
        "title": "The End of All Things",
        "publication_year": 2015,
        "collection": "Old Man's War Series",
        "collection_index": 6,
        "universe": "Old Man's War",
        "author": "John Scalzi"
    },
    {
        "title": "Redshirts",
        "publication_year": 2012,
        "collection": null,
        "collection_index": null,
        "universe": null,
        "author": "John Scalzi"
    },
    {
        "title": "Lock In",
        "publication_year": 2014,
        "collection": "Lock In Series",
        "collection_index": 1,
        "universe": "Lock In",
        "author": "John Scalzi"
    },
    {
        "title": "The Collapsing Empire",
        "publication_year": 2017,
        "collection": "The Interdependency Series",
        "collection_index": 1,
        "universe": "The Interdependency",
        "author": "John Scalzi"
    },
    {
        "title": "The Consuming Fire",
        "publication_year": 2018,
        "collection": "The Interdependency Series",
        "collection_index": 2,
        "universe": "The Interdependency",
        "author": "John Scalzi"
    },
    {
        "title": "Dune",
        "publication_year": 1965,
        "collection": "Dune Chronicles",
        "collection_index": 1,
        "universe": "Dune",
        "author": "Frank Herbert"
    },
    {
        "title": "Dune Messiah",
        "publication_year": 1969,
        "collection": "Dune Chronicles",
        "collection_index": 2,
        "universe": "Dune",
        "author": "Frank Herbert"
    },
    {
        "title": "Children of Dune",
        "publication_year": 1976,
        "collection": "Dune Chronicles",
        "collection_index": 3,
        "universe": "Dune",
        "author": "Frank Herbert"
    },
    {
        "title": "God Emperor of Dune",
        "publication_year": 1981,
        "collection": "Dune Chronicles",
        "collection_index": 4,
        "universe": "Dune",
        "author": "Frank Herbert"
    },
    {
        "title": "Heretics of Dune",
        "publication_year": 1984,
        "collection": "Dune Chronicles",
        "collection_index": 5,
        "universe": "Dune",
        "author": "Frank Herbert"
    },
    {
        "title": "Chapterhouse: Dune",
        "publication_year": 1985,
        "collection": "Dune Chronicles",
        "collection_index": 6,
        "universe": "Dune",
        "author": "Frank Herbert"
    },
    {
        "title": "Dune: House Atreides",
        "publication_year": 1999,
        "collection": "Prelude to Dune",
        "collection_index": 1,
        "universe": "Dune",
        "author": "Frank Herbert"
    },
    {
        "title": "Dune: House Harkonnen",
        "publication_year": 2000,
        "collection": "Prelude to Dune",
        "collection_index": 2,
        "universe": "Dune",
        "author": "Frank Herbert"
    },
    {
        "title": "Dune: House Corrino",
        "publication_year": 2001,
        "collection": "Prelude to Dune",
        "collection_index": 3,
        "universe": "Dune",
        "author": "Frank Herbert"
    },
    {
        "title": "Dune: The Butlerian Jihad",
        "publication_year": 2002,
        "collection": "Legends of Dune",
        "collection_index": 1,
        "universe": "Dune",
        "author": "Frank Herbert"
    }     
    
  ]
    

mongoose.connect(DB_URL)
.then(async () => {
    const allBooks = await Book.find();
    if (allBooks.length > 0) {
        await Book.collection.drop();
        console.log("deleted books");
    }
})
.catch((error) => console.log("error deleting Books", error))
.then(async () => {
    const bookMap = arrayBooks.map((book) => new Book(book));
    await Book.insertMany(bookMap);
    console.log("books addins");
})
.catch((error) => console.log("error adding books",error))
.finally(() => mongoose.disconnect());