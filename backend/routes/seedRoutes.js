import data from '../data.js'
import Course from '../models/courseModel.js'
import express from 'express'

const seedRouter = express.Router()

seedRouter.get('/', async (req,res) => {
    await Course.deleteMany({})
    const createdCourses = await Course.insertMany(data.courses)
    res.send(createdCourses)
})

export default seedRouter