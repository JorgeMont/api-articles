import express from 'express'
import { mongoDbConnection } from './src/config/mongodb'

import usersRouter from './src/routes/usersRouter'
import postsRouter from './src/routes/postsRouter'

const app = express()

app.use(express.json())

//Aca se activa nuestro enrutador de users y posts
app.use(usersRouter);
app.use(postsRouter);

//Aqui invocamos la conexion con la DB
mongoDbConnection()

app.get('/', (request, response) => {
  response
    .status(200)
    .send({ 
      message: 'API REST del equipo Menus' 
    })
})

//=== SERVIDOR ====//
app.listen(3000, () => {
  console.log('servidor ejecutando en el puerto 3000')
  //Usando puero 3000
})