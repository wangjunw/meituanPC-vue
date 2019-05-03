import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const RecentCitySchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  recentCitise: {
    type: Array,
    require: true
  }
});
export default mongoose.model('recentCity', RecentCitySchema);
