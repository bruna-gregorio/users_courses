import prismaClient from "../prisma"


class ListByCourseService {
  async execute(course_id: string) {
    const courseExists = await prismaClient.course.findFirst({
      where: {
        id: course_id
      }
    })

    if (!courseExists) {
      throw new Error("Course not found!")
    }

    const filterbyCourse = await prismaClient.user.findMany({
      where: {
        course_id: course_id
      },
      orderBy: {
        name: "asc"
      }
    })
    return filterbyCourse
  }
}

export { ListByCourseService }