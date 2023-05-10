const proff = require('./proff')

const getAllProff = async(req, res) => {
    const data = await proff.find()
    res.send({data})
}

module.exports = {getAllProff}
