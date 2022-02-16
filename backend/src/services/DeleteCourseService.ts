import prismaClient from "../prisma"


class DeleteCourseService {
  async execute(id: string) {
    const courseExists = await prismaClient.course.findFirst({
      where: {
        id: id
      }
    })

    if (!courseExists) {
      throw new Error("Course not found!")
    }

    const courseDeleted = await prismaClient.course.delete({
      where: {
        id: id
      },
      select: {
        id: true,
        name: true
      }
    })

    return courseDeleted
  }
}

export { DeleteCourseService }