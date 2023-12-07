const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const universesSchema = new Schema(
    {
        nameUniverse:{type:String,require:true},
        collection:[{type:Schema.Types.ObjectId,ref:"saga"}]
    },{
        timestamps:true
    }
)

const Universe = mongoose.model("universe", universesSchema);

module.exports = Universe;