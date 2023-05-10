const express = require('express')
const router = express.Router();
const writeDataCourse = require('./seed')
const {getAllCourses} = require('./controller')

router.get('/api/course' , getAllCourses)
writeDataCourse()

module.exports = router