Ext.define('C.grid.column.Date', {
    override: 'Ext.grid.column.Date',

    setFormat: function(x) {
        this.format = x;
    },

    getFormat: function() {
        return this.format;
    }
});