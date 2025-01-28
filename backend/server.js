import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, '..', 'frontend', 'views'))
app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index', {title: 'Shut-app'})
})

app.listen(5000, () => {
    console.log(`Server running on port 5000`)
})