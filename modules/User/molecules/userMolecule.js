const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userMolecule = {
  aluno_id: require('../atoms/alunoRef')(Schema)
, email: require('../atoms/email')
, password: require('../atoms/password')
}

module.exports = new Schema(userMolecule);
