import { Request, Response } from "express";

import { UpdateUserService } from "../services/UpdateUserService";


class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name, age, email, password, photo, course_id } = request.body

    const updateUserService = new UpdateUserService()

    const updateUser = await updateUserService.execute({ id, name, age, email, password, photo, course_id })

    return response.json(updateUser)
  }
}

export { UpdateUserController }