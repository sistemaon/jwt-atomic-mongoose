module.exports = (Schema) => {
  return { type: Schema.Types.ObjectId, ref: 'alunos' };
};
