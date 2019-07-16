// {app_root}/app/model/user.js
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const NewsSchema = new Schema({
    url: { type: String  },
    title: { type: String  },
  });

  return mongoose.model('News', NewsSchema);
}

// {app_root}/app/controller/user.js
// exports.index = function* (ctx) {
//   ctx.body = yield ctx.model.User.find({});
// }