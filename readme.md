# Proyecto Backend con Node.js, Express.js y MongoDB

## Descripcion
Este proyecto es un backend utilizando Node.js, Express.js y MongoDB. Permite gestionar dos colecciones: **Usuarios** y **Productos**, con operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Además, lleva un contador de registros en cada colección y un contador de operaciones realizadas.

## Tecnologias
- Node.js
- Express.js
- MongoDB (utilizando MongoDB Atlas)
- Mongoose

## Instrucciones para ejecutar el backend


### 1. Instalar dependencias

Navega a la carpeta del proyecto y ejecuta:


### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y añade la siguiente línea con tu URI de conexión de MongoDB Atlas:
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombre_base_de_datos>?retryWrites=true&w=majority


### 3. Ejecutar el servidor

Una vez configurado todo, ejecuta el siguiente comando: npm start


El servidor se ejecutará en `http://localhost:5000`.

## Rutas disponibles

### **Usuarios**
- **POST /usuarios**: Crear un nuevo usuario.
- **GET /usuarios**: Obtener todos los usuarios.
- **PUT /usuarios/:id**: Actualizar un usuario por ID.
- **DELETE /usuarios/:id**: Eliminar un usuario por ID.

### **Productos**
- **POST /productos**: Crear un nuevo producto.
- **GET /productos**: Obtener todos los productos.
- **PUT /productos/:id**: Actualizar un producto por ID.
- **DELETE /productos/:id**: Eliminar un producto por ID.


### **Operaciones**
- **GET /operaciones**: Obtener el número total de operaciones realizadas en el backend.

## Pruebas

Puedes probar las rutas utilizando **Postman** o **Insomnia**.

### Ejemplos de pruebas:

- **POST /usuarios**
  - Método: `POST`
  - URL: `http://localhost:5000/usuarios`
  - Body: JSON con los datos del usuario:
    ```json
    {
        "nombre": "Juan Pérez",
        "email": "juanperez@example.com"
    }
    ```

- **GET /usuarios**
  - Método: `GET`
  - URL: `http://localhost:5000/usuarios`

- **PUT /usuarios/:id**
  - Método: `PUT`
  - URL: `http://localhost:5000/usuarios/:id`
  - Body: JSON con los datos actualizados.

- **DELETE /usuarios/:id**
  - Método: `DELETE`
  - URL: `http://localhost:5000/usuarios/:id`

- **GET /contadores**
  - Método: `GET`
  - URL: `http://localhost:5000/contadores`

- **GET /operaciones**
  - Método: `GET`
  - URL: `http://localhost:5000/operaciones`

## Autor
Román Telésforo Pabón










