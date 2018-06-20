function RetornarDespesas(){
    var lista = document.getElementById('listaResultados');
    var list = db.database()
    .ref('minhasdespesas').on('value',function(res){
        lista.innerHTML = '';
        res.forEach(function(item){
            var li = document.createElement('li');
            li.classList.add('list-group-item');

            li.appendChild(document.createTextNode(item.val().description+'-'+item.val().dateAdd+'-'+item.val().amount))

            lista.appendChild(li);
        })
    })
}