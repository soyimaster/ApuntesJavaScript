function Sumar(valor1, valor2){
    //determinaando el tipo de variable
    console.log(typeof(valor1));

    // variables locales, añadiendo parseInt para convertir de tipo string a tipo entero
    let variable1 = parseInt(valor1);
    let variable2 = parseInt(valor2);
    let sumatoria = variable1 + variable2;

    document.getElementById("resultado").value = sumatoria;
}
function Restar(valor1, valor2){
    
    let variable1 = parseInt(valor1);
    let variable2 = parseInt(valor2);
    let resta = variable1 - variable2;

    document.getElementById("resultado").value = resta;
}

function Multiplicar(valor1, valor2){
    
    let variable1 = parseInt(valor1);
    let variable2 = parseInt(valor2);
    let producto = variable1 * variable2;

    document.getElementById("resultado").value = producto;
}

function Dividir(valor1, valor2){
    
    let variable1 = parseInt(valor1);
    let variable2 = parseInt(valor2);
    let cociente = variable1 / variable2;
    let residuo = variable1 % variable2;

    document.getElementById("resultado").value = cociente;
    document.getElementById("residuo").value = residuo;
}

function Incrementar1(valor){   
    let dato = parseInt(valor);    
    dato++;
    document.getElementById("numerouno").value = dato;    
}

function Decrecer1(valor){
    let dato = parseInt(valor);
    dato--;
    document.getElementById("numerouno").value = dato;
}

function Incrementar2(valor){   
    let dato = parseInt(valor);    
    dato++;
    document.getElementById("numerodos").value = dato;    
}

function Decrecer2(valor){
    let dato = parseInt(valor);
    dato--;
    document.getElementById("numerodos").value = dato;
}

function Comparar(valor1, valor2){
    let dato1 = parseInt(valor1);
    let dato2 = parseInt(valor2);
    let respuesta = dato1 == dato2 ? "Son Iguales" :  dato1 > dato2 ? "El número "+dato1+" es mayor que el "+dato2 : "El número "+dato2+" es mayor que el número "+dato1;
    
    document.getElementById("Analisis").innerHTML = respuesta;
}