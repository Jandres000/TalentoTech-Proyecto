// --- START OF FILE funciones.js ---

// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
    const str = localStorage.getItem(nombre);
    if (!str) {
        throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
    }
    const json = JSON.parse(str);
    const map = new Map(Object.entries(json));
    return map;
}

// Devolver la lista de categorias almacenadas 
function obtenerCategorias() {
    const map = obtenerMap("categorias");
    return Array.from(map.values());
}

// Devolver la lista de banners almacenados
function obtenerBanners() {
    const map = obtenerMap("banners");
    return map.values();
}

// Devolver la lista de productos almacenados
function obtenerProductos(categoria = "todos") {
    const map = obtenerMap("productos");
    let allProducts = [];
    // Itera sobre los arrays de productos que son los valores del mapa
    for (const productArray of map.values()) {
        allProducts = allProducts.concat(productArray); // Concatena cada array de productos a la lista final
    }
    let productos = [];
    if (categoria == null || categoria === "todos") {
        productos = allProducts;
    } else {
        // Filtra los productos por la categoría especificada
        productos = allProducts.filter(producto => producto.categoria === categoria);
    }
    return productos;
}

// --- Funciones para la manipulacion de carrito de compras ---

// Nueva función para actualizar solo el contador del carrito en el encabezado.
// Se debe llamar cada vez que se carga una página y cada vez que se modifica el carrito.
function actualizarContadorCarritoDisplay() {
    const carrito = obtenerCarrito();
    const contadorSpan = document.getElementById('contadorCarrito');
    // Se verifica que el elemento exista para evitar errores en páginas sin el header.
    if (contadorSpan) {
        contadorSpan.textContent = carrito.length;
    }
}

// Obtener el carrito desde sessionStorage
function obtenerCarrito() {
    const str = sessionStorage.getItem("carrito");
    const carrito = str ? JSON.parse(str) : [];
    return carrito;
}

// Mostrar los productos añadidos al carrito de compras (en la página de carrito/checkout)
function mostrarCarrito() {
    const carrito = obtenerCarrito();
    const carritoContainer = document.getElementById('carrito');
    
    // Verificación para evitar errores si la función es llamada en una página sin el contenedor del carrito.
    if (!carritoContainer) {
        return;
    }

    carritoContainer.innerHTML = "";
    let precio = 0;

    carrito.forEach((producto, posicion) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between mb-2';
        li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div class="row">
                    <h6 class="my-0">${producto.nombre}</h6>
                    <small>${producto.precio}</small>
                </div>
                <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarProducto(${posicion})">
                    <i class="fas fa-times"></i>
                </a>
            </div>`;
        carritoContainer.appendChild(li);
        precio += producto.precio;
    });

    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = precio.toFixed(2);
    }

    // El contador del header se actualiza con su propia función.
    actualizarContadorCarritoDisplay();
}

// Agregar un producto al carrito de compras
function agregarProducto(producto, actualizarDisplayCompletoCarrito = true) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    
    // Siempre actualizamos el contador del header.
    actualizarContadorCarritoDisplay();

    // Solo actualizamos la lista completa del carrito si se especifica.
    if (actualizarDisplayCompletoCarrito === true) {
        mostrarCarrito();
    }
}

// Eliminar un producto del carrito de compras
function eliminarProducto(index) {
    let carrito = obtenerCarrito();
    carrito.splice(index, 1);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizamos tanto el contador como la vista del carrito.
    actualizarContadorCarritoDisplay();
    mostrarCarrito();
}

// Vaciar el carrito de compras
function vaciarCarrito() {
    sessionStorage.setItem("carrito", JSON.stringify([]));

    // Actualizamos tanto el contador como la vista del carrito.
    actualizarContadorCarritoDisplay();
    mostrarCarrito();
}

// Obtener un producto específico por su código
function obtenerProductoPorCodigo(codigoProducto) {
    const productosMap = obtenerMap("productos");
    for (const productosArray of productosMap.values()) {
        const producto = productosArray.find(p => p.codigo == codigoProducto);
        if (producto) return producto;
    }
    throw new Error(`No se encontró el producto con el código: ${codigoProducto}`);
}

function actualizarContadorPaginasVistas() {
    // 1. Obtener el contador actual de sessionStorage.
    // Si no existe, lo inicializamos en 0.
    let contador = sessionStorage.getItem('contadorPaginasVistas');
    contador = contador ? parseInt(contador) : 0;

    // 2. Incrementar el contador en 1, ya que hemos cargado una nueva página.
    contador++;

    // 3. Guardar el nuevo valor en sessionStorage.
    sessionStorage.setItem('contadorPaginasVistas', contador);

    // 4. Mostrar el valor en el elemento del header.
    const contadorSpan = document.getElementById('contadorVisitas');
    if (contadorSpan) {
        contadorSpan.textContent = contador;
    }
}

function cargarCategoriasFooter() {
    // Obtenemos el contenedor del footer usando su ID.
    const container = document.getElementById('footer-categorias');

    // Si el contenedor no existe en la página actual, no hacemos nada.
    if (!container) {
        return;
    }

    const categorias = obtenerCategorias();

    // Limpiamos el contenedor por si acaso.
    container.innerHTML = '';

    // Recorremos cada categoría y creamos un elemento de lista (li) para ella.
    categorias.forEach(cat => {
        const li = document.createElement('li');
        
        // Creamos el enlace con el href apuntando a productos.html
        // y el parámetro de categoría correcto.
        li.innerHTML = `<a class="text-decoration-none" href="productos.html?categoria=${cat.codigo}">${cat.nombre}</a>`;
        
        // Añadimos el nuevo 'li' al 'ul' del footer.
        container.appendChild(li);
    });
}

function setupSubscriptionForm() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('subscribeEmail');
    const feedbackContainer = document.getElementById('subscribe-feedback');

    // Si los elementos no existen en la página, no hacemos nada.
    if (!subscribeBtn || !emailInput || !feedbackContainer) {
        return;
    }

    subscribeBtn.addEventListener('click', function() {
        const email = emailInput.value.trim(); // Obtenemos el valor y quitamos espacios

        // Limpiamos cualquier mensaje anterior
        feedbackContainer.innerHTML = '';

        // Validación 1: El campo no puede estar vacío
        if (email === '') {
            mostrarMensaje('Por favor, ingresa tu correo electrónico.', 'danger');
            return;
        }

        // Validación 2: Verificamos que tenga un formato de email básico
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            mostrarMensaje('El formato del correo no es válido.', 'danger');
            return;
        }

        // Si todo es correcto, mostramos un mensaje de éxito
        mostrarMensaje('¡Gracias por suscribirte! Recibirás nuestras novedades.', 'success');
        emailInput.value = ''; // Limpiamos el campo de texto
    });

    // Función auxiliar para mostrar los mensajes con estilo de Bootstrap
    function mostrarMensaje(mensaje, tipo) {
        const alertDiv = document.createElement('div');
        // Usamos clases de Bootstrap para el estilo de la alerta
        alertDiv.className = `alert alert-${tipo} mt-2 py-2`;
        alertDiv.textContent = mensaje;

        feedbackContainer.appendChild(alertDiv);

        // Hacemos que el mensaje desaparezca después de 4 segundos
        setTimeout(() => {
            alertDiv.remove();
        }, 4000);
    }
}


// --- END OF FILE funciones.js ---