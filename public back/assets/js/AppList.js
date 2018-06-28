function RetornarDespesas(){
    var lista= document.getElementById('listaResultados'); 
    var somaTotal = 0; 
    
    var conteudo = `<tbody>`;
    
    var list  = db.database()
        .ref('minhasdespesas').on('value',function(res){
            var i=0;
            res.forEach(function(item){
                
                console.log(item.val());
                conteudo += `<tr>
                <td>`+item.key+`</td>
                <td>`+item.val().description+`</td>
                <td>`+item.val().amount+`</td>
                <td>`+item.val().dateAdd+`</td>
                <td class="tb"><button type="submit" id="excluir" onClick="excluir()" class="btn btn-danger">Excluir</button>  <button type="submit" id="editar" class="btn btn-warning">Editar</button></td>
                </tr>`;
                somaTotal+= Number(item.val().amount);
            })
            conteudo +=`</tbody>`;
            document.getElementById("somaTotal")
                .innerHTML += ' '+somaTotal;


            $("#tbResultado").append(conteudo);
           
        });
}

function excluir(){
    db.database('minhasdespesas').delete().then(function(){
        console.log("Documento apagado com sucesso!");
    }).catch(function(error){
        console.error("Error removing document: ", error);
    });
}
 
