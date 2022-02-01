alert("¡Bienvenido Marvel Fan! ¿Estás preparado para poner a prueba tus conocimientos sobre Marvel? ¡Empecemos!");
let pregunta1= "¿Quién es considerado como EL PRIMER VENGADOR? A) Capitan America B) Iron Man C) Capitana Marvel";
let respuesta1="A";
let pregunta2= "¿En qué año se estrenó la primer película de Iron Man, que dio paso al Universo Cinematográfico de Marvel? A)2005 B)2009 C)2008";
let respuesta2="C";
let pregunta3= "¿Cómo se llama el martillo de THOR? A)Mjolnir B)Vanir C)Aesir ";
let respuesta3="A";
let pregunta4= "¿De qúe está hecho el escudo del Capitan America? A) Adamantium B) Vibranium C) Carbonadio ";
let respuesta4="B";
let pregunta5= "¿Los Flerkens son una raza alinigena extremadamente peligrosa que se paracen a que animal? A)Patos B)Gatos C)Mapaches ";
let respuesta5="B";
let pregunta6= "¿Cuál es el verdadero nombre de Pantera Negra A)T´Challa B)M´Baku C)N´Jobu";
let respuesta6="A";
let pregunta7= "¿Sobre qué ciudad recuerdan a menudo Hawkeye y Black Widow? A)Praga B)Estambul C)Budapest";
let respuesta7="C";
let pregunta8= "¿Donde guardan Lady Sif y Volstagg la gema de la realidad después que los Elfos Oscuros interaron robarla? A) Con el Coleccionista B)En una boveda de Asgard C)En la espada de Lady Sif ";
let respuesta8="A";
let pregunta9= "¿Quién es asesinado por Loki en los Vengadores? A)Nick Fury B)Agente Coulson C)Maria Hill";
let respuesta9="B";
let pregunta10= "¿Qué tipo de médico es Stephen Strange? A)Neurocirujano B)Cirujano de trauma C)Cirujano plastico";
let respuesta10="A";



let contador=0;
function trivial(){
    let respuestaIngresada=prompt(pregunta1);
    if(respuestaIngresada.toUpperCase()==respuesta1){
      alert("CORRECTO MUY BIEN!");
      contador++;
    }else{
        alert("INCORRECTO! La respuesta correcta es Capitan America");
    }
    respuestaIngresada=prompt(pregunta2);
    if(respuestaIngresada.toUpperCase()==respuesta2){
        alert("CORRECTO MUY BIEN!");
        contador++;
      }else{
          alert("INCORRECTO! La respuesta correcta es 2008");
      }
      respuestaIngresada=prompt(pregunta3);
    if(respuestaIngresada.toUpperCase()==respuesta3){
        alert("CORRECTO MUY BIEN!");
        contador++;
      }else{
          alert("INCORRECTO! La respuesta correcta es Mjolnir");
      }
      respuestaIngresada=prompt(pregunta4);
      if(respuestaIngresada.toUpperCase()==respuesta4){
        alert("CORRECTO MUY BIEN!");
        contador++;
      }else{
          alert("INCORRECTO! La respuesta correcta es Vibranium");
      }
      respuestaIngresada=prompt(pregunta5);
      if(respuestaIngresada.toUpperCase()==respuesta5){
        alert("CORRECTO MUY BIEN!");
        contador++;
      }else{
          alert("INCORRECTO! La respuesta correcta es Gatos");
      }
      respuestaIngresada=prompt(pregunta6);
      if(respuestaIngresada.toUpperCase()==respuesta6){
        alert("CORRECTO MUY BIEN!");
        contador++;
      }else{
          alert("INCORRECTO! La respuesta correcta es T´Challa");
      }
      respuestaIngresada=prompt(pregunta7);
      if(respuestaIngresada.toUpperCase()==respuesta7){
        alert("CORRECTO MUY BIEN!");
        contador++;
      }else{
          alert("INCORRECTO! La respuesta correcta es Budapest");
      }
      respuestaIngresada=prompt(pregunta8);
      if(respuestaIngresada.toUpperCase()==respuesta8){
        alert("CORRECTO MUY BIEN!");
        contador++;
      }else{
          alert("INCORRECTO! La respuesta correcta es con el Coleccionista");
      }
      respuestaIngresada=prompt(pregunta9);
      if(respuestaIngresada.toUpperCase()==respuesta9){
        alert("CORRECTO MUY BIEN!");
        contador++;
      }else{
          alert("INCORRECTO! La respuesta correcta es Agente Coulson");
      }
      respuestaIngresada=prompt(pregunta10);
      if(respuestaIngresada.toUpperCase()==respuesta10){
        alert("CORRECTO MUY BIEN!");
        contador++;
      }else{
          alert("INCORRECTO! La respuesta correcta es Neurocirujano");
      }

      alert(`Felicitaciones terminaste la trivia con ${contador} puntos de 10 puntos posibles`);
}
alert(trivial());