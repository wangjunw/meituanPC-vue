import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let GuesslikeSchema = new Schema({
  data: [
    {
      itemId: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      imgUrl: {
        type: String,
        required: true
      },
      consumeNum: {},
      areaName: {
        type: String,
        required: true
      },
      lowPrice: {
        type: String,
        required: true
      },
      saleNum: {},
      commentNum: { type: Number },
      detailUrl: { type: String },
      firstCate: { type: Object },
      avgPrice: { type: Number }
    }
  ]
});
export default mongoose.model('Guesslike', GuesslikeSchema);
