import {Router} from "express";
//Import controllers for posts
import { 
    indexUsers,
    createUser,
    readUser,
    updateUser,
    deleteUser 
} from "../controllers/usersController";

const router = Router();

//Defining routes and their verbs
router.route('/users')
    .get(indexUsers) //pass controller as argument
    .post(createUser) //pass controller as argument

router.route('/users/:id')
    .get(readUser) //pass controller as argument
    .patch(updateUser)
    .delete(deleteUser)

export default router;