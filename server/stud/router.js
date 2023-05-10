const express = require('express')
const router = express.Router();
const {upload} = require('./multer')
const {createStud, editStud, deleteStud} = require('./controller')
const {isAuth} = require('../auth/middlewares')

router.post('/api/stud/new' , isAuth, upload.single('image'),  createStud)

router.post('/api/stud/edit' , isAuth, upload.single('image'),  editStud)

router.delete('/api/stud/:id' , isAuth,   deleteStud)

module.exports = router