
const obtenerProducto = async () => {
    const inicio = performance.now();

    try {
        // Elegir un producto aleatorio del 1 al 20
        const id = Math.floor(Math.random() * 20) + 1;

        const request = await fetch(
            `https://fakestoreapi.com/products/${id}`
        );

        if (!request.ok) {
            throw new Error("Error al consumir la API");
        }

        const response = await request.json();
        const fin = performance.now();

        document.getElementById("productoId").textContent =
            "#" + response.id;

        document.getElementById("productoEstado").textContent =
            "200 OK";

        document.getElementById("productoLatencia").textContent =
            Math.round(fin - inicio) + " ms";

        document.getElementById("producto").innerHTML = `
            <img
                src="${response.image}"
                alt="${response.title}"
                class="img-fluid mb-3"
                style="max-width:180px; max-height:220px; object-fit:contain;"
            >

            <h5 class="hud-value mt-2">
                ${response.title}
            </h5>

            <h3 class="producto-precio mt-3">
                $${Number(response.price).toFixed(2)}
            </h3>

            <p class="text-info">
                ${response.category}
            </p>

            <p>${response.description}</p>

            <p>
                <i class="fa-solid fa-star text-warning"></i>
                Calificación: ${response.rating.rate}/5
            </p>

            <p class="hud-label">
                Opiniones registradas: ${response.rating.count}
            </p>
        `;

    } catch (error) {
        console.error("Error al consumir la API:", error);

        document.getElementById("productoEstado").textContent =
            "ERROR";

        document.getElementById("producto").innerHTML =
            "<p class='text-danger'>Error al cargar el producto</p>";

        document.getElementById("productoLatencia").textContent =
            "-- ms";
    }
};

// Cargar un producto al abrir la página
document.addEventListener("DOMContentLoaded", () => {
    obtenerProducto();

    document.getElementById("btnProducto")
        .addEventListener("click", obtenerProducto);
});
