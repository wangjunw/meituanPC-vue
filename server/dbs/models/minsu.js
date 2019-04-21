import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const MinsuSchema = new Schema({
  cityId: {
    type: Number,
    require: true,
    unique: true
  },
  list: [
    {
      productId: String,
      price: Number,
      hostAvatarUrl: String,
      title: String,
      rentType: Number,
      layoutRoom: Number,
      maxGuestNumber: Number,
      locationArea: {},
      starRating: Number,
      commentNumber: {},
      coverImage: String,
      favCount: Number,
      polid: String,
      dpPoild: String
    }
  ]
});

export default mongoose.model('Minsu', MinsuSchema);
