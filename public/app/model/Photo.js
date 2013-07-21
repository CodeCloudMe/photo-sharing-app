Ext.define('Photo.model.Photo', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'img', type: 'string' },
            { name: '_id', type: 'string' }
        ],
        identifier: 'uuid'
    }

});
