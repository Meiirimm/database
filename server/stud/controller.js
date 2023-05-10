const Stud = require('./stud')
const fs = require('fs')
const path = require('path')

const createStud = async (req, res) => {
    if(req.file && 
        req.body.full_name && 
        req.body.course &&
        req.body.proff &&
        req.body.address &&
        req.body.email){
            await new Stud({
                full_name: req.body.full_name,
                course: req.body.course,
                proff: req.body.proff,
                address: req.body.address,
                email: req.body.email,
                image: `/images/stud/${req.file.filename}`, 
            }).save()
            res.redirect(`/admin/${req.user._id}`)
    }else{
        res.redirect('/new?error=1')
    }
}

const editStud = async(req, res) => {
    if(req.file && 
        req.body.full_name && 
        req.body.course &&
        req.body.proff &&
        req.body.address &&
        req.body.email){
            const studs = await Stud.findById(req.body.id)
            fs.unlinkSync(path.join(__dirname + '../../../public' + studs.image))
            studs.full_name = req.body.full_name;
            studs.course = req.body.course;
            studs.proff = req.body.proff;
            studs.address = req.body.address;
            studs.email = req.body.email;
            studs.image = `/images/stud/${req.file.filename}`;
            studs.save()
            res.redirect('/admin/' + req.user._id)
        }else{
            res.redirect(`/edit/${req.body.id}?error=1`)
        }
}

const deleteStud = async(req, res) => {
    const stud = await Stud.findById(req.params.id)
    if(stud){
        fs.unlinkSync(path.join(__dirname + '../../../public' + stud.image))
        await Stud.deleteOne({_id: req.params.id})
        res.status(200).send('ok')
    }else{
        res.status(404).send('Not found')
    }
}

module.exports = {
    createStud,
    editStud, 
    deleteStud
}