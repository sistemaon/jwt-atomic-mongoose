const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Curso = require('./curso');

const alunoMolecule = {
  user_id: require('../atoms/userRef')(Schema)
, name: require('../atoms/name')
//, dateBirth: require('../atoms/dateBirth')
//, cursos: [Curso]
}

module.exports = new Schema(alunoMolecule);
