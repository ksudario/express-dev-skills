const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update: updateSkill
};

function updateSkill (req, res) {
    Skill.updateOne(req.params.id, req.body.newText);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    req.body.acquired = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
}

function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1

    });
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}