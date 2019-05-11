import mongooes from 'mongoose';
const Schema = mongooes.Schema;
const ListSchema = new Schema({
  poild: {
    type: Number
  },
  title: {
    type: String
  },
  avgScore: {
    type: Number
  },
  allCommentNum: {
    type: Number
  },
  address: {
    type: String
  },
  avgPrice: {
    type: Number
  },
  frontImg: {
    type: String
  },
  dealList: {
    type: Array
  },
  hasAds: {
    type: Boolean
  },
  adsClickUrl: {
    type: String
  },
  adsShowUrl: {
    type: String
  }
});
export default mongooes.model('list', ListSchema);
