Ext.define('C.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'C.model.Entry'
    ],

    data: {
        form: {
            formTitle: 'Entry Form',
        },
        fields: {
            name: {
                fieldLabel:'The Name:'
            },
            title: {
                fieldLabel:'The Title:'
            }
        },
        name: 'Simple Dummy CRUD Demo',
        gridTitle: 'Entry Grid',
        infoTitle: 'Information',

        addBtnText: 'Add new entry',
        delBtnText: 'Delete entry',

        infoText: '<h2>Basic Information</h2>' +
            'The applications shows basic CRUD functionality on an Ext.Store with memory proxy. ' +
            'Store\'s data is hardcoded inside the viewModel.' +
            '<h2>Usage</h2>' +
            'In order to edit a record, click on a grid row. ' +
            'Then edit the record within the form. ' +
            'If you press Cancel your changes will be lost.' +
            'To add new record, click "Add new entry button" and do the same as with records to be updated.',
        currentEntry: null
    },

    stores: {
        entries: {
            model: 'Entry',
            autoLoad: true
        }
    }

});
