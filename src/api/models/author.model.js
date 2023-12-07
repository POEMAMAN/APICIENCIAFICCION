const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const autoresSchema = new Schema(
    {
        author:{type:String,require:true},
        countrie:{type:String, require:true},
        books:[{type:Schema.Types.ObjectId,ref:"book"}]
    },{
        timestamps:true
    }
)

const Autor = mongoose.model("autor", autoresSchema);

module.exports = Autor;