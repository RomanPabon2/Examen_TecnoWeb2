require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');
const Usuario = require('./models/Usuario');
const Producto = require('./models/Producto');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Middleware para contar operaciones
const contadorOperaciones = async (req, res, next) => {
    try {
        await Contador.updateOne({}, { $inc: { operaciones: 1 } }, { upsert: true });
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Usamos el middleware en todas las rutas
app.use(contadorOperaciones);

// Rutas
app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);

// Endpoint para obtener el número total de documentos en Usuarios y Productos
app.get('/contadores', async (req, res) => {
    try {
        const usuariosCount = await Usuario.countDocuments();
        const productosCount = await Producto.countDocuments();
        res.json({
            usuarios: usuariosCount,
            productos: productosCount
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para obtener el número de operaciones
app.get('/operaciones', async (req, res) => {
    try {
        const contador = await Contador.findOne();
        res.json({ operaciones: contador ? contador.operaciones : 0 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
