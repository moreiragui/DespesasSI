function CadastrarDespesa(){
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;
    var dateAdd = document.getElementById("dateAdd").value;

    console.log("Descrição",description,"Amount",amount,"DateAdd",dateAdd);   
    //var database = firebase.database();
    
    var despesas = {Descrição:description,Valor:amount,Data_da_Despesa:dateAdd};
    db.database().ref('minhasdespesas').push(despesas);    
    

}