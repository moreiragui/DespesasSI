function RetornarDespesas(){
    var tabela = document.getElementById('tbResultado');
    var list = db.database()
        .ref('minhasdespesas')
        .on('value',function(res){
            console.log(res.val());
        })
    console.log(tabela);
}