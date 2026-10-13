const btnVer = async () => {
    try {
        const id = Math.floor(Math.random() * 20) + 1;

        const req = await fetch(`https://fakestoreapi.com/products/${id}`);
        const res = await req.json();

        document.getElementById("usrId").textContent = "#" + res.id;

        document.getElementById("producto").innerHTML = `
            <img src="${res.image}" width="150" alt="${res.title}">
            <h5 class="hud-value mt-3">${res.title}</h5>
            <h3 class="producto-precio">$${res.price}</h3>
            <p>${res.category}</p>
            <p class="producto-descripcion">${res.description}</p>
            <p>Calificación: ${res.rating.rate}/5</p>
        `;
    } catch (error) {
        console.error(error);
        document.getElementById("producto").innerHTML =
            "<p class='text-danger'>Error al cargar los datos</p>";
    }
};

btnVer();