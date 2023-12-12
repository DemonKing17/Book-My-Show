const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sundernadar12:n306ib6Askqetq95@mongod-bdemo.j8yzhai.mongodb.net/school?retryWrites=true&w=majority"
  )
  .then(console.log("DB has been connected successfully"))
  .catch((err) => console.log(err.message));

const studentSchema = new mongoose.Schema({
  name: String,
  city: String,
  courses: Array,
  isMarried: Boolean,
  age: Number,
});

const Student = mongoose.model("Student", studentSchema);

//creating record in student
// Student.create({
//   name: "bunder",
//   city: "mumbai",
//   courses: ["CSS", "English", "MBA"],
//   isMarried: false,
//   age: 22,
// })
//   .then((student) => console.log(student))
//   .catch((err) => console.log(err));

// find all students
Student.find()
  .then((students) => console.log(students))
  .catch((err) => console.log(err));

Student.find({ age: 22 })
  .then((students) => console.log(students))
  .catch((err) => console.log(err));
