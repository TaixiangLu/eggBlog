const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(ctx,page);
    // await ctx.render('news/list.tpl', { list: newsList });
    ctx.body=newsList
  }

  async add() {
    const ctx = this.ctx;
    const doc = ctx.query.body;
    
    const newsList = await ctx.service.news.insert(ctx,doc);
    console.log( { list: newsList })
    // await ctx.render('news/list.tpl', { list: newsList });
    ctx.body=newsList
  }
}

module.exports = NewsController;
