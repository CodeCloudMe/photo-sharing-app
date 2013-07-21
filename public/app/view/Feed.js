/**
 * @class Photo.view.Feed
 * @extends Ext.Container
 * Description
 */
Ext.define('Photo.view.Feed', {
    extend: 'Ext.Container',
    xtype: 'photofeed',
    requires: [
        'Photo.store.Photos'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'titlebar',
                title: 'Photo Sharing'
            },
            {
                xtype: 'dataview',
                store: 'Photos',
                itemTpl: [
                    '<img src="{img}" width="100%">',
                    '<div class="description">',
                        '{description}',
                    '</div>'
                ],
                cls: 'feed',
                itemCls: 'feed-item',
                flex: 1
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    pack: 'center'
                },
                items: [
                    {
                        iconMask: true,
                        iconCls: 'camera',
                        action: 'showEdit'
                    }
                ]
            }
        ],
        control: {
            'button[action=showEdit]': {
                tap: function() {
                    this.fireEvent('create');
                }
            },
            'dataview': {
                itemtap: function(list, index, target, record) {
                    this.fireEvent('detail', record);
                }
            }
        }
    }

});
