Ext.define('NotePad.view.EditNote',{
    extend: 'Ext.form.Panel', 
    alias: 'widget.editnote',
    config: {
        id: 'editnote',
        title:'Modifica',
        items: [
            {
                xtype:'fieldset',
                title:'Nota',
                instructions:'Scrivi la nota',
                items:[
                    {
                        xtype:'textfield',
                        name:'title',
                        label:'Titolo',
                        required:true
                    },
                    {
                        xtype:'textareafield',
                        name:'text',
                        label:'Testo'
                    }
                ]
            },
            {
                xtype:'toolbar',
                docked:'bottom',
                items:[
                    {
                        xtype:'button',
                        iconCls:'star',
                        ui:'confirm',
                        action:'saveNote'
                    },
                    {
                        xtype:'spacer'
                    },
                    {
                        xtype:'button',
                        iconCls:'trash',
                        ui:'decline',
                        action:'deleteNote'
                    }
                ]
            }
        ]
    }
})