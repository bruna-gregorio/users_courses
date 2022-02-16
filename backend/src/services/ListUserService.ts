import prismaClient from "../prisma"


class ListUserService {
  async execute() {
    const users = await prismaClient.user.findMany({
      include: {
        course: {
          select: {
            name: true
          }
        }
      },
      orderBy: {
        name: "asc"
      }
    })

    return users
  }
}

export { ListUserService }