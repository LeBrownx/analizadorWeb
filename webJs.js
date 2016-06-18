var cadenaIngresada;
var cadenaAuxiliar;
var contadorAuxiliar=0;


function verificar(){
  //INICIA LA DERIVACION
  contadorAuxiliar=0;
  cadenaIngresada=document.getElementById('texto').value;
  //splitString=cadenaIngresada.split("\n");
  splitString=cadenaIngresada.replace(/^\s+|\s+$/g,'')
  splitString=cadenaIngresada.split(/\s+/);
  console.log(splitString);
  //console.log(splitString[1]);
  inicio();
}

function inicio() {
  //PRIMERO TOKEN ESPERADO ES EL INICIO
  if (splitString[contadorAuxiliar]=="INICIO") {
    contadorAuxiliar=contadorAuxiliar+1;
    //SWITCH PARA LAS POSIBLES Entradas
    for (var i = 0; i <splitString.length; i++) {
      switch (splitString[i]) {
        case "Output":
          console.log("ENTRO OUT");
          output();
          break;
        case "Input":
          console.log("ENTRO IN");
          input();
          break;
        default:
          break;
      }
    }
    begin();
    if (splitString[contadorAuxiliar]=="FIN") {
      console.log("Termino la Ejecucion del Programa");
    }
  }else{
    alert("Se esperaba Inicio");
  }
}

function begin() {
  //INICIA LA DETECCION DEL TOKEN
  contadorAuxiliar++;
  console.log("Posicion Actual "+splitString[contadorAuxiliar]);
  if (splitString[contadorAuxiliar]=="Begin") {
    console.log(splitString);
    contadorAuxiliar++;
    for (var i = 0; i < splitString.length; i++) {
      switch (splitString[i]) {
        // case "If":
        //   condicion();
          // break;
        case "Write":
          write();
          break;
        case "Read":
          read();
        default:
          break;

      }
    }
    //  contadorAuxiliar++;
    //write();
    //read();
    //contadorAuxiliar++;
    if (splitString[contadorAuxiliar]=="End") {
    contadorAuxiliar++;
    }
  }
}

function output() {
  //INICIO OUTPUT
  // cadenaAuxiliar=splitString[contadorAuxiliar];
  // cadenaAuxiliar=cadenaAuxiliar.split(" ");
  // console.log("output "+ splitString[contadorAuxiliar]);
  contadorAuxiliar++;
  if (splitString[contadorAuxiliar-1]=="Output"){
    console.log("Salida "+splitString[contadorAuxiliar]);
    contadorAuxiliar++;
  }
}

function input() {
  //INICIO INPUT
  // cadenaAuxiliar=splitString[contadorAuxiliar];
  // cadenaAuxiliar=cadenaAuxiliar.split(" ");
  // console.log("Posicion Actual "+splitString[contadorAuxiliar]);
  if(splitString[contadorAuxiliar]=="Input"){
    console.log("Entradas "+splitString[contadorAuxiliar+1]);
    contadorAuxiliar++;
  }
}

function condicion() {
  // cadenaAuxiliar=splitString[contadorAuxiliar];
  // console.log(cadenaAuxiliar);
  // cadenaAuxiliar=cadenaAuxiliar.split(" ");
   console.log("Posicion Actual"+splitString[contadorAuxiliar]);
  contadorAuxiliar++;
  if (splitString[contadorAuxiliar]="If") {
    console.log("Condicion "+splitString[contadorAuxiliar]);
    if (splitString[contadorAuxiliar]=="FinIf") {
      console.log("Finalizar Condicion "+splitString[contadorAuxiliar]);
      contadorAuxiliar++;
    }
  }
}

function write() {
  // cadenaAuxiliar=splitString[contadorAuxiliar];
  // console.log(cadenaAuxiliar);
  // cadenaAuxiliar=cadenaAuxiliar.split(" ");
  console.log("P Actual "+splitString[contadorAuxiliar]);
  if (splitString[contadorAuxiliar]=="Write") {
    console.log("Se escribe "+splitString[contadorAuxiliar+1]);
    contadorAuxiliar++;
  }
  contadorAuxiliar++;
}

function read() {
  // cadenaAuxiliar=splitString[contadorAuxiliar];
  if (splitString[contadorAuxiliar]=="Read") {
    console.log("Lee "+splitString[contadorAuxiliar+1]);
    contadorAuxiliar++;
  }
  contadorAuxiliar++;
}

function whileF() {

}

function forF() {

}
