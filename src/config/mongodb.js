// const { MongoClient} = require('mongodb');
// import {MongoClient} from 'mongodb';
import mongoose from 'mongoose';
const DB_NAME = 'BlogApp';

//Insertar const de la URI aquí
const uri = ``;

export const mongoDbConnection = async() => {
    try{
        await mongoose.set('strictQuery', false).connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })


        console.log('Conexión con mongo Atlas exitosa');
    }
    catch(error){
        console.error('Ocurrio un error al conectarse', error);
        process.exit(1)
    }

};

export const mongoDbInstance = () => {
    return db;
};
