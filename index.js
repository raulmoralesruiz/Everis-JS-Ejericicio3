// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: "white",
    hex: "#ffffff"
  },
  {
    colorName: "red",
    hex: "#ff0000"
  },
  {
    colorName: "orange",
    hex: "#ffa500"
  },
  {
    colorName: "yellow",
    hex: "#ffff00"
  },
  {
    colorName: "orchid",
    hex: "#da70d6"
  },
  {
    colorName: "pink",
    hex: "#ffc0cb"
  },
  {
    colorName: "green",
    hex: "#008000"
  },
  {
    colorName: "silver",
    hex: "#c0c0c0"
  }
];

// se guarda la lista
let lista = document.getElementsByClassName("color-list")[0];

// se guardan todas las filas de la lista
let allLi = document.getElementsByClassName("color-item");

// se recorren los elementos del array colorList
for (let i = 0; i < colorList.length; i++) {
  // guardamos el elemento que recorremos, dentro de la variable elemento
  let elemento = colorList[i];

  // se crea una fila
  let newLi = document.createElement("li");
  // se añade la clase "color-item" a la fila.
  newLi.classList.add("color-item");

  // comprobación para obtener elementos pares
  if ((i + 1) % 2 == 0) {
    // se añade la clase "color-item--odd" a los elementos pares.
    newLi.classList.add("color-item--odd");
  }

  // se añade listener a cada fila, para mostrar el color desde alert.
  newLi.addEventListener("click", e => {
    e.stopPropagation();
    // mostrar alerta indicando color del elemento
    alert(elemento.colorName);
  });

  // se declara div que contiene el color en modo texto.
  let liDivName = document.createElement("div");
  // se añade la clase correspondiente.
  liDivName.classList.add("color-name");
  // se añade el texto correspondiente.
  liDivName.textContent = `Color: ${elemento.colorName}`;

  // se declara div que contiene la muestra del color.
  let liDivShow = document.createElement("div");
  // se añade la clase correspondiente.
  liDivShow.classList.add("color-show");
  // se añade el texto correspondiente.
  liDivShow.textContent = `Muestra`;
  // se añade el background correspondiente.
  liDivShow.style.backgroundColor = elemento.hex;
  // se indica el estilo de borde (líneas discontinuas)
  liDivShow.style.borderStyle = "dashed";

  // se declara botón Next item Color, para cambiar el color de la siguiente fila.
  let liButtonNext = document.createElement("button");
  // se añade la clase correspondiente.
  liButtonNext.classList.add("color-set");
  // se añade el texto correspondiente.
  liButtonNext.textContent = `Next item color`;

  // se añade listener a cada botón (Next item Color), para mostrar fondo del color correspondiente.
  liButtonNext.addEventListener("click", e => {
    e.stopPropagation();

    // se comprueba si el elemento es el primero de la lista
    if (i == colorList.length - 1) {
      // se cambia el background al primer elemento de la lista
      allLi[0].style.backgroundColor = elemento.hex;
    } else {
      // se cambia el background al siguiente elemento de la lista
      newLi.nextSibling.style.backgroundColor = elemento.hex;
    }
  });

  // se declara botón Page Color, para cambiar el color de fondo al body.
  let liButtonPage = document.createElement("button");
  // se añade la clase correspondiente.
  liButtonPage.classList.add("color-set");
  // se añade el texto correspondiente.
  liButtonPage.textContent = `Page color`;

  // se añade listener a cada botón (page color), para mostrar fondo del color correspondiente.
  liButtonPage.addEventListener("click", e => {
    e.stopPropagation();
    // se cambia el background al body
    document.body.style.backgroundColor = elemento.hex;
  });

  // se insertan los elementos anteriores a la fila (newLi)
  newLi.appendChild(liDivName);
  newLi.appendChild(liDivShow);
  newLi.appendChild(liButtonNext);
  newLi.appendChild(liButtonPage);

  // se inserta la fila (newLi) a la lista (lista)
  lista.appendChild(newLi);
}

// evento que muestra mensaje de alerta al pulsar dentro del body.
document.body.addEventListener("click", e => {
  e.preventDefault();
  alert("body");
});
