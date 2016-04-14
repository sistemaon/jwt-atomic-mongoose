'use strict';

const mongoose = require('mongoose');
const alunoOrganism = mongoose.model('alunos');

const create = require('./organelles/createAction')(alunoOrganism);
const find = require('./organelles/findAction')(alunoOrganism);
const findOne = require('./organelles/findOneAction')(alunoOrganism);
const update = require('./organelles/updateAction')(alunoOrganism);
const remove = require('./organelles/removeAction')(alunoOrganism);

const alunoCell = {
  create
, find
, findOne
, update
, remove
};

module.exports = alunoCell;
