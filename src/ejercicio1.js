/*Crea un proyecto web que tenga varias imágenes (mínimo 4) y un archivo HTML que muestre inicialmente cualquiera de ellas. Idealmente las imágenes tendrían que tener el mismo tamaño, y si no es así, edítalas con algún programa para que así sea. Debes hacer un script de forma que cada vez que se haga click sobre la imagen en la web esta cambie a cualquier otra de las imágenes ALEATORIAMENTE.
Para hacerlo te recomiendo que las imágenes se llamen de forma similar (image1, image2, image3, etc) de forma que lo que calculas aleatoriamente es el numero de la imagen y con ese número montas el string de la ruta de la etiqueta img (src).*/


const cambia_imagen = new Array();
    cambia_imagen[0]="imagen0.jpg";
    cambia_imagen[1]="imagen1.jpg";
    cambia_imagen[2]="imagen2.jpg";
    cambia_imagen[3]="imagen3.jpg";
    cambia_imagen[4]="imagen4.jpg";
    cambia_imagen[5]="imagen5.jpg";
    cambia_imagen[6]="imagen6.jpg";

function changeImage(){
    let randomImage = Math.round(Math.random()*cambia_imagen.length);
    let thisImg = document.getElementById("imagenWeb").src;
    thisImg = cambia_imagen[randomImage];
}

document.getElementById("imagenWeb").addEventListener("click", changeImage);
    



/*function changeImage(e){
    if (e.target.getAttribute("src")==IMG_INITIAL){
        e.target.setAttribute("src", cambia_imagen);
    } else {
        e.target.setAttribute("src", IMG_INITIAL);
    }
}

document.getElementById("changePhotoFunction").addEventListener("click", changeImage);*/

//Otra opcion
/*
function getRandom() {
    return Math.random();
  }
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
*/

