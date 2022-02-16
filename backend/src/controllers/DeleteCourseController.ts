import { Request, Response } from "express";

import { DeleteCourseService } from "../services/DeleteCourseService";


class DeleteCourseController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteCourseService = new DeleteCourseService()

    const courseDeleted = await deleteCourseService.execute(id)

    return response.json({
      message: 'Course deleted successfully!',
      courseDeleted
    })
  }
}

export { DeleteCourseController }