Ext.define('Photo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        layout: 'card',
        items: [
            {
                xtype: 'photofeed'
            },
            {
                xtype: 'photoform'
            }
        ]
    }
});
