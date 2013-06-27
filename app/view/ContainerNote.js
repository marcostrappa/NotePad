Ext.define('NotePad.view.ContainerNote',{
    extend: 'Ext.navigation.View', 

    config: {
            id: 'containernote',
            navigationBar:{
                items:[
                    { xtype:'spacer'},
                    {
                        xtype:'button',
                        iconCls:'add', //icona
                        ui: 'action', // fa il pulsante blue
                        action:'newNote'
                    }
                ]
            },
            items: [
                    {
                            xtype: 'list',
                            id: 'noteslist',
                            title: 'Lista Note',
                            styleHtmlContent: true,
                            store:'NotesStore',
                            itemTpl: '<div><b>{title}</b>: {text}</div>',
                            disableSelection:true // quando torno alla lista non mantiene la selezione precedente
                    }
            ]
    }
})