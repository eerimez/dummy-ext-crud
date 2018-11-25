Ext.define('C.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.grid.*',

        'C.view.main.Grid',
        'C.view.main.Form',
        'C.view.main.MainModel',
        'C.view.main.MainController'
    ],
    controller: 'main',
    viewModel: 'main',
    layout: 'fit',
    items: [
        {
            xtype: 'window',
            bind: {
                title: '{form.formTitle}'
            },
            items: [{
                xtype: 'mainform'
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
            xtype: 'maingrid',
            margin: '5 0 5 5'
        }]
    }
    ]
});
