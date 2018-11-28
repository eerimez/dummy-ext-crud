Ext.define('C.view.crud.entry.EntryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.crud-entry',

    onGridRowSelect: function(sender, record) {
        var me = this;
        me.windowShow(1);
        me.getViewModel().set('currentEntry', record);
    },

    onGridAddBtnClick: function(sender, record) {
        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('entries'),
            record = Ext.create("C.model.Entry", {
                name: '',
                title: '',
                description: '',
                date: new Date()
            });
        vm.set('currentEntry', record);
        store.insert(0, record);
        me.windowShow(0);
        me.gridAddBtnSetDisabled(true);
    },

    onGridDelBtnClick: function(sender, rowIndex, colIndex, item, e, record) {
        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('entries');
        store.remove(record);
        store.commitChanges();
    },

    onFormBtnClick: function(btn) {
        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('entries'),
            entry = vm.get('currentEntry');
        if (btn.action === 'save') {
            console.log(me.getView());
            if (me.getView().down('mainform').isValid()) {
                store.commitChanges();
            } else {
                return;
            }
        } else {
            store.rejectChanges();
        }
        me.windowHide();
        me.gridAddBtnSetDisabled(false);
    },

    windowShow: function(n) {
        var me = this,
            w = me.getView().down('window');
        w.show(n);
    },

    windowHide: function(n) {
        var me = this,
            w = me.getView().down('window');
        w.hide(n);
    },

    gridAddBtnSetDisabled: function (disabled) {
        var me = this,
            btn = me.getView().down('button[action=add]');
        btn.setDisabled(disabled);
    }
});
