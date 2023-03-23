import { Router } from 'express'

import multer from 'multer'
import multerConfig from './config/multer'

import SessionController from './app/controllers/SessionController'
import ProductController from './app/controllers/ProductController'
import UserController from './app/controllers/UserController'


const upload = multer(multerConfig)

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.get('/products', ProductController.index)


export default routes
