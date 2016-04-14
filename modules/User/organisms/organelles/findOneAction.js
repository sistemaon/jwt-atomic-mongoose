'use strict';

const mongoose = require('mongoose');
// require('../../../Aluno/molecules/alunoMolecule');
module.exports = (Organism) => {
  const callback = require('./callbackExpressAction');
  return (query, callback) => {

    Organism
      .findOne(query)
      .lean()
      .exec( (err, data) => {
        if(err) return console.log('ERRO', err);

        mongoose.model('users')
          .findOne({ _id: data.user_id })
          //.findOne({ _id: data })

          // .populate('user_id')
          // .populate('aluno_id')
          //.populate('data', ['data.user_id'])
          .lean()
          .exec( (err, sub) => {
            data['user'] = sub;
            callback(err, data);
          });
      });
    }
};

// post.save(function(error) {
//     if (!error) {
//         Post.find({})
//             .populate('postedBy')
//             .populate('comments.postedBy')
//             .exec(function(error, posts) {
//                 console.log(JSON.stringify(posts, null, "\t"))
//             })
//     }
// });
// Story
// .findOne({ title: 'Once upon a timex.' })
// .populate('_creator')
// .exec(function (err, story) {
//   if (err) return handleError(err);
//   console.log('The creator is %s', story._creator.name);
//   // prints "The creator is Aaron"
// });
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
