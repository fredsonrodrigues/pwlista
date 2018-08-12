//inicializando variáveis
var note = {
    _id: null,
    title:null,
    noteText: null
}
var cardlist = document.getElementById('cardList')
var db = new PouchDB('pwlista');

// limpando o formulario
function clean() {
    note.title = null
    note.noteText = null
    note._id = null
}
// Função que salva as notas
function postItem(e) {
    note.title = document.getElementById('titleItem').value
    note.noteText = document.getElementById('textItem').value
    note._id = new Date().toISOString()
    console.log(note)
    // Add to Db
    db.put(note, function callback(err, result) {
        if (!err) {
            closeModal()
            clean()
        }
    });
    e.preventDefault();
    return false;
}
//Função que constroi no DOM um unico card
function getCard(title, id) {
    if (title.length > 14) title = title.substring(0, 14);
    var div = document.createElement("div");
    div.className = 'card'
    div.innerHTML = `
                <div class="card-content">
                    <p class="title">
                        ${title}...
                    </p>
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                        <span>
                            <a onclick="removeNote('${id}')">Apagar</a>
                        </span>
                    </p>
                    <p class="card-footer-item">
                        <span>
                            <a href="#">Editar</a>
                        </span>
                    </p>
                </footer>`
    return div
}
// função que constrói no DOM a lista dinamicamente
function addCard(params) {
    cardlist.innerHTML = "";
    for (let index = 0; index < params.length; index++) {
        const el = params[index].doc;
        
        var div = document.createElement("div");
        div.className = 'column'
        div.appendChild(getCard(el.title, el._id))
        cardlist.appendChild(div)
    }
}
// Função que irá listar as notas salvas no banco
function listNotes() {
    this.db.allDocs({ include_docs: true, descending: true }, function (err, doc) {
        addCard(doc.rows)
    });
}

// Função que irá excluir as notas salvas no banco
function removeNote(id) {
    this.db.get(id).then(function (doc) {
        var c = confirm("Deseja excluir essa nota?")
        if (c == true) {
            alert('excluido!')
            return db.remove(doc);
        } else {
            return false;
        }
    }).catch(function (err) {
        console.log(err);
    });
}

//Escutando as alterações
var changes = db.changes({
    since: 'now',
    live: true,
    include_docs: true
}).on('change', function (change) {
    console.log(change)
    listNotes()
})

//Chamando a função assim que a pagina carregar
window.onload = function (e) {
    listNotes()
}