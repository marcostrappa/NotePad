Ext.define('NotePad.controller.MainController',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            containerNote:'#containernote',
            editNote:{ //attenzione: non è inizializzata all'avvio della app, quindi devo creare un alias in editNote
                selector: '#editnote', // id della vista
                xtype: 'editnote', //posso chiamarlo come voglio non necessariamente come l'id
                autoCreate:true // si autoinstanzia 
            },
            notesList:'#noteslist',
            btnNewNote: 'button[action=newNote]',
            btnSaveNote: 'button[action=saveNote]',
            btnDeleteNote: 'button[action=deleteNote]',
        },
        control:{
           btnNewNote:{tap: 'createNewNote'},
           
           
           // posso andare a prendere direttamente il bottone con la action relativa 
           'button[action=saveNote]':{tap: 'saveNote'},
           'button[action=deleteNote]':{tap: 'deleteNote'},
           containerNote:{pop: 'popContainerNote'},
           notesList:{itemtap:'editNote'}

        }
    },
    popContainerNote:function(){
        this.getBtnNewNote().show();
    },
    createNewNote: function(button,e,eOpts){
        button.hide();
        // (in questo caso lo scope è la app) 
        
        // creo un istanza del modello per il form che andrò a caricare
        var now=new Date();
        var noteId=now.getTime();
        var note=Ext.create('NotePad.model.Nota',{
            id:noteId, // i campi che non ci sono sul form rimangono cmq all'interno di esso anche se non specificati
            date:now,
            title:'',
            text:''
        });
        // setto il record del form con il modello
        this.getEditNote().setRecord(note);
        
        // getNome_container_con_prima_lettera_maiuscola() 
        // viene generato dal container per ogni view
        this.getContainerNote().push(this.getEditNote());  
    },
    saveNote:function(){
        // prendiamo i dati dal form passati dal modello
        var currentNote=this.getEditNote().getRecord();
        // aggiorniamo il modello con i dati del modello (è necessario)
        this.getEditNote().updateRecord(currentNote);
        
        //inserisco il controllo di validazione
        var error=currentNote.validate();
        //console.log(error);
        if (!error.isValid())
        {
            Ext.Msg.alert('Error',error.getByField('title')[0].getMessage());
            return;
        }
        //console.log(currentNote);
        var notesStore = this.getNotesList().getStore();
        notesStore.add(currentNote);
        // l'add si occupa di gestire anche l'update, prima bisognava:
        /*
        if (notesStore.findRecord('id',currentNote.getId()===null){
            notesStore.add(currentNote);
            
        }else{
            currentNote.setDirty();
        }
        1 */
        notesStore.sync();
        this.getContainerNote().pop();
    },
    editNote:function(list, index, target, record, e, eOpts )
    {
        this.getBtnNewNote().hide();
        this.getEditNote().setRecord(record); 
        this.getContainerNote().push(this.getEditNote()); 
    },
    deleteNote:function()
    {
        var myApp=this;
        Ext.Msg.confirm('Alert!', 'Confermi?', 
            function (param)
            {
                if (param=="yes")
                {
                    var currentNote= myApp.getEditNote().getRecord();
                    var notesStore = myApp.getNotesList().getStore();
                    if (notesStore.findRecord('id',currentNote.getId())!==null){
                        notesStore.remove(currentNote);
                    }
                    notesStore.sync();
                    myApp.getContainerNote().pop();
                }
            }
        );  
    }
})

