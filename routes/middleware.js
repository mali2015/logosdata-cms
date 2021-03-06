var _ = require('lodash');


/**
	Initialises the standard view locals
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		// { label: 'Blog', key: 'blog', href: '/blog' },
		// { label: 'Gallery', key: 'gallery', href: '/gallery' },
		// { label: 'Contact', key: 'contact', href: '/contact' },
		{ label: '产品与服务', key: 'product', href: '/product' },
		{ label: '媒体报道', key: 'news', href: '/news' },
		{ label: '罗格宏观观察', key: 'observations', href: '/observations' },
		{ label: '招贤纳士', key: 'recruitments', href: '/recruitments', submenu: [{ label: '团队介绍', href: 'recruitments#teamintro' }, { label: '招聘岗位', href: 'recruitments#positions' }] },
		{ label: '关于我们', key: 'about', href: '/about', submenu: [{ label: '罗格简介', href: 'about' }, { label: '发展历程', href: 'about#history' }] }
	];
	res.locals.user = req.user;
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
