//agregamos el evento
window.addEventListener('load',function(){
  var imagenesVer = document.getElementById('contenedorImages');
  var divMayor = document.getElementById('portafolio');
  ImagenesHtml(imagenesVer);
  mostrarImagen(divMayor);
});

//creamos la funcion para imprimir en el html nuestras imagenes
function ImagenesHtml(html){

  var fragment = document.createDocumentFragment();
  for(var i = 1; i<7; i++){
    var div = document.createElement("div");
    div.setAttribute("class","image-PORTFOLIO");
    var a = document.createElement("a");
    a.setAttribute("href","#img"+i);
    var img = document.createElement("img");
    img.setAttribute("src","img/portfolio/img-"+i+".png");
    img.setAttribute("class","img-FOLIO");
    div.appendChild(a);
    a.appendChild(img);

    fragment.appendChild(div);
  }
  html.appendChild(fragment);
}


//Funciones para mostar nuestras imagenes en un divMayor

function mostrarImagen(html){

  var fragmento = document.createDocumentFragment();
  for (var i = 1; i <7; i++) {
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
    img.setAttribute("src","img/portfolio/img-"+i+".png");
    img.setAttribute("with",400);
    var parr = document.createElement("p");
    var content = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt nostrum quisquam perferendis corrupti reiciendis maiores temporibus quaerat! Corrupti fuga laudantium eligendi delectus voluptates quam optio dolore maiores alias magnam?");


    parr.appendChild(content);
    mostrarImg.appendChild(imgActual);
    imgActual.appendChild(previus);
    imgActual.appendChild(product);
    product.appendChild(img);
    imgActual.appendChild(next);
    mostrarImg.appendChild(close);
    mostrarImg.appendChild(parr);
    fragmento.appendChild(mostrarImg);
  }
  
  html.appendChild(fragmento);
}
