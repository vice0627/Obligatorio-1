
var clientes = [];

function alta(){

    //vuelve los datos que ingresa el usuario a variables locales 

    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let tipoPoliza = parseInt(document.getElementById("tipoPoliza").value);
    let monto = parseInt(document.getElementById("monto").value);
    let vencimiento = document.getElementById("vencimiento").value;
    //con esos datos crea el objeto empleado con sus atributos y lo ingresa en la lista
    

    let poliza = {
        TipoPoliza : tipoPoliza,
        idPoliza : id
    };
    
    let cliente = {

     Id : id,
     Nombre : nombre,
     Direccion : direccion,
     TipoPoliza : tipoPoliza,
     Monto : monto,
     Vencimiento : vencimiento,
     Poliza : poliza
    };
  
    clientes.push(cliente);
    alert("cliente ingresado con exito.");
    listaClientes();
}
function devuelvePos(id){

    //El bucle recorre el array clientes y devuelve la posicion del cliente deseado

    for(let i = 0;i < clientes.length;i++){
        if(clientes[i].Id == id){
            return i;
        }
        return -1;
    }
}
function baja(){

    //toma los datos necesarios del cliente para darlo de baja

let id = document.getElementById("id").value;
let posicion = devuelvePos(id);

//si devuelve un numero > -1 significa que existe el empleado y lo elimina

if(posicion > -1){

    clientes.splice(posicion,1);
    alert("Cliente eliminado con exito.");
    listaClientes();
   
}
else{
    alert("El Cliente no existe en la base de datos.");
}

}
function modificar(){
    let id = document.getElementById("id").value;
    let pos = devuelvePos(id);
    if(pos > -1){
        clientes[pos].Id = document.getElementById("id").value;
        clientes[pos].Nombre = document.getElementById("nombre").value;
        clientes[pos].Direccion = document.getElementById("direccion").value;
        clientes[pos].TipoPoliza = document.getElementById("tipoPoliza").value;
        clientes[pos].Monto = document.getElementById("monto").value;
        clientes[pos].Vencimiento = document.getElementById("vencimiento").value;
        alert("modificado con exito.");
        listaClientes();
    }
    else{
        alert("El Cliente no existe en la base de datos.");
    }
}
function listaClientes(){
    //obtiene el valor de la lista dentro de la funcion

    let lista = document.getElementById("lista");

    //limpia la lista asi cuando sea agregado al select no duplicara los datos

    lista.innerHTML = "";

    //crea y agrega un nuevo renglon al select


    for(let i = 0;i < clientes.length;i++){

    let renglon = document.createElement("option");
    renglon.text = clientes[i].Id + " " + clientes[i].Nombre;
    lista.add(renglon);
    }
    
}
function tipoDePoliza(){

    let id = document.getElementById("id").value;
    let posicion = 0;
    
    if(id != 0){
     posicion = devuelvePos(id);
     alert("El cliente que ha buscado tiene la poliza numero " + ( clientes[posicion].TipoPoliza));
    }
    else{
        alert("Debe ingresar el id que aparece en la lista para encontar al cliente.");
    }
    
}
function ordenoClientes(){

    for(let i = 0; i < clientes.length;i++){
        for(let j = 0; j < clientes.length -1;j++){
            if(clientes[j].Monto > clientes[j+1].Monto){
                let cliente = clientes[j];
                clientes[j] = clientes[j+1];
                clientes[j+1] = cliente;
            }
        }
    }
}
function pagaMas(){
    let arrMonto = [];
    let nombre = "";
    let mayorMonto = 0;
    let index = 0;

    for(let i = 0;i < clientes.length;i++){
        arrMonto[i] = clientes[i].Monto;
    }
    mayorMonto = Math.max(...arrMonto);
    index = arrMonto.indexOf(mayorMonto);
    nombre = clientes[index].Nombre;

    let clientePagaMas = {
        Nombre : nombre,
        Monto : mayorMonto
    };
    alert("El cliente que paga más es '" + clientePagaMas.Nombre + "' y pago " + arrMonto[index]);
    
}
function clientesPoliza(){

}
function faltanDatos(){ 
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let tipoPoliza = parseInt(document.getElementById("tipoPoliza").value);
    let monto = parseInt(document.getElementById("monto").value);
    let vencimiento = document.getElementById("vencimiento").value; 

    if(id = 0 ){}
}
function polizaCliente(){

    let idCliente = document.getElementById("idCliente").value;

    for(let i = 0;i <= clientes.length;i++){
        if(clientes[i].Id == idCliente){
           alert(clientes[i].Nombre + " tiene la poliza número " + clientes[i].TipoPoliza );
        }
    }

}
function buscar(){

    let idBuscador = document.getElementById("idBuscador").value;
    let ids = [];
    let indice = 0;

   /*for(let i = 0;i <= clientes.length;i++){

        if(idBuscador == clientes[i].Id){
            indice = i;
        }
    }*/
    for(let i = 0;i <= clientes.length;i++){
     ids[i] = clientes[i].Id;
    }
    
    
  alert(Object.values(clientes[indice]));
}
function idPoliza(){
    let idPoliza = document.getElementById("idPoliza").value;

    alert(clientes[idPoliza].nombre + " tiene la poliza " + idPoliza);
}
function existe(){
    let idnombre = document.getElementById("idnombre").value;
if(typeof idnombre === "string"){

    for(let i = 0;i <= clientes.length;i++){
        if(clientes[i].Nombre == idnombre){
          alert("El cliente existe.");    
    
        }
    }
        
    }
    else{

        for(let i = 0;i <= clientes.length;i++){
            if(clientes[i].Nombre == idnombre){
              alert("El cliente existe.");    
        
            }
    }
}