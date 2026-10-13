# [Laboratorio 2](https://apisdepliegue.netlify.app/)

Proyecto grupal de desarrollo web. La aplicación muestra información obtenida desde APIs públicas y la presenta en una página con estilo de panel tecnológico. La idea es practicar el consumo de servicios REST, el manejo de respuestas JSON y la actualización de elementos HTML con JavaScript.

## Participantes

Juan Rodriguez
Melany Perugachi 
Leonel Moreira 

## Funcionalidades

### Usuarios — Leonel Moreira

El archivo `LABORATORIO 2/User.js` consulta el usuario número 1 de JSONPlaceholder:

`https://jsonplaceholder.typicode.com/users/1`

Al recibir la respuesta, muestra el nombre, nombre de usuario, correo, empresa, ciudad y sitio web. También genera una imagen de avatar con el identificador del usuario. La consulta se realiza al cargar la página y se puede repetir con el botón **OBTENER USUARIO #1**. Si ocurre un error, se registra en la consola y el estado de la API cambia a `ERROR`.

### Mascotas — Juan Rodriguez

El archivo `LABORATORIO 2/datosMascotas.js` consulta una imagen aleatoria de perro a Dog CEO:

`https://dog.ceo/api/breeds/image/random`

La imagen y su URL se muestran en la sección de mascotas. El botón **DATA** solicita otra imagen. El estado indica si la respuesta fue exitosa y muestra `ERROR` si falla la consulta.

### Productos — Melany Perugachi

El archivo `LABORATORIO 2/productos.js` contiene una consulta a Fake Store API. Selecciona un identificador aleatorio entre 1 y 20 y solicita el producto correspondiente:

`https://fakestoreapi.com/products/{id}`

La lógica preparada muestra imagen, nombre, precio, categoría, descripción y calificación del producto. **En el estado actual, esta sección aún no se visualiza correctamente:** `productos.js` no está incluido en `index.html` y su código busca un elemento con el identificador `producto`, que no existe en el HTML. Por eso, esa parte requiere conectar el script y el contenedor antes de poder usarla en la página.

## Nota sobre las consultas

Las APIs son servicios externos. Si una de ellas no responde o no hay conexión a Internet, los datos de esa sección podrían no cargarse. Las solicitudes usan `fetch`; sus respuestas se convierten a JSON y luego se asignan a los elementos de la página.
