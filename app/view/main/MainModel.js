Ext.define('C.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
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
            autoLoad: true
        }
    }

});
