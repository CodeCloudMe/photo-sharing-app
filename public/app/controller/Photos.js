Ext.define('Photo.controller.Photos', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            'main': 'main',
            'form': 'photoform',
            'feed': 'photofeed'
        },
        control: {
            'photofeed': {
                create: 'onCreate',
                detail: 'onDetail'
            },
            'photoform': {
                save: 'onSave',
                'delete': 'onDelete',
                back: 'onBack'
            }
        }
    },

    onCreate: function() {
        var me = this,
            form = me.getForm();

        form.setRecord(null);
        form.setTitle('');
        form.showDeleteButton(false);
        form.reset();
        this.showForm();
    },

    onDetail: function(record) {
        var me = this,
            form = me.getForm();

        form.setRecord(record);
        form.setTitle(record.get('description'));
        form.showDeleteButton(true);
        me.showForm();
    },

    onBack: function() {
        this.showFeed();
    },

    onSave: function() {
        var me = this,
            form = me.getForm(),
            values = form.getValues(),
            record = form.getRecord(),
            store = Ext.getStore('Photos');

        if (Ext.isEmpty(record)) {
            record = Ext.create('Photo.model.Photo');
            store.add(record);
        }

        Ext.Object.each(values, function(key, value) {
            record.set(key, value);
        });

        me.patchForMongo(record);
        store.sync();
        me.showFeed();
    },

    onDelete: function() {
        var me = this,
            form = me.getForm(),
            record = form.getRecord(),
            store = Ext.getStore('Photos');

        me.patchForMongo(record);
        store.remove(record);
        store.sync();
        me.showFeed();
    },

    showForm: function() {
        var me = this,
            main = me.getMain();

        main.animateActiveItem(me.getForm(), {
            type: 'slide',
            direction: 'left'
        });
    },

    showFeed: function() {
        var me = this,
            main = me.getMain();

        main.animateActiveItem(me.getFeed(), {
            type: 'slide',
            direction: 'right'
        });
    },

    patchForMongo: function(record) {
        var mongoId = record.get('_id');
        if (mongoId) {
            record.set('id', mongoId);
        }
    }

});
