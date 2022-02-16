import prismaClient from "../prisma"
import * as Yup from "yup"


class CreateCourseService {
  async execute(name: string) {
    const courseExists = await prismaClient.course.findFirst({
      where: {
        name
      }
    })

    if (courseExists) {
      throw new Error("Course already exists!")
    }

    const data = { name }

    const schema = Yup.object().shape({
      name: Yup.string().required()
    })

    await schema.validate(data)

    const course = await prismaClient.course.create({ data: data })

    return course
  }
}

export { CreateCourseService }