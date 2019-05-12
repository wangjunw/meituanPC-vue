import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const RecommendDishSchema = new Schema({
  items: [
    {
      img: { type: String },
      title: { type: String },
      price: { type: Number }
    }
  ],
  list: {
    type: Array,
    require: true
  }
});
export default mongoose.model('RecommendDish', RecommendDishSchema);
