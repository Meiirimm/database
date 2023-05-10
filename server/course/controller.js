const course = require('./course')

const getAllCourses = async(req, res) => {
    const data = await course.find()
    res.send({data})
}

module.exports = {getAllCourses}
