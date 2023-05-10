const express = require('express')
const router = express.Router();
const writeDataProff = require('./seed')
const {getAllProff} = require('./controller')

router.get('/api/course' , getAllProff)
writeDataProff()

module.exports = router