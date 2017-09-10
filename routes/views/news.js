var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'news';
	locals.data = {
		news: [],
	};

	locals.title = '媒体报道';
	locals.keywords = '税收大数据,税务大数据,互联网,云计算,人工智能';
	locals.description = '北京罗格数据科技有限公司是一家专业从事税收大数据的预测分析和决策管理的创新型公司。我们基于大数据、云计算和人工智能技术创建了具有自主知识产权的税收大数据量化分析模型和风险动态评估体系，将深度满足政府、金融、咨询、企业等客户预测分析、决策管理产品的服务需求。';

	view.on('init', function (next) {

		var q = keystone.list('News').model.find().where('state', 'published').sort('-publishedDate');

		q.exec(function (err, results) {
			locals.data.news = results;
			next(err);
		});
	});

	// Render the view
	view.render('news');
};
