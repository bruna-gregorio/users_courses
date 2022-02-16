import { Request, Response } from "express";

import { CreateCourseService } from "../services/CreateCourseService";


class CreateCourseController {
  async handle(request: Request, response: Response) {
    const { name } = request.body

    const createCourseService = new CreateCourseService()

    const course = await createCourseService.execute(name)

    return response.json(course)
  }
}

export { CreateCourseController }