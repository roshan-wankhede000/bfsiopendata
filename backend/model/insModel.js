let mongoose = require("mongoose")

let schema = mongoose.Schema({
    compony:{
        type: String,
    },
    hospital:{
        type: String,
    },
    address:{
        type: String,
    },
    state:{
        type: String
    },
    place:{
        type: String
    },
     pincode:{
        type: String
    }
})

module.exports = mongoose.model("data",schema)