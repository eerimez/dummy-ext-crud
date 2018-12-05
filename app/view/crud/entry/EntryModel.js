Ext.define('C.view.crud.entry.EntryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.crud-entry',
    requires: [
        'C.model.Entry'
    ],

    data: {
        form: {
            formTitle: 'Entry Form',
            saveBtnText: 'Save it',
            cancelBtnText: 'Cancel it'
        },
        grid: {
            title: 'Entry Grid',
            name: 'Simple Dummy CRUD Demo',

            addBtnText: 'Add new entry',
            delBtnText: 'Delete entry',
        },
        columns: {
            id: {
                text: 'Identifier',
                width: 40
            },
            name: {
                text: 'The Name',
                width: 120,
                editor: 'textfield'
            },
            description: {
                text: 'The Desc',
                width: 120,
                flex: 1,
                editor: 'textfield'
            },
            date: {
                text: 'The Date',
                width: 100,
                format: 'Y-M-d',
                editor: 'textfield'
            }
        },
        fields: {
            id: {
                fieldLabel:'ID:'
            },
            name: {
                fieldLabel:'The Name:'
            },
            title: {
                fieldLabel:'The Title:'
            },
            description: {
                fieldLabel:'The Description:'
            },
            date: {
                fieldLabel:'The Date:'
            }
        },

        currentEntry: null
    },

    stores: {
        entries: {
            model: 'Entry',
            autoLoad: true,
            remoteFilter: true
        }
    }

});
