const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/mycourse")
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.error("DB error:", err));

const mycourse = require("./Model/CourseModel");

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await mycourse.find();
    res.json(courses);
  } catch (error) {
    console.error("GET ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});
app.post("/api/courses", async (req, res) => {
  try {
    const { title, duration } = req.body;
    if (!title || !duration) {
      return res.status(400).json({
        message: "title and duration are required",
      });
    }
    const course = new mycourse({ title, duration });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error("POST ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});
app.put("/api/courses/:id", async (req, res) => {
  try {
    const { title, duration } = req.body;

    const updatedCourse = await mycourse.findByIdAndUpdate(
      req.params.id,
      { title, duration },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(updatedCourse);
  } catch (err) {
    console.error("PUT ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

app.delete("/api/courses/:id", async (req, res) => {
  try {
    const course = await mycourse.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server is running on PORT ${PORT}`)
);
