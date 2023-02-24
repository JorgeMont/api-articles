import User from "../models/User";

//GET para /users , lista todos los usuarios
export const indexUsers = async(request, response) => {
    try{
        const users = await User.find({}); //Con los {} dice que traiga todo
        response.status(200).send(users);
    }
    catch(error){
        console.error(error);
    }
}

//POST /users - Crear Nuevo Usuario
export const createUser = async(request, response) => {
    try{
        //Obtenemos datos desde la solicitud
        const {name, email, password} = request.body;
        //Preparamos los datos que vienen del cliente en nuestro modelo
        const newUser = new User({
            name,
            email,
            password
        });

        //salvamos en la BD
        await newUser.save();
        //enviamos la respuesta al cliente
        response.status(201).send(newUser);
    }
    catch(error){
        console.error(error);
    }
}

//GET /users/id - Leer datos de User por id
export const readUser = async(request, response) => {
    try{
        const {id} = request.params;
        const user = await User.findById(id);

        //Manejando usuario no encontrado
        if(!user){
            response.status(404).send({
                error: 'No se encontro ningun usuario con ese id'
            });
        }

        response.status(200).send(user);
    }
    catch(error){
        console.error(error);
    }
}

//PATCH /users/id - Actualizar usuario según  su id
export const updateUser = async(request, response) => {
    try{
        const {id} = request.params;
        const bodyParams = {...request.body};

        //Crea un usuario "temporal con los datos actualizados e indica que se hicieron cambios con new"
        const updateUser = await User.findByIdAndUpdate(id, bodyParams, {new: true});
        response.status(201).send(updateUser);
    }
    catch(error){
        console.error(error);
    }
}

//DELETE /users/id - Eliminar un usuario según su id
export const deleteUser = async (request, response) => {
    try {
      const { id } = request.params
      const deletedUser = await User.findByIdAndDelete(id)
      
      if (!deletedUser) {
        response.status(404).send({ 
          error: 'No se encontro ningún registro en la base de datos'
        })
      }
      
      response.sendStatus(204);
    } catch (error) {
      console.log(error)
    }
    
  
  }