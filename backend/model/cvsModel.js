let mongoose = require("mongoose")

let csvShema = mongoose.Schema({
    desc:{
        type:String
    },    
    csvfilelink:{
        type:String
    }
})

module.exports = mongoose.model("csvFile",csvShema)