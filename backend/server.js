import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './routes/auth.routes.js'

const app = express();

// Directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, '..', 'frontend', 'views'))
app.set('view engine', 'ejs')
// importa la ruta de auth.routes.js
app.use(indexRoutes)

app.listen(5000, () => {
    console.log(`Server running on port 5000`)
})