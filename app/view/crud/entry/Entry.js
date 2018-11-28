Ext.define('C.view.crud.entry.Entry', {
    extend: 'Ext.Container',
    alias: 'widget.crud-entry',
    controller: 'crud-entry',
    viewModel: 'crud-entry',
    layout: 'fit',
    items: [
        {
            xtype: 'window',
            bind: {
                title: '{form.formTitle}'
            },
            items: [{
                xtype: 'crud-entry-form'
            }]
        },
        {
        xtype: 'container',
        layout: 'border',
        items: [{
            region: 'north',
            xtype: 'container',
            cls: 'app-header',
            height: 50,
            bind: '{grid.name}'
        }, {
            region: 'center',
            xtype: 'crud-entry-grid',
            margin: '5 0 5 5'
        }]
    }
    ]
});
