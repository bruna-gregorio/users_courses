import prismaClient from "../prisma"


class UpdateCourseService {
  async execute(id: string, name: string) {
    const courseExists = await prismaClient.course.findUnique({
      where: {
        id: id
      }
    })

    if (!courseExists) {
      throw new Error("Course not found!")
    }


    const updateCourse = await prismaClient.course.update({
      where: {
        id: id
      },
      data: {
        name: name
      }
    })

    if (!name || name.length >= 1) {
      throw new Error("Name is required and must have more than 2 letters!")
    }

    return updateCourse
  }
}

export { UpdateCourseService }