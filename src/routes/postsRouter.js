import { Router } from "express";
import { createPost, indexPosts } from "../controllers/postsController";
//Import posts controllers

const router = Router()

router.route('/posts')
  .get(indexPosts)
  .post(createPost)

router.route('/posts/:id')
  .get()
  .patch()
  .delete()

export default router;