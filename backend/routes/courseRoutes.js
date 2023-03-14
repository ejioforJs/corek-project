import express from 'express'
import Course from '../models/courseModel.js'

const courseRouter = express.Router()

courseRouter.get('/', async(req,res) => {
    const courses = await Course.find()
    res.send(courses)
})

courseRouter.get('/slug/:slug', async(req,res) => {
    const course = await Course.findOne({slug: req.params.slug})
    if(course) {
        res.send(course)
    }
    else{
        res.status(404).send({message: "Product not found"})
    }
})

courseRouter.post('/addCourse', async(req,res) => {
    const {name,
        slug,
        author, 
        category,
        price,
        image,
        image2, 
        rating,
        description,
        duration,
        skill_level,
        language,
        instructorImg1,
        instructorImg2,
        aka,
        instructorInfo} = req.body
        
        const newCourse = new Course({
            name,
        slug,
        author, 
        category,
        price,
        image,
        image2, 
        rating,
        description,
        duration,
        skill_level,
        language,
        instructorImg1,
        instructorImg2,
        aka,
        instructorInfo
        })
        await newCourse.save()
})

courseRouter.post('/removeCourse', async(req,res) => {
    const id = req.body.id
    await Course.deleteOne({_id: id})
})

export default courseRouter