Ext.define('C.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'mainform',
    autoScroll: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: 5,
    config: {
        currentEntry: null
    },
    bind:{
        currentEntry:'{currentEntry}'
    },
    defaults: {
        anchor: '100%',
        allowBlank: true,
        msgTarget: 'under'
    },
    items: [{
        name: 'id',
        xtype: 'displayfield',
        bind: {
            fieldLabel: '{fields.id.fieldLabel}',
            value: '{currentEntry.id}'
        }
    }, {
        name: 'name',
        xtype: 'textfield',
        bind: {
            fieldLabel: '{fields.name.fieldLabel}',
            value: '{currentEntry.name}'
        }
    }, {
        name: 'title',
        xtype: 'textfield',
        bind: {
            fieldLabel: '{fields.title.fieldLabel}',
            value: '{currentEntry.title}'
        }
    }, {
        name: 'description',
        xtype: 'textareafield',
        bind: {
            fieldLabel: '{fields.description.fieldLabel}',
            value: '{currentEntry.description}'
        },
        flex: 1
    }, {
        name: 'date',
        xtype: 'datefield',
        format: 'Y-m-d',
        bind: {
            fieldLabel: '{fields.date.fieldLabel}',
            value: '{currentEntry.date}'
        }
    }],
    buttons: [{
        bind: {
            text: '{form.saveBtnText}'
        },
        action: 'save',
        handler:'onFormBtnClick'
    }, {
        bind: {
            text: '{form.cancelBtnText}'
        },
        action: 'cancel',
        handler:'onFormBtnClick'
    }]
});
