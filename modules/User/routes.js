'use strict';

const express = require('express');
const Router = express.Router();

const Controller = require('./organisms/userOrganism');

const routes = [
    {
      action: 'create'
    , method: 'post'
    , path: '/'
    , callback: Controller.create
    }
  , {
      action: 'find'
    , method: 'get'
    , path: '/'
    , callback: Controller.find
    }
  , {
      action: 'findOne'
    , method: 'get'
    , path: '/:id'
    , callback: Controller.findOne
  }
  , {
      action: 'update'
    , method: 'put'
    , path: '/:id'
    , callback: Controller.update
  }
  , {
      action: 'delete'
    , method: 'delete'
    , path: '/:id'
    , callback: Controller.remove
  }
];

routes.forEach( route => {
  Router[route.method](route.path, route.callback);
});

module.exports = Router;

// const express = require('express');
// const router = express.Router();
//
// const userOrganism = require('./organisms/userOrganism');
// const Create = require('./brains/brainCreate')(userOrganism);
// const Find = require('./brains/brainFind')(userOrganism);
// const FindOne = require('./brains/brainFindOne')(userOrganism);
// const Update = require('./brains/brainUpdate')(userOrganism);
// const Remove = require('./brains/brainRemove')(userOrganism);
//
// router.get('/', Find);
// router.get('/:id', FindOne);
// router.post('/', Create);
// router.put('/:id', Update);
// router.delete('/:id', Remove);
//
// module.exports = router;
