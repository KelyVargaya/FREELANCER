/*
 * Archivo principal de JS
 */
/*
function ventanaModal (){
	var proyectos = Array.from(document.getElementsByClassName("col-4 galeria"));//se llaman todas las clases que contienen foto y titulo
    var modalPort = document.getElementById("ventana-modal");//se llama al div principal que contiene el modal oculto
    var modalMostrar, cerrar;
    proyectos.forEach(function(foto){//se recorre cada elemento clase  en el html, o sea cada imagen y su texto

    	foto.addEventListener("click", function(){//a cada clase encontrada le va a agregar el evento click

    	modalPort.innerHTML="";//indica que el id esta vacio

    	modalMostrar= document.createElement("div");//crea un div nuevo
    	modalMostrar.classList.add("foto-modal");//se agrega la clase 
    	modalMostrar.innerHTML= foto.innerHTML;//el contenido de cada clase se imprime dentro del nuevo div

    	modalPort.appendChild(modalMostrar);//se coloca nuevo div 
    	modalPort.classList.remove("hide");//se le quita la clase que lo oculta 

    	cerrar = document.createElement("span");//crea un span
    	cerrar.setAttribute("class", "cerrarX");//se le asigna una clase
    	crearX = document.createTextNode("X");//se crea nodo de texto que tendra la X
    	cerrar.appendChild(crearX);//se coloca la X dentro del span
    	modalMostrar.appendChild(cerrar);//se coloca el span junto con la foto


    	cerrar.addEventListener("click",function(){
    			modalPort.classList.add("hide");
    			mostrar.classList.remove("hide");
});
    	});

    });
}
ventanaModal();
*/

//agregamos el evento
window.addEventListener('load',function(){
  var imagenesVer = document.getElementById('ventana-modal');
  var divMayor = document.getElementById('works');
  ImagenesHtml(imagenesVer);
  mostrarImagen(divMayor);
});

//creamos la funcion para imprimir en el html nuestras imagenes
function ImagenesHtml(html){

  var fragment = document.createDocumentFragment();
  for(var i = 1; i<=12; i++){
    var div = document.createElement("div");
    div.setAttribute("class","image-works");
    var a = document.createElement("a");
    a.setAttribute("href","#img"+i);
    var img = document.createElement("img");
    img.setAttribute("src","img/img-"+i+".jpg");
    img.setAttribute("class","img-work");
    var p = document.createElement("p");
    var texto = document.createTextNode("Nombre de Proyecto");
    p.appendChild(texto);

    div.appendChild(a);
    a.appendChild(img);
    a.appendChild(p);

    fragment.appendChild(div);
  }
  html.appendChild(fragment);
}


//Funciones para mostar nuestras imagenes en un divMayor

function mostrarImagen(html){

  var fragmento = document.createDocumentFragment();
  for (var i = 1; i <=12; i++) {
    var mostrarImg = document.createElement("div");
    mostrarImg.setAttribute("class","mostrar");
    mostrarImg.setAttribute("id","img"+i);

    var imgActual = document.createElement("div");
    imgActual.setAttribute("class","imagen");

    var close = document.createElement("a");
    close.setAttribute("class","cerrar");
    close.setAttribute("href","#imagenesVer");
    close.appendChild(document.createTextNode("X"));
    

    //Para regresar la imagen 
    var previus = document.createElement("a");
    previus.setAttribute("id","regresar");
     if(i==1){
       previus.setAttribute("href","#img"+(i*12));
      } 
      else{
       previus.setAttribute("href","#img"+(i-1));
      }
    previus.appendChild(document.createTextNode("<"));

    //para pasar a l siguiente imagen 
    var next = document.createElement("a");
    next.setAttribute("id","siguiente");
    next.setAttribute("href","#img"+(i+1));
    next.appendChild(document.createTextNode(">"));

    //muestra imagen 
    var product = document.createElement("a");
    product.setAttribute("href","#img"+(i+1));

    var img = document.createElement("img");
    img.setAttribute("src","img/img-"+i+".jpg");
    img.setAttribute("with",400);


    mostrarImg.appendChild(imgActual);
    imgActual.appendChild(previus);
    imgActual.appendChild(product);
    product.appendChild(img);
    imgActual.appendChild(next);
    mostrarImg.appendChild(close);
    fragmento.appendChild(mostrarImg);
  }
  
  html.appendChild(fragmento);
}