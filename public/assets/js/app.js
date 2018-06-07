function CadastrarDespesa(){
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;
    var dateAdd = document.getElementById("dateAdd").value;
    
    console.log("Descrição:",description,"\nValor Total:",amount,"\nData:",dateAdd);

    var database = firebase.database();
    console.log(database);
}