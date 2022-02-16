import { Request, Response } from "express";

import { UpdateCourseService } from "../services/updateCourseService";


class UpdateCourseController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name } = request.body

    const updateCourseService = new UpdateCourseService()

    const updateCourse = await updateCourseService.execute(id, name)

    return response.json(updateCourse)
  }
}

export { UpdateCourseController }