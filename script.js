
let contenedor = document.getElementById("contenedor");
let nuevoContenedor = document.getElementById("nuevoContenedor");

async function buscar() {
    
    contenedor.innerHTML= "";

    let url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=4`;

    let resp = await fetch(url);

    let info = await resp.json();

    for (i = 0; i < info.length; i++) {
        let imagen = document.createElement("img");
        imagen.setAttribute("src", info[i].image);
        imagen.style.height = "200px";
        contenedor.appendChild(imagen);

        let nombre = document.createElement("div");
        let nombre2 = "<p> Name:" + info[i].character + "</p>";
        nombre.innerHTML = nombre2;
        contenedor.appendChild(nombre)

        let frase = document.createElement("div");
        let frase2 = "<p> Quote: " + info[i].quote + "</p>";
        frase.innerHTML = frase2;
        contenedor.appendChild(frase)
    }
}



async function masPersonajes() {
        
    let url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=8`;

    let resp = await fetch(url);

    let info = await resp.json();

    for (i = 0; i < info.length; i++) {
        let imagen = document.createElement("img");
        imagen.setAttribute("src", info[i].image);
        imagen.style.height = "200px";
        nuevoContenedor.appendChild(imagen);

        let nombre = document.createElement("div");
        let nombre2 = "<p> Name:" + info[i].character + "</p>";
        nombre.innerHTML = nombre2;
        nuevoContenedor.appendChild(nombre)

        let frase = document.createElement("div");
        let frase2 = "<p> Quote: " + info[i].quote + "</p>";
        frase.innerHTML = frase2;
        nuevoContenedor.appendChild(frase)
    }
}