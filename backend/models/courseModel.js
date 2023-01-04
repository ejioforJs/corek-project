import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    slug: {type: String, required: true},
    author: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    image2: {type: String, required: true},
    rating: {type: [Number], required: true},
    description: {type: String, required: true},
    duration: {type: String, required: true},
    skill_level: {type: String, required: true},
    language: {type: String, required: true},
    instructorImg1: {type: String, required: true},
    instructorImg2: {type: String, required: true},
    aka: {type: String, required: true},
    instructorInfo: {type: String, required: true}
}, {
    timestamps: true
})

const Course = mongoose.model('Course', courseSchema)

export default Course

