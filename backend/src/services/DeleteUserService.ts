import prismaClient from "../prisma"


class DeleteUserService {
  async execute(id: string) {
    const userExists = await prismaClient.user.findUnique({
      where: {
        id: id
      }
    })

    if (!userExists) {
      throw new Error("User not found!")
    }

    const userDeleted = await prismaClient.user.delete({
      where: {
        id: id
      },
      select: {
        name: true,
        course: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    return userDeleted
  }
}

export { DeleteUserService }