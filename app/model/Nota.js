Ext.define('NotePad.model.Nota',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'id',type:'int'},
            {name:'date',type:'date', dateFormat:'c'},
            {name:'title',type:'string'},
            {name:'text',type:'string'}
        ],
        validations:[
            {type:'presence',field:'title',message:'Inserire il titolo'}
        ]
    }
})

