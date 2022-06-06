
var clientes = [];
let x = 1;
function bienvenida(){
    swal("Bienvenido!!");
}
function alta(){

 
    //vuelve los datos que ingresa el usuario a variables locales 

    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let tipoPoliza = parseInt(document.getElementById("tipoPoliza").value);
    let monto = parseInt(document.getElementById("monto").value);
    let vencimiento = document.getElementById("vencimiento").value;
    //con esos datos crea el objeto empleado con sus atributos y lo ingresa en la lista
    faltanDatosTabla();

    
if(x == 1){
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
    swal("cliente ingresado con exito.");
    listaClientes();
    }
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

    clientes.splice(idPoliza,1);
    swal("Cliente eliminado con exito.");
    listaClientes();

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
        swal("modificado con exito.");
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
     swal("El cliente que ha buscado tiene la poliza numero " + ( clientes[posicion].TipoPoliza));
    }
    else{
        swal("Debe ingresar el id que aparece en la lista para encontar al cliente.");
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
    swal("El cliente que paga más es '" + clientePagaMas.Nombre + "' y pago " + arrMonto[index]);
    
}
function faltanDatosTabla(){ 

    let id = document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let tipoPoliza = document.getElementById("tipoPoliza").value;
    let monto = document.getElementById("monto").value;
    let vencimiento = document.getElementById("vencimiento").value; 
    x = 1;

    if(id == "" ){

        alert("Falta la id.");
        x = -1;
    }
    if(nombre == ""){

        x = -1;
    }
    if(direccion == 0){
        alert("Falta la direccion.");
        x = -1;
    }
    if(tipoPoliza === ""){
        alert("Falta el tipo de poliza.");
        x = -1;
    }
    if(monto === ""){
        alert("Falta el monto.");
        x = -1;
    }
    if(vencimiento == ""){
        alert("Falta el vencimiento.");
        x = -1;
    }
    
}
function polizaCliente(){

    let idCliente = document.getElementById("idCliente").value;

    for(let i = 0;i <= clientes.length;i++){
        if(clientes[i].Id == idCliente){
            swal(clientes[i].Nombre + " tiene la poliza número " + clientes[i].TipoPoliza );
        }
    }

}
function buscar(){

    let idBuscador = document.getElementById("idBuscador").value;

    let cliente;
    let clienteId = 0;

    let idB = 0;
    let nombreB = 0;
    let direccionB = "";
    let tipoPolizaB = "";
    let vencimientoB = "";

    for(let i = 0;i <= clientes.length;i++){

        cliente = clientes[i];
        clienteId = cliente.Id;

        if(clienteId == idBuscador){
         
    idB = cliente.Id;
    nombreB = cliente.Nombre;
    direccionB = cliente.Direccion;
    tipoPolizaB = cliente.TipoPoliza;
    vencimientoB = cliente.Vencimiento;

    swal("id : " + idB + "\n" + "nombre : "  + nombreB + "\n" + "direccion : " + direccionB + "\n" + "tipo de poliza : " + tipoPolizaB + "\n" + "vencimiento : " + vencimientoB);
        }
    }


    
  
}
function idPoliza(){

    let idPoliza = document.getElementById("idPoliza").value;

    let compradores = [];
    let poliza1 = 0;
    let poliza2 = 0;
    let poliza3 = 0;

    if(idPoliza == 1 || idPoliza == "vehículos" || idPoliza == "VEHÍCULOS"){

       for(let i = 0;i <= clientes.length;i++){

          if(clientes[i].TipoPoliza == 1){
              compradores[i] == clientes[i].Nombre;
              poliza1++;
          }
       }
       swal(poliza1 + " cliente/s compraron la poliza 1 : " + compradores);
    }
    if(idPoliza == 2 || idPoliza == "incendio hogar" || idPoliza == "INCENDIO HOGAR"){

        for(let i = 0;i <= clientes.length;i++){
 
           if(clientes[i].TipoPoliza == 2){
               compradores[i] == clientes[i].Nombre;
               poliza2++;
           }
        }
        swal(poliza2 + " cliente/s compraron la poliza 2 : " + compradores);
     }
    if(idPoliza == 3 || idPoliza == "vida" || idPoliza == "VIDA"){

        for(let i = 0;i <= clientes.length;i++){
 
           if(clientes[i].TipoPoliza == 3){
               compradores[i] == clientes[i].Nombre;
               poliza3++;
           }
        }
        swal(poliza3 + " cliente/s compraron la poliza 3 : " + compradores);
     }
    
    
    
}
function existe(){

    let idnombre = document.getElementById("idnombre").value;

    if(idnombre > clientes.length || idnombre < 0){

        swal("El cliente no existe");
    }
    else{
        for(let i = 0;i <= clientes.length;i++){

            if(idnombre === clientes[i].Id){
                swal("El cliente existe.");
            }
            else if(idnombre == clientes[i].Nombre){
                swal("El cliente existe.");
            }

        }
    }
}
function listar(){

    for(let i = 0;i <= clientes.length;i++){

        swal(clientes[i].Id + "- " + clientes[i].Nombre);
    }
}
function cambioVencimiento(){

    let id = document.getElementById("id").value;
    let pos = devuelvePos(id);
    if(pos > -1){
        
        clientes[pos].Vencimiento = document.getElementById("vencimiento").value;
        swal("vencimiento modificado con exito.");
        listaClientes();
    }
    else{
        swal("El Cliente no existe en la base de datos.");
    }

}
