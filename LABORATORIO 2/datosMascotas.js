const obtenerPerro = async () => {
    try {
        const request = await fetch("https://dog.ceo/api/breeds/image/random");
        const response = await request.json();

        if (response.status === "success") {
            const queryId = `#${Math.floor(1000 + Math.random() * 9000)}`;

            document.getElementById("mascotaImg").src = response.message;
            document.getElementById("mascotaUrl").textContent = response.message;
            document.getElementById("mascotaId").textContent = queryId;
            document.getElementById("mascotaEstado").textContent = response.status.toUpperCase();
            document.getElementById("mascotaLatencia").textContent = "14 ms";
        }
    } catch (error) {
        console.error("Error al consumir la API:", error);
        document.getElementById("mascotaEstado").textContent = "ERROR";
    }
};

// Cargar la imagen del perro al abrir la página
obtenerPerro();

// Asignar el evento al botón DATA
document.getElementById("btnData").addEventListener("click", obtenerPerro);