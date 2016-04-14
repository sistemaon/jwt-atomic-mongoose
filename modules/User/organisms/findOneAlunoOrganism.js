'use strict';

require('../../../config/dbModels');
const Organism = require('./userOrganism');
const callback = require('./organelles/callback');
const query = { _id: '570de32b704144f6245b7788' };

Organism.findOne(query, callback);
//console.log(Organism.findOne(query, callback));
