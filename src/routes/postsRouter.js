import { Router } from "express";
//Import posts controllers

const router = Router()

router.route('/posts')
  .get()
  .post()

router.route('/posts/:id')
  .get()
  .patch()
  .delete()

export default router;