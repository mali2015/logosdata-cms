var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Observations Model
 * ==========
 */
var Observations = new keystone.List('Observations', {
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
Observations.add({
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

Observations.defaultColumns = 'title, state|20%, author, publishedAt|15%';
Observations.register();