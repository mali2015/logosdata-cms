var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Recruitments Model
 * ==========
 */
var Recruitments = new keystone.List('Recruitments', {
    map: {
        name: 'department'
    },
    defaultSort: '-createdAt'
});
Recruitments.add({
    title: {
        type: String,
        require: true
    },
    state: {
        type: Types.Select,
        options: 'draft, published, archived',
        default: 'draft',
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require: true
    },
    publishedAt: Date,
    department: {
        type: Types.Select,
        options: '产品部, 技术部, 市场部, 其他',
        default: 'draft',
        require: true
    },
    workplace: {
        type: String,
        require: true
    },
    positionDes: {
        type: Types.Textarea,
        require: true
    },
    qualifications: {
        type: Types.Textarea,
        require: true
    }
});

Recruitments.defaultColumns = 'title, state|20%, author, publishedAt|15%';
Recruitments.register();