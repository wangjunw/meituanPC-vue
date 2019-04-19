import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const MtnavSchema = new Schema({
  data: [
    {
      title: {
        type: String,
        require: true
      },
      list: [
        {
          name: {
            type: String,
            require: true
          },
          isHot: {
            type: Boolean,
            require: true
          }
        }
      ]
    }
  ]
});
export default mongoose.model('Mtnav', MtnavSchema);
