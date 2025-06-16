
// Inicialización de categorías en localStorage
categorias = {
    "101" : {codigo: "101", nombre: "Videojuegos", descripcion: "Sumérgete en el universo gamer con nuestro merchandising exclusivo de tus videojuegos favoritos. Desde figuras de tus personajes más épicos hasta la ropa con los logos más icónicos, aquí encontrarás el loot perfecto para cada misión. ¡Prepárate para subir de nivel tu colección!", imagen: "img/cat101.png" },
    "102" : {codigo: "102", nombre: "Animes", descripcion: "Explora nuestra colección dedicada al fascinante mundo del anime. Figuras detalladas, indumentaria con diseños de tus series favoritas y accesorios únicos te esperan. Demuestra tu amor por el manga y la animación japonesa con artículos que te harán sentir parte de la historia.", imagen: "img/cat102.png"  },
    "103" : {codigo: "103", nombre: "Series", descripcion: "Revive cada episodio y celebra tus obsesiones televisivas con el merchandising oficial de las series que marcan tendencia. Encuentra desde Funkos de tus personajes más queridos hasta réplicas de accesorios y ropa inspirada en tus historias preferidas. ¡Tu serie favorita, ahora en tu día a día!", imagen: "img/cat103.png"  },
    "104" : {codigo: "104", nombre: "Peliculas", descripcion: "¡Acción, aventura y magia al alcance de tu mano! Descubre nuestra selección de productos de las películas que te robaron el aliento. Desde coleccionables de tus héroes y villanos hasta objetos icónicos que te transportarán directamente a la pantalla grande. ¡Haz que la magia del cine cobre vida en tu hogar!", imagen: "img/cat103.png"  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));
