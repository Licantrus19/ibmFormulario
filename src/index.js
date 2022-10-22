import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from "url"
import path from 'path'

import favicon from 'serve-favicon'
import indexRoutes from './routes/index.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.urlencoded({ extended: true }))

// console.log(__dirname)

app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')))


app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))


app.listen(3000)
console.log('Server is listening on port', 3000)