const obtenerUsuario = async () => {
    try {
        const request = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const response = await request.json();

        if (request.ok) {
            const queryId = `#0${response.id}`;

            document.getElementById("usrAvatar").src = `https://i.pravatar.cc/140?u=${response.id}`;
            document.getElementById("usrId").textContent = queryId;
            document.getElementById("usrName").textContent = response.name;
            document.getElementById("usrUsername").textContent = `@${response.username}`;
            document.getElementById("usrEmail").textContent = response.email;
            document.getElementById("usrEmpresa").textContent = response.company.name;
            document.getElementById("usrCiudad").textContent = response.address.city;
            document.getElementById("usrWeb").textContent = response.website;
            document.getElementById("usrEstado").textContent = `${request.status} OK`;
            document.getElementById("usrLatencia").textContent = "14 ms";
        }
    } catch (error) {
        console.error("Error al consumir la API:", error);
        document.getElementById("usrEstado").textContent = "ERROR";
    }
};

// Cargar el usuario al abrir la página
obtenerUsuario();

// Asignar el evento al botón
document.getElementById("btnUser").addEventListener("click", obtenerUsuario);