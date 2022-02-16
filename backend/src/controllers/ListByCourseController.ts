import { Request, Response } from "express";

import { ListByCourseService } from "../services/ListByCourseService";


class ListByCourseController {
  async handle(request: Request, response: Response) {
    const { course_id } = request.params

    const listByCourseService = new ListByCourseService()

    const filterbyCourse = await listByCourseService.execute(course_id)

    return response.json(filterbyCourse)
  }
}

export { ListByCourseController }