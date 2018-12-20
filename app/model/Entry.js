Ext.define('C.model.Entry', {
    extend: 'Ext.data.Model',
    idProperty: "id",
    schema: {
        namespace: "C.model"
    },
    identifier: {
        type: 'sequential',
        seed: 4
    },
    proxy: {
        type: 'ajax',
        url: '/resources/entries.json',
        reader: {
        type: 'json',
            rootProperty: 'data'
        }
    },
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'name',
            type: 'auto'
        }, {
            name: 'title',
            type: 'auto'
        }, {
            name: 'description',
            type: 'auto'
        }, {
            name: 'date',
            type: 'date'
        }
    ]
    //Jhon... you can also set the proxy directly here in the Model
});
