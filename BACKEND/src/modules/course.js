const mongoose = require("mongoose");


const CourseSchema = new mongoose.Schema({
        course_id:Number,
        course_name:String,
        faculty:String,
        stream:String,
        price:String
   
}

)
const Course = new mongoose.model("Course",CourseSchema);
module.exports = Course;
