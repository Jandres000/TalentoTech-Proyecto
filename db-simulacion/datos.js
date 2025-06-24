
// Inicialización de categorías en localStorage
categorias = {
    "101" : {codigo: "101", nombre: "Videojuegos", descripcion: "Sumérgete en el universo gamer con nuestro merchandising exclusivo de tus videojuegos favoritos. Desde figuras de tus personajes más épicos hasta la ropa con los logos más icónicos, aquí encontrarás el loot perfecto para cada misión. ¡Prepárate para subir de nivel tu colección!", imagen: "img/cat101.png", imagenCategoria: "img/cat101.jpg"  },
    "102" : {codigo: "102", nombre: "Animes", descripcion: "Explora nuestra colección dedicada al fascinante mundo del anime. Figuras detalladas, indumentaria con diseños de tus series favoritas y accesorios únicos te esperan. Demuestra tu amor por el manga y la animación japonesa con artículos que te harán sentir parte de la historia.", imagen: "img/cat102.png", imagenCategoria: "img/cat102.jpg"  },
    "103" : {codigo: "103", nombre: "Series", descripcion: "Revive cada episodio y celebra tus obsesiones televisivas con el merchandising oficial de las series que marcan tendencia. Encuentra desde Funkos de tus personajes más queridos hasta réplicas de accesorios y ropa inspirada en tus historias preferidas. ¡Tu serie favorita, ahora en tu día a día!", imagen: "img/cat103.png", imagenCategoria: "img/cat103.jpg" },
    "104" : {codigo: "104", nombre: "Peliculas", descripcion: "¡Acción, aventura y magia al alcance de tu mano! Descubre nuestra selección de productos de las películas que te robaron el aliento. Desde coleccionables de tus héroes y villanos hasta objetos icónicos que te transportarán directamente a la pantalla grande. ¡Haz que la magia del cine cobre vida en tu hogar!", imagen: "img/cat104.png", imagenCategoria: "img/cat104.jpg"  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));

//Inicializacion de banners en localStorage
banners = {
    "101" : {codigo: "101", titulo: "¡Nuevos Lanzamientos!", descripcion: "Descubre lo último en merchandising de tus videojuegos favoritos. ¡No te lo pierdas!", imagen: "img/cat101.png" },
    "102" : {codigo: "102", titulo: "Colección exclusiva de anime", descripcion: "Sumérgete en el mundo del anime con nuestra nueva colección. ¡Artículos únicos que no querrás perderte!", imagen: "img/cat102.png" },
    "103" : {codigo: "103", titulo: "Series que marcan tendencia", descripcion: "Revive tus series favoritas con nuestro merchandising oficial. ¡Haz que cada día sea un episodio especial!", imagen: "img/cat103.png" },
    "104" : {codigo: "104", titulo: "Magia del cine en casa", descripcion: "Lleva la magia del cine a tu hogar con nuestros productos exclusivos. ¡Haz que cada película sea una experiencia única!", imagen: "img/cat104.png" }
};
localStorage.setItem("banners", JSON.stringify(banners));


// Inicialización de productos en localStorage
productos = {
    "101" : [
        {codigo: "101", nombre: "Figura de acción de Mario", descripcion: "Con detalles realistas y articulaciones móviles, esta figura de Mario Bros es ideal para cualquier coleccionista o fan.", precio: 29.99, categoria: "101", imagen: "img/prod101.jpg", calificacion: 4, marca: "Nintendo"},
        {codigo: "102", nombre: "Camiseta de Zelda", descripcion: "Inspirada en The Legend of Zelda, esta prenda de algodón ofrece comodidad y estilo para gamers de todas las edades.", precio: 19.99, categoria: "101", imagen: "img/prod102.jpg", calificacion: 5, marca: "Nintendo"},
        {codigo: "103", nombre: "Mando personalizado PlayStation de Fornite", descripcion: "Con un diseño único de Fortnite, este control para PlayStation garantiza estilo y precisión en cada partida.", precio: 49.99, categoria: "101", imagen: "img/prod103.jpg", calificacion: 4, marca: "Sony"},
        {codigo: "105", nombre: "Sudadera de Call of Duty", descripcion: "Diseñada para los fanáticos del juego, esta sudadera combina estilo urbano con un estampado icónico de Call of Duty.", precio: 39.99, categoria: "101", imagen: "img/prod104.jpg", calificacion: 3, marca: "Activision"},
        {codigo: "106", nombre: "Taza de Pokémon", descripcion: "Ideal para el desayuno de cualquier fan, esta taza presenta a Pikachu en un diseño vibrante y resistente al calor.", precio: 14.99, categoria: "101", imagen: "img/prod105.jpg", calificacion: 5, marca: "Nintendo"},
        {codigo: "107", nombre: "Gorra de Assassin's Creed", descripcion: "Con un diseño sobrio y elegante, esta gorra lleva el emblema de Assassin's Creed para destacar en cualquier ocasión.", precio: 24.99, categoria: "101", imagen: "img/prod106.jpg", calificacion: 4, marca: "Ubisoft"},
        {codigo: "108", nombre: "Llavero de Sonic", descripcion: "Pequeño pero llamativo, este llavero de metal de Sonic es perfecto para mostrar tu amor por el erizo más rápido.", precio: 5.99, categoria: "101", imagen: "img/prod107.jpg", calificacion: 5, marca: "SEGA"},
        {codigo: "109", nombre: "Cojin de Minecraft", descripcion: "Con un diseño pixelado típico del juego, este cojín brinda confort y un toque gamer a cualquier espacio.", precio: 15.99, categoria: "101", imagen: "img/prod108.jpg", calificacion: 4, marca: "Mojang"},
],
    "102" : [
        {codigo: "201", nombre: "Figura de Goku Super Saiyan", descripcion: "Transformado en Super Saiyan, Goku cobra vida en esta figura articulada de gran detalle y calidad.", precio: 34.99, categoria: "102", imagen: "img/prod201.jpg", calificacion: 5, marca: "Bandai"},
        {codigo: "202", nombre: "Camiseta de Naruto", descripcion: "Ideal para fans del ninja de Konoha, esta camiseta ofrece diseño auténtico y comodidad garantizada.", precio: 21.99, categoria: "102", imagen: "img/prod202.jpg", calificacion: 4, marca: "Crunchyroll"},
        {codigo: "203", nombre: "Mando personalizado de PlayStation AOT", descripcion: "Inspirado en Attack on Titan, este mando para PlayStation une funcionalidad y estética épica.", precio: 54.99, categoria: "102", imagen: "img/prod203.jpg", calificacion: 5, marca: "Sony"},
        {codigo: "204", nombre: "Póster de My Hero Academia", descripcion: "Decora tu espacio con este vibrante póster tamaño A2 que muestra a los héroes favoritos del anime.", precio: 11.99, categoria: "102", imagen: "img/prod204.jpg", calificacion: 3, marca: "Toho"},
        {codigo: "205", nombre: "Sudadera de Demon Slayer", descripcion: "Con un diseño inspirado en Tanjiro y compañía, esta sudadera te abriga con estilo y fanatismo.", precio: 44.99, categoria: "102", imagen: "img/prod205.jpg", calificacion: 5, marca: "Aniplex"},
        {codigo: "206", nombre: "Taza de One Piece", descripcion: "Luffy y su tripulación te acompañan en esta resistente taza de cerámica perfecta para cualquier bebida.", precio: 16.99, categoria: "102", imagen: "img/prod206.jpg", calificacion: 4, marca: "Toei Animation"},
        {codigo: "207", nombre: "Gorra de Death Note", descripcion: "Con el icónico logo de Death Note, esta gorra ajustable es un must-have para cualquier otaku serio.", precio: 27.99, categoria: "102", imagen: "img/prod207.jpg", calificacion: 5, marca: "Madhouse"},
        {codigo: "208", nombre: "Figurita de Demon Slayer", descripcion: "Una miniatura de personajes de DS pintada a mano que captura la esencia del personaje con gran fidelidad.", precio: 15.99, categoria: "102", imagen: "img/prod208.jpg", calificacion: 5, marca: "Bandai"},
        ],
    "103" : [
        {codigo: "301", nombre: "Figura de acción de Eleven", descripcion: "Recrea escenas de Stranger Things con esta figura articulada de Eleven en versión detallada.", precio: 29.99, categoria: "103", imagen: "img/prod301.jpg", calificacion: 4, marca: "Netflix"},
        {codigo: "302", nombre: "Camiseta de Game of Thrones", descripcion: "Una prenda que combina diseño y confort para los seguidores de las casas de Westeros.", precio: 19.99, categoria: "103", imagen: "img/prod302.jpg", calificacion: 5, marca: "HBO"},
        {codigo: "303", nombre: "Mando personalizado de Xbox Mandalorian", descripcion: "Con estilo galáctico, este mando de Xbox inspirado en The Mandalorian es ideal para todo fan.", precio: 49.99, categoria: "103", imagen: "img/prod303.jpg", calificacion: 3, marca: "Microsoft"},
        {codigo: "304", nombre: "Póster de Breaking Bad", descripcion: "Ideal para fans de Heisenberg, este póster tamaño A2 aporta un toque dramático a tu pared.", precio: 9.99, categoria: "103", imagen: "img/prod304.jpg", calificacion: 4, marca: "AMC"},
        {codigo: "305", nombre: "Sudadera de Stranger Things", descripcion: "Con un diseño retro ochentero, esta prenda te abriga mientras revives tus momentos favoritos.", precio: 39.99, categoria: "103", imagen: "img/prod305.jpg", calificacion: 5, marca: "Netflix"},
        {codigo: "306", nombre: "Taza de The Office", descripcion: "Lleva la comedia al café con esta taza temática de la inolvidable serie de oficina.", precio: 14.99, categoria: "103", imagen: "img/prod306.jpg", calificacion: 4, marca: "NBC"},
        {codigo: "307", nombre: "Gorra de The Walking Dead", descripcion: "Perfecta para sobrevivir el apocalipsis, esta gorra con logo de TWD es cómoda y estilizada.", precio: 24.99, categoria: "103", imagen: "img/prod307.jpg", calificacion: 5, marca: "AMC"},
        {codigo: "308", nombre: "Figurita de The Mandalorian", descripcion: "Una pieza coleccionable del famoso cazarrecompensas, perfecta para tu escritorio o vitrina.", precio: 12.99, categoria: "103", imagen: "img/prod308.jpg", calificacion: 5, marca: "Star Wars"},
        ],
    "104" : [
        {codigo: "401", nombre: "Poster Jurassic Park", descripcion: "Un clásico del cine plasmado en este póster tamaño A2 que revive la emoción de los dinosaurios.", precio: 12.99, categoria: "104", imagen: "img/prod401.jpg", calificacion: 4, marca: "Universal"},
        {codigo: "402", nombre: "Camiseta de Star Wars", descripcion: "Con logos y diseños icónicos, esta camiseta rinde homenaje a la saga galáctica más querida.", precio: 22.99, categoria: "104", imagen: "img/prod402.jpg", calificacion: 5, marca: "Lucasfilm"},
        {codigo: "403", nombre : "Poster de El padrino", descripcion: "Una pieza infaltable para los cinéfilos, este póster representa la elegancia del cine de mafia.", precio: 10.99, categoria: "104", imagen: "img/prod403.jpg", calificacion: 5, marca: "Paramount"},
        {codigo: "404", nombre: "Sudadera de Harry Potter", descripcion: "Diseñada para los magos y brujas modernos, esta prenda es cálida y mágica a la vez.", precio: 44.99, categoria: "104", imagen: "img/prod404.jpg", calificacion: 4, marca: "Warner Bros"},
        {codigo: "405", nombre: "Taza de Indiana Jones", descripcion: "Bebe como un aventurero con esta taza de cerámica inspirada en el legendario arqueólogo.", precio: 16.99, categoria: "104", imagen: "img/prod405.jpg", calificacion: 3, marca: "Lucasfilm"},
        {codigo: "406", nombre: "ArtBook star wars", descripcion: "Explora el universo de Star Wars con este libro de arte lleno de bocetos e ilustraciones únicas.", precio: 39.99, categoria: "104", imagen: "img/prod406.jpg", calificacion: 5, marca: "Lucasfilm"},
        {codigo: "407", nombre: "Estatua de Darth Vader", descripcion: "Una figura de colección que impone presencia, ideal para los seguidores del lado oscuro.", precio: 89.99, categoria: "104", imagen: "img/prod407.jpg", calificacion: 5, marca: "Star Wars"},
        {codigo: "408", nombre: "Llavero de Jurassic Park", descripcion: "El logo icónico del parque jurásico en un llavero metálico resistente y estilizado.", precio: 7.99, categoria: "104", imagen: "img/prod408.jpg", calificacion: 4, marca: "Universal"},
        {codigo: "409", nombre: "Replica del anillo de El Señor de los Anillos", descripcion: "Una réplica detallada del anillo único que todo fan de Tolkien querrá tener en su colección.", precio: 24.99, categoria: "104", imagen: "img/prod409.jpg", calificacion: 5, marca: "New Line Cinema"},
        {codigo: "410", nombre: "Funko pop de Batman", descripcion: "Este Funko Pop del caballero oscuro es un ícono del coleccionismo con detalles encantadores.", precio: 15.99, categoria: "104", imagen: "img/prod410.jpg", calificacion: 4, marca: "DC Comics"},
]
};
localStorage.setItem("productos", JSON.stringify(productos));