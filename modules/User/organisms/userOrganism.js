'use strict';

const mongoose = require('mongoose');
// const alunoOrganism = require('../../Aluno/molecules/alunoMolecule');
// const Molecule = require('./../molecules/user');
const userOrganism = mongoose.model('users');

// const create = require('./organelles/create-action')(userOrganism);
// const find = require('./organelles/find-action')(userOrganism);
// const findOne = require('./organelles/findOne-action')(userOrganism);
// const update = require('./organelles/update-action')(userOrganism);
// const remove = require('./organelles/remove-action')(userOrganism);

const create = require('./organelles/createAction')(userOrganism);
const find = require('./organelles/findAction')(userOrganism);
const findOne = require('./organelles/findOneAction')(userOrganism);
const update = require('./organelles/updateAction')(userOrganism);
const remove = require('./organelles/removeAction')(userOrganism);

const userCrudCell = {
  create
, find
, findOne
, update
, remove
};

module.exports = userCrudCell;
