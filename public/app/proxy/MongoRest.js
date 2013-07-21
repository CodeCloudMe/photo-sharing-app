Ext.define('Photo.proxy.MongoRest', {
    extend: 'Ext.data.proxy.Rest',
    alias : 'proxy.mongorest',

    buildUrl: function(request) {
        var me        = this,
            operation = request.getOperation(),
            records   = operation.getRecords() || [],
            record    = records[0],
            model     = me.getModel(),
            idProperty= model.getIdProperty(),
            format    = me.getFormat(),
            url       = me.getUrl(request),
            params    = request.getParams() || {},
            id        = (record && !record.phantom) ? record.getId() : params[idProperty];

        // if (record) {
        //     id = record.raw['_id'];
        // }

        if (me.getAppendId() && id) {
            if (!url.match(/\/$/)) {
                url += '/';
            }
            url += id;
            delete params[idProperty];
        }

        if (format) {
            if (!url.match(/\.$/)) {
                url += '.';
            }

            url += format;
        }

        request.setUrl(url);

        return me.callParent([request]);
    }
});
