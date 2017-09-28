var keystone = require('keystone');
var recruitTpl = require('./../../templates/views/partials/recruititem.hbs');
exports = module.exports = function(req, res) {
    var q;
    if (req.query.type === 'all') {
        q = keystone.list('Recruitments').model.find().where('state', 'published').sort('-createdAt');
    } else {
        var typestr;
        switch (req.query.type) {
            case 'pro':
                typestr = '产品部';
                break;
            case 'tec':
                typestr = '技术部';
                break;
            case 'mak':
                typestr = '市场部';
                break;
            case 'oth':
                typestr = '其他';
                break;
            default:
                break;
        }
        q = keystone.list('Recruitments').model.find().where('state', 'published').where('department', typestr).sort('-createdAt');
    }
    q.exec(function(err, results) {
    	res.send(recruitTpl({data: results}));
    });
}