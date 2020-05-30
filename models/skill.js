module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
};

const skills = [
    {text: 'JavaScript', acquired: true},
    {text: 'jQuery', acquired: true},
    {text: 'Pyton', acquired: false},
];

function updateOne(id, newText) {
    skills[id].text = newText;
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getOne(id) {
    return skills[id];
}

function getAll() {
    return skills;
}