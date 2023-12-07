const mongoose = require("mongoose");

const MONGODB = process.env.DBURL;
const connect = async () => {
    try{
        const db = await mongoose.connect(MONGODB)
        const {name,host} = db.connection;
        console.log (`conectado a ${name}DB en host ${host}`);
    }
    catch (error){
        console.log("error conectado a nuestra BBDD", error)
    }
}

module.exports = {connect}