const mongoose=require("mongoose")
const courseSchema=new mongoose.Schema({
    title:{type:String, required:true},
    duration:{type:String, required: true}
});
exports.model=mongoose.model("mycourse", courseSchema);