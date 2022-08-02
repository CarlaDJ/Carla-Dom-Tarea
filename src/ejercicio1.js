/*Crea un proyecto web que tenga varias imágenes (mínimo 4) y un archivo HTML que muestre inicialmente cualquiera de ellas. Idealmente las imágenes tendrían que tener el mismo tamaño, y si no es así, edítalas con algún programa para que así sea. Debes hacer un script de forma que cada vez que se haga click sobre la imagen en la web esta cambie a cualquier otra de las imágenes ALEATORIAMENTE.
Para hacerlo te recomiendo que las imágenes se llamen de forma similar (image1, image2, image3, etc) de forma que lo que calculas aleatoriamente es el numero de la imagen y con ese número montas el string de la ruta de la etiqueta img (src).*/


let imagenesRaras  = new Array();
imagenesRaras.push("public/image/imagen0.jpg");
imagenesRaras.push("public/image/imagen1.jpg");
imagenesRaras.push("public/image/imagen2.jpg");
imagenesRaras.push("public/image/imagen3.jpg");
imagenesRaras.push("public/image/imagen4.jpg");
imagenesRaras.push("public/image/imagen5.jpg");
imagenesRaras.push("public/image/imagen6.jpg");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function imagesRandom() {
  document.imgRandom.src = imagenesRaras[getRandomInt(0, imagenesRaras.length - 1)];
}