const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionsSchema = new Schema(
    {
        nameCollection:{type:String,require:true},
        books:[{type:Schema.Types.ObjectId,ref:"book"}]
    },{
        timestamps:true
    }
)

const Collection = mongoose.model("saga", collectionsSchema);

module.exports = Collection;