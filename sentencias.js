var semana = {
    dia : ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'],
    horas: 24*7,
    dias: 7,
    minutos: 60*24*7,
    segundos: 60*60*24*7
};




function queDiaEs(valor){
    let numero = parseInt(valor);

    // uso de IF
    if(numero>0 && numero<8){
        numero--;
        document.getElementById("respuesta").innerHTML=' '+semana.dia[numero];
        document.getElementById("minutos").innerHTML=semana.minutos;
    }else{
        document.getElementById("respuesta").innerHTML=' Sólo introduzca numeros de 1 al 7.';
        
    }

};



function Persona(firt, last, age, sexo, hobbie) {
    this.identidad = {
      'nombre': firt,
      'apellido' : last
    };

    this.edad = age;

    this.genero = sexo;

    this.intereses = hobbie;

    this.bio = function() {
      alert(this.identidad.nombre + ' ' + this.identidad.apellido + ' tiene ' + this.edad + ' años de edad. A él le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    };

    this.saludo = function() {
      alert('Hola! Yo soy ' + this.identidad.nombre + '.');
    };

    this.verDatos = function(){
        document.getElementById("nombre").value = this.identidad.nombre;
        document.getElementById("apellido").value = this.identidad.apellido;
        document.getElementById("edad").value = this.edad;
        document.getElementById("genero").value = this.genero;
        document.getElementById("interes1").value = this.intereses[0];
        document.getElementById("interes2").value = this.intereses[1];
    };
  }

var persona1 = new Persona('Silvino', 'Delgado', 44, 'Masculino', ['escuchar música', 'programar']);
