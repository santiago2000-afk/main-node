const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./src/config/config');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./src/routes/authRoutes'));

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Conectado a MongoDB');
})
.catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
    process.exit(1);
});

const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
