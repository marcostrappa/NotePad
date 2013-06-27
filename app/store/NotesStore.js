Ext.define('NotePad.store.NotesStore',{
    extend:'Ext.data.Store',
    config:{
        autoLoad:true,
        autoSync:true,
        model:'NotePad.model.Nota',
        storeId:'NotesStore',
        /*data: [
                {id: 1, date:null, title: 'Prova', text: 'Ciao'},
                {id: 2, date:null,title: 'Prova', text: 'Ciao'},
                {id: 3, date:null,title: 'Prova', text: 'Ciao'}
        ],*/
        sorters:[
            {
                property:'date',
                direction:'ASC'
            }
        ],
        proxy:{
            type:'localstorage',
            id:'storenote'
        }
    }
})


