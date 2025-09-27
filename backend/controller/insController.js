
let path = require("path");
let fs = require("fs");
let inc = require("../model/insModel")
let csv = require("../model/cvsModel")


let addInsurance = async (req, res) => {
  try {
    let { compony, hospital, address, state, place, pincode } = req.body;

    await inc.create({
      compony, hospital, address, state, place, pincode
    });

    res.status(201).json({ message: "Insurance data saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save insurance data" });
  }
};

let getInsurance = async (req, res) => {
  try {
    let data = await inc.find()
    return res.status(200).json({ message: "Insurance Find successfully", data: data });
  } catch (err) {
    return res.status(500).json({ error: "Finding failed", details: err.message });
  }
}

// let adminAboutData = async (req, res) => {
//   try {
//     let { desc } = req.body;

//     if (!req.file) {
//       return res.status(400).json({ error: "CSV file is required" });
//     }

//     await csv.create({
//       desc,
//       csvfile: req.file.filename  // URL that matches express.static
//     });

//     res.status(201).json({ message: "About Data saved successfully" });
//   } catch (err) {
//     console.error("adminAboutData error:", err);
//     res.status(500).json({ error: "Failed to save about data" });
//   }
// };

let adminAboutData = async (req, res) => {
  try {
    let { desc } = req.body;
    let { csvfilelink } = req.body;

    await csv.create({
      desc,
      csvfilelink
    });

    res.status(201).json({ message: "About Data saved successfully" });
  } catch (err) {
    console.error("adminAboutData error:", err);
    res.status(500).json({ error: "Failed to save about data" });
  }
};


let aboutdata = async(req,res)=>{
  try{
    let data = await csv.find()
  return res.status(200).json({message:"Files Fetched Successfully", data:data})
  }catch(err){
    return res.status(500).json({message:err})
  }
}



// let downloadFile = async (req, res) => {
//   try {
//     const { filename } = req.params;
//     const filePath = path.join(__dirname, "../uploads", filename);

//     if (!fs.existsSync(filePath)) {
//       return res.status(404).json({ error: "File not found" });
//     }

//     res.download(filePath, filename); // Express built-in method
//   } catch (err) {
//     console.error("Download error:", err);
//     res.status(500).json({ error: "Failed to download file" });
//   }
// };



// module.exports = { addInsurance, getInsurance, adminAboutData, aboutdata, downloadFile }
module.exports = { addInsurance, getInsurance, adminAboutData, aboutdata }