var keystone = require('keystone');
var middleware = require('./middleware');
var getrecruits = require('./api/getrecruits');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);
	// app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);
	app.get('/news', routes.views.news);
	app.get('/observations', routes.views.observations);
	app.get('/recruitments', routes.views.recruitments);
	app.get('/about', routes.views.about);
	app.get('/product', routes.views.product);
	app.get('/getrecruits', getrecruits);
};
