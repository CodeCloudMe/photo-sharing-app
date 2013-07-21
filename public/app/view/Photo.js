Ext.define('Photo.view.Photo', {
    extend: 'Ext.form.Panel',
    xtype: 'photoform',
    requires: [
        'Photo.widget.Photo'
    ],
    config: {
        title: 'Photo',
        layout: 'vbox',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        ui: 'back',
                        text: 'back',
                        action: 'back'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Photo',
                style: 'padding-bottom: 1em; margin: 1em;',
                items: [
                    {
                        name: 'img',
                        xtype: 'photofield'
                    },
                    {
                        name: 'description',
                        xtype: 'textareafield',
                        labelAlign: 'top',
                        placeHolder: 'Add a caption.'
                    }
                ]
            },
            {
                xtype: 'button',
                style: 'margin: 1em 1em 2em',
                text: 'Save',
                action: 'save',
                ui: 'action'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    pack: 'right'
                },
                items: [
                    {
                        iconMask: true,
                        iconCls: 'trash',
                        action: 'delete'
                    }
                ]
            }
        ],
        control: {
            'button[action=save]': {
                tap: function()     {
                    this.fireEvent('save');
                }
            },
            'button[action=delete]': {
                tap: function() {
                    this.fireEvent('delete');
                }
            },
            'button[action=back]': {
                tap: function() {
                    this.fireEvent('back');
                }
            }
        }
    },

    setTitle: function(title) {
       this.down('titlebar').setTitle(title);
    },

    showDeleteButton: function(show) {
        this.down('button[action=delete]').setHidden(!show);
    }

});
