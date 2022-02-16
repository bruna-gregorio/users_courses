import { Request, Response } from "express";

import { ListCourseService } from "../services/ListCourseService";


class ListCourseController {
  async handle(request: Request, response: Response) {
    const listCourseService = new ListCourseService()

    const courses = await listCourseService.execute()

    return response.json(courses)
  }
}

export { ListCourseController }