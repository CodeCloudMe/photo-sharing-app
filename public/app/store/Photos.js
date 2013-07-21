/**
 * @class Photo.store.Photos
 * @extends Ext.data.Store
 */
Ext.define('Photo.store.Photos', {
    extend: 'Ext.data.Store',
    requires: [
        'Photo.proxy.MongoRest'
    ],

    config: {
        model: 'Photo.model.Photo',
        proxy: {
            // type: 'localstorage',
            // id: 'photo'
            type: 'rest',
            url: '/photos'
        },
        autoLoad: true
    }

    // initialize: function() {
    //     this.on('load', function(me, records) {
    //         records.forEach(function(record) {
    //             var id = record.get('id'),
    //                 mongoId = record.get('_id');
    //             if (id !== mongoId) {
    //                 console.log(mongoId);
    //                 record.set('id', mongoId);
    //             }
    //         });
    //     });
    // }

});
