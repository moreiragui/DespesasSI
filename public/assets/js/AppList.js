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
                </tr>`;
                somaTotal+= Number(item.val().amount);
            })
            conteudo +=`</tbody>`;
            document.getElementById("somaTotal")
                .innerHTML += ' '+somaTotal;


            $("#tbResultado").append(conteudo);
           
        });
}