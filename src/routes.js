import { Router } from 'express'

import multer from 'multer'
import multerConfig from './config/multer'
import authMiddlewares from './app/middlewares/auth'

import SessionController from './app/controllers/SessionController'
import ProductController from './app/controllers/ProductController'
import UserController from './app/controllers/UserController'
import CategoryController from './app/controllers/CategoryController'


const upload = multer(multerConfig)

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddlewares)

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)

export default routes
