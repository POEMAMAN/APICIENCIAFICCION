const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Universe = require("../api/models/universe.model");

const DB_URL = process.env.DBURL;

const arrayUniverses =
    [
        {
            "nameUniverse:": "Foundation",
            "collection": ["6571af00fdd229044a22839c","6571af00fdd229044a22839b",,"6571af00fdd229044a22839a","6571af00fdd229044a22839d"]
        },
        {
            "nameUniverse:": "Uplift",
            "collection": ["6571af00fdd229044a22839e","6571af00fdd229044a22839f"]
        },
        {
            "nameUniverse:": "The Expanse",
            "collection": "6571af00fdd229044a2283a1"
        },
        {
            "nameUniverse:": "Old Man's War",
            "collection": "6571af00fdd229044a2283a2"
        },
        {
            "nameUniverse:": "Lock In",
            "collection": "6571af00fdd229044a2283a3"
        },
        {
            "nameUniverse:": "The Interdependency",
            "collection":  "6571af00fdd229044a2283a4"
        },
        {
            "nameUniverse:": "Dune",
            "collection": ["6571af00fdd229044a2283a5",  "6571af00fdd229044a2283a6"]
        }
    ]


mongoose.connect(DB_URL)
    .then(async () => {
        const allUniverses = await Universe.find();
        if (allUniverses.length > 0) {
            await Universe.collection.drop();
            console.log("deleted authors");
        }
    })
    .catch((error) => console.log("error deleting Universes", error))
    .then(async () => {
        const UniverseMap = arrayUniverses.map((universe) => new Universe(universe));
        await Universe.insertMany(UniverseMap);
        console.log("Universes addins");
    })
    .catch((error) => console.log("error adding Universes", error))
    .finally(() => mongoose.disconnect());