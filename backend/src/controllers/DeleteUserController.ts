import { Request, Response } from "express";

import { DeleteUserService } from "../services/DeleteUserService";


class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteUserService = new DeleteUserService()

    const userDeleted = await deleteUserService.execute(id)

    return response.json({
      message: "User deleted successfully!",
      userDeleted
    })
  }
}

export { DeleteUserController }