import Post from "../models/Post";

//GET para /posts - Lista de todos los posts
export const indexPosts = async(request, response) => {
    try{
        const posts = await Post.find({}); //Con los {} dice que traiga todo
        response.status(200).send(posts);
    }
    catch(error){
        console.error(error);
    }

}

//POST /posts - Crea un nuevo post
export const createPost = async(request, response) => {
    try{
        //Obtiene datos del request
        const {
            title,
            author,
            cover,
            tags,
            likes,
            comments
        } = request.body;

        //Preparamos los datos de acuerdo al modelo
        const newPost = new Post({
            title,
            author,
            cover,
            tags,
            likes,
            comments
        });

        //Salvamos a la BD
        await newPost.save();
        response.status(201).send(newPost);

    }
    catch(error){
        console.error(error);
    }
}