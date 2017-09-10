var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * News Model
 * ==========
 */
var News = new keystone.List('News', {
    map: {
        name: 'title'
    },
    autokey: {
        path: 'slug',
        from: 'title',
        unique: true
    },
    defaultSort: '-createdAt'
});
News.add({
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
    author: {
        type: Types.Relationship,
        ref: 'User',
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require: true
    },
    publishedAt: Date,
    url: {
        type: Types.Url,
        require: true
    }
});

News.defaultColumns = 'title, state|20%, author, publishedAt|15%';
News.register();