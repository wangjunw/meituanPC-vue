import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const recommendplaceSchema = new Schema({
  id: {
    type: String,
    unique: true, //唯一的
    require: true //必须的
  },
  name: {
    type: String,
    require: true
  },
  place: [
    {
      id: {
        type: String,
        require: true
      },
      name: {
        type: String,
        require: true
      }
    }
  ]
});
export default mongoose.model('Recommendplace', recommendplaceSchema);
