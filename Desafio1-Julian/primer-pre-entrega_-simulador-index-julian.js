let actividadDeseada 
actividadNoExiste= () => {
    return actividadDeseada!="gimnacio" && actividadDeseada!="gimnacio" &&  actividadDeseada!="musculación" && actividadDeseada!="musculacion" && actividadDeseada!="baile"
  }
let nombre = prompt("Bienvenido a GymExpress, por favor ingrese su nombre");
console.log(nombre)

actividadDeseada = prompt(`Buenos dias ${nombre}, que actividad te gustaría realizar?`);
console.log(actividadDeseada)

while( actividadNoExiste()){
    if(actividadDeseada=null){
        actividadDeseada = prompt(`Buenos dias ${nombre}, que actividad te gustaría realizar?`);
    }
    actividadDeseada = prompt(`La actividad indicada no se reconoce, por favor, intentelo de nuevo?`);

}

if(actividadDeseada.toLowerCase()==="gimnacio" || actividadDeseada.toLowerCase()==="gimnacio"){
    alert("Los turnos para el gimnacio son martes y jueves de 18hs a 21hs y la cuota es de $18400")
}else if(actividadDeseada.toLowerCase()==="musculación" || actividadDeseada.toLowerCase()==="musculacion" ){
    alert("Podés venir a realizar musculacíon de lunes a sabado de 8hs a 22hs")
    
}else if(actividadDeseada.toLowerCase()==="baile"){
    alert("Las clases de baile son miercoles y viernes de 18hs a 21hs y la cuota es de $10960")
}else{
    alert("no es posible identificar la actividad especificada")
};




