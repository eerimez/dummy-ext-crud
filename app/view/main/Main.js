Ext.define('C.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',

    requires: [
        'Ext.plugin.Viewport',

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
            xtype: 'window',bind: {
                title: '{formTitle}'
            },
            title:'{formTitle}',
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
            bind: '{name}'
        }, {
            region: 'center',
            xtype: 'maingrid',
            margin: '5 0 5 5'
        }]
    }
    ]
});
