exports.keys = "1111" 

// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://bj.lianjia.com/api/newhouserecommend?type=1&query=https%3A%2F%2Fbj.lianjia.com%2Fershoufang%2Fpg2%2F',
};

// recommended
exports.mongoose = {
  client: {
    url: 'mongodb://127.0.0.1/blog',
    options: {},
    // mongoose global plugins, expected a function or an array of function and options
    // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
  },
};