const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Collection = require("../api/models/collection.model");

const DB_URL = process.env.DBURL;

const arrayCollections =
    [
    {
        "nameCollection": "Robot",
        "books": ["6571858fb57506c24a2daaae","6571858fb57506c24a2daaaf","6571858fb57506c24a2daab0","6571858fb57506c24a2daaad"]
    },
    {
        "nameCollection": "I, Robot",
        "books": ["6571858fb57506c24a2daaad", "6571858fb57506c24a2daab1"]
    },
    {
        "nameCollection": "Foundation Trilogy",
        "books": ["6571858fb57506c24a2daab2","6571858fb57506c24a2daab3","6571858fb57506c24a2daab4","6571858fb57506c24a2daab8","6571858fb57506c24a2daab9"]
    },
    {
        "nameCollection": "Robot Series",
        "books": ["6571858fb57506c24a2daab5","6571858fb57506c24a2daab6","6571858fb57506c24a2daab7"]
    },
    {
        "nameCollection": "Uplift Saga",
        "books": ["6571858fb57506c24a2daabb","6571858fb57506c24a2daabc"]
    },
    {
        "nameCollection": "Uplift Trilogy",
        "books": ["6571858fb57506c24a2daabd","6571858fb57506c24a2daabe","6571858fb57506c24a2daabf","6571858fb57506c24a2daac0"]
    },
    {
        "nameCollection": null,
        "books": ["6571858fb57506c24a2daac1","6571858fb57506c24a2daad1"]
    },
    {
        "nameCollection": "The Expanse",
        "books": ["6571858fb57506c24a2daac2","6571858fb57506c24a2daac3","6571858fb57506c24a2daac4","6571858fb57506c24a2daac5","6571858fb57506c24a2daac6", "6571858fb57506c24a2daac7","6571858fb57506c24a2daac8","6571858fb57506c24a2daac9","6571858fb57506c24a2daaca"]
    },
    {
        "nameCollection": "Old Man's War Series",
        "books": ["6571858fb57506c24a2daacb","6571858fb57506c24a2daacc","6571858fb57506c24a2daacd","6571858fb57506c24a2daace","6571858fb57506c24a2daacf","6571858fb57506c24a2daad0"]
    },
    {
        "nameCollection": "Lock In Series",
        "books": "6571858fb57506c24a2daad2",
    },
    {
        "nameCollection": "The Interdependency Series",
        "books": ["6571858fb57506c24a2daad3","6571858fb57506c24a2daad4"]
    },
    {
        "nameCollection": "Dune Chronicles",
        "books": ["6571858fb57506c24a2daad5","6571858fb57506c24a2daad6","6571858fb57506c24a2daad7","6571858fb57506c24a2daad8","6571858fb57506c24a2daad9","6571858fb57506c24a2daada"]
    },
    {
        "nameCollection": "Prelude to Dune",
        "books": ["6571858fb57506c24a2daadb","6571858fb57506c24a2daadc","6571858fb57506c24a2daadd","6571858fb57506c24a2daade"]
    },
]


mongoose.connect(DB_URL)
    .then(async () => {
        const allCollections = await Collection.find();
        if (allCollections.length > 0) {
            await Collection.collection.drop();
            console.log("deleted collections");
        }
    })
    .catch((error) => console.log("error deleting Collections", error))
    .then(async () => {
        const CollectionMap = arrayCollections.map((collection) => new Collection(collection));
        await Collection.insertMany(CollectionMap);
        console.log("Collections addins");
    })
    .catch((error) => console.log("error adding Collections", error))
    .finally(() => mongoose.disconnect());