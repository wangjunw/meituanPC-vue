import mongooes from 'mongoose';
const Schema = mongooes.Schema;
const CategorySchema = new Schema({
  city: {
    type: String,
    require: true
  },
  types: [
    {
      type: {
        type: String
      },
      module: {
        type: [String]
      }
    }
  ],
  areas: [
    {
      type: {
        type: String
      },
      module: {
        type: [String]
      }
    }
  ]
});
export default mongooes.model('category', CategorySchema);
