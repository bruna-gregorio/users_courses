import express from 'express'

import { CreateCourseController } from './controllers/CreateCourseController'
import { ListCourseController } from './controllers/ListCourseController'
import { UpdateCourseController } from './controllers/UpdateCourseController'
import { DeleteCourseController } from './controllers/DeleteCourseController'

import { CreateUserController } from './controllers/CreateUserController'
import { ListUserController } from './controllers/ListUserController'
import { UpdateUserController } from './controllers/UpdateUserController'
import { DeleteUserController } from './controllers/DeleteUserController'

import { ListByCourseController } from './controllers/ListByCourseController'

const routes = express.Router()

const createCourseController = new CreateCourseController()
const listCourseController = new ListCourseController()
const updateCourseController = new UpdateCourseController()
const deleteCourseController = new DeleteCourseController()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const listByCourseController = new ListByCourseController()

routes.post("/courses", createCourseController.handle)
routes.get("/courses", listCourseController.handle)
routes.put("/courses/:id", updateCourseController.handle)
routes.delete("/courses/:id", deleteCourseController.handle)

routes.post("/users", createUserController.handle)
routes.get("/users", listUserController.handle)
routes.put("/users/:id", updateUserController.handle)
routes.delete("/users/:id", deleteUserController.handle)

routes.get("/courses/:course_id/students", listByCourseController.handle)

export { routes }