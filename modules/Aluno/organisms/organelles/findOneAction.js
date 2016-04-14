'use strict';

module.exports = (Organism) => {
  return (obj, callback) => {
    const arr       = require('../../../helpers/prepareDocMongoose')(Organism);
    const Refs      = require('../../../helpers/findRefMongoose')(arr);
    const Populate  = require('../../../helpers/runPopulateMongoose');

    Organism.findOne(obj).lean().exec( (err, data) => {
      if(err) return console.log('ERRO', err);
      if(Object.keys(Refs).length) return Populate.run(data, Refs, callback);
    });
  }
};

// 'use strict';
//
// module.exports = (Organism) => {
//
//   const callbackExpress = require('./callbackExpressAction');
//
//   return (req, res) => {
//     let query = { _id: req.params.id };
//
//     Organism.findOne(query, (err, data) => {
//       callbackExpress(err, data, res);
//     });
//   };
// };
