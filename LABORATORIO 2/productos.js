
const btnVer = async () => {
    const contenedor = document.getElementById("producto");
    const estado = document.getElementById("productoEstado");
    const idProducto = document.getElementById("productoId");
    const latencia = document.getElementById("productoLatencia");

    const inicio = performance.now();

    try {
        // Elegir un producto aleatorio del 1 al 20
        const id = Math.floor(Math.random() * 20) + 1;

        estado.textContent = "CARGANDO...";
        contenedor.innerHTML = "<p>Cargando producto...</p>";

        const req = await fetch(
            `https://fakestoreapi.com/products/${id}`
        );

        if (!req.ok) {
            throw new Error("No se pudo consultar la API");
        }

        const res = await req.json();

     
        idProducto.textContent = "#" + res.id;

        contenedor.innerHTML = `
            <img
                src="${res.image}"
                class="producto-img mb-3"
                alt="${res.title}"
            >

            <h5 class="hud-value mt-3">${res.title}</h5>

            <p class="producto-precio">
                $${Number(res.price).toFixed(2)}
            </p>

            <p>
                <strong>Categoría:</strong> ${res.category}
            </p>

            <p class="producto-descripcion">
                ${res.description}
            </p>

            <p>
                <strong>Calificación:</strong>
                ${res.rating.rate}/5
                (${res.rating.count} valoraciones)
            </p>
        `;

        latencia.textContent =
            Math.round(performance.now() - inicio) + " ms";

        estado.textContent = "200 OK";

    } catch (error) {
        console.error("Error al cargar productos:", error);

        estado.textContent = "ERROR";

        contenedor.innerHTML =
            "<p class='text-danger'>No se pudo cargar el producto. Intenta nuevamente.</p>";
    }
};

document.getElementById("btnProducto").addEventListener("click", btnVer);

btnVer();
