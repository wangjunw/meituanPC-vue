import mongoose from 'mongoose';
const Scheme = mongoose.Schema;
const menuScheme = new Scheme({
  menu: [
    {
      name: {
        type: String,
        unique: true,
        require: true
      },
      type: {
        type: String,
        require: true
      },
      child: [
        {
          title: {
            type: String,
            require: true
          },
          child: {
            type: [String]
          }
        }
      ]
    }
  ]
});
export default mongoose.model('Menu', menuScheme);
