document.write("<div class='cabecera'>");
document.write("<div class='publicidad' id='banner'></div>");
document.write("<a href='https://soyimaster.com' target='_blank'><img class='usuario' src='omar.jpg' alt='Omar Herrera' title='Omar Herrera'></a>");
document.write("<h1>Apuntes de Clases de JavaScript</h1>");
document.write("<div class='menu'>");
document.write("<a href='index.html'>Home</a> | ");
document.write("<a href='document.html'>document.write</a> | ");
document.write("<a href='innerhtml.html'>innerHTML</a> | ");
document.write("<a href='appendchild.html'>appendChild</a> | ");
document.write("<a href='operadores.html'>Operadores</a> | ");
document.write("<a href='adivinanza.html'>Adivinanza</a> | ");
document.write("<a href='variables.html'>Variables</a> | ");
document.write("<a href='objetos.html'>Objetos</a> | ");
document.write("<a href='if.html'>IF y Objetos</a> | ");
document.write("<a href='PracticaObjetos.html'>Práctica con Objetos</a> | ");
document.write("<a href='prototiposdeobjetos.html'>Prototipos de objetos</a> | ");
document.write("<a href='json.html'>JSON</a> | ");
document.write("<a href='bolasrebotando.html'>Bolas rebotando</a> | ");
document.write("<a href='node.html'>Node.js</a> | ");
document.write("<a href='nuevo.html'>Nuevo</a> | ");
document.write("<a href='#'>Fin</a>");
document.write("</div></div>");

// Creando un banner

var vinculo = document.createElement('a');
var banner = document.createElement('img');

vinculo.href = 'https://tienda.ltcpanama.com/diseno-web/';
vinculo.target = '_blank';

banner.src = 'banner01.jpg';
banner.title = 'Landing Page';
banner.alt = 'Compra un Landing Page';
banner.className = 'banner';
                
vinculo.appendChild(banner);
document.getElementById('banner').appendChild(vinculo) 
