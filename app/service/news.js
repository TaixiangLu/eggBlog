const Service = require('egg').Service;

class NewsService extends Service {
  async list(ctx,page = 1) {
    const newsList = await ctx.model.News.find({});
    console.log(newsList)
    return newsList;
  }
}

module.exports = NewsService;
