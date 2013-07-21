/**
 * @class Photo.widget.Photo
 * @extends Ext.Component
 * Photo widget
 */
Ext.define('Photo.widget.Photo', {
    extend: 'Ext.Component',
    xtype: 'photofield',
    config: {
        name: '',
        value: '',
        style: 'padding: .5em;'
    },
    template: [
        {
            tag: 'img',
            reference: 'imgElement',
            width: '100%',
            hidden: true,
            style: 'margin: 0 0 .5em; border-radius: .3em; box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);'
        },
        {
            tag: 'input',
            reference: 'fileElement',
            type: 'file',
            accept: 'image/*',
            hidden: true
            // style: 'opacity:0; position: absolute; width: 100%; height: 44px;'
        },
        {
            tag: 'div',
            reference: 'iconElement',
            html: 'P',
            style: 'font-family: "Pictos"; text-align: center; font-size: 2em;',
            hidden: true
        }
    ],
    isField: true,

    initialize: function() {
        var me = this,
            fileElem = me.fileElement.dom;

        fileElem.onchange = function() {
            me.onChanged.apply(me, arguments);
        };

        me.element.on('tap', function() {
            me.fileElement.dom.click();
        });
    },

    onChanged: function(e) {
        var me = this,
            files = e.target.files;

        var reader = new FileReader();

        reader.onerror = function(e) {
            Ext.Msg.alert(msg('SD.Error.Title'), msg('SD.FIleUpload.Error.Load'));
        };

        reader.onload = function(e) {
            var value = this.result;
            me.setValue(value);
            me.showPreview(value);
        };

        reader.readAsDataURL(files[0]);
    },

    showPreview: function(data) {
        var me = this,
            elem = me.imgElement.dom;

        elem.src = data;
        // elem.style.display = 'block';
    },

    updateValue: function(value) {
        var me = this;
        me.showPreview(value);
        me.displayElement();
    },

    displayElement: function() {
        var me = this,
            hasValue = Ext.isEmpty(me.getValue()) === false;

        me.iconElement.dom.style.display = hasValue ? 'none' : 'block';
        me.imgElement.dom.style.display = hasValue ? 'block' : 'none';
    },

    reset: function() {
        var me = this,
            elem = me.imgElement.dom;

        me.setValue('');
        elem.innerHTML = elem.innerHTML;
        me.displayElement();
    }

});
