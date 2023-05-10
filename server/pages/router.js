const express = require('express')
const router = express.Router();
const courses = require('../course/course')
const proff = require('../proff/proff')
const Users = require('../auth/User')
const Stud = require('../stud/stud')



router.get('/' , async(req, res) => {
    const allCourses = await courses.find()
    res.render("index" , {courses: allCourses, user: req.user ? req.user : {}})
})

router.get('/login' , (req, res) =>{
    res.render("login", {user: req.user ? req.user : {}})
})

router.get('/register' , (req, res) => {
    res.render("register", {user: req.user ? req.user : {}})
})

router.get('/profile/:id' , async(req, res) => {
    const alluser = await Users.find()
    const user = await Users.findById(req.params.id)
    const studs = await Stud.find()
    res.render("profile", {alluser, loginUser: req.user, stud: studs, user: user})
    // if(user){
    //     res.render("profile", {alluser, user: user, loginUser: req.user, studs: studs, })
    // }else{
    //     res.redirect('/not-found')
    // }
})

router.get('/admin/:id' , async(req, res) => {
    const alluser = await Users.find()
    const user = await Users.findById(req.params.id)
    const studs = await Stud.find().populate("course" , "name").populate("proff" , "name")
    res.render("admin", {alluser, loginUser: req.user ? req.user : {}, user: user, studs: studs})
})


router.get('/new' , async(req, res) => {
    const allCourse = await courses.find()
    const allProff = await proff.find()
    res.render("new" , {course: allCourse, proff: allProff, user: req.user ? req.user : {}})
})


router.get('/edit/:id' , async(req, res) => {
    const allCourse = await courses.find()
    const allProff = await proff.find()
    const stud = await Stud.findById(req.params.id)
    res.render("edit" , {course: allCourse, proff: allProff, user: req.user ? req.user : {} , stud})
})


router.get('/not-found' , (req, res) => {
    res.render("notFound")
})

module.exports = router