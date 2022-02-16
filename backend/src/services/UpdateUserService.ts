import { hash } from "bcryptjs"
import * as Yup from "yup"

import prismaClient from "../prisma"

interface IUserRequest {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
  photo: string;
  course_id: string;
}


class UpdateUserService {
  async execute({ id, name, age, email, password, photo, course_id }: IUserRequest) {
    const userExists = await prismaClient.user.findUnique({
      where: {
        id: id
      }
    })

    if (!userExists) {
      throw new Error("User not found!")
    }

    const passwordHash = await hash(password, 8)

    const updateUser = await prismaClient.user.update({
      where: {
        id: id
      },
      data: {
        name: name,
        age: age,
        email: email,
        password: passwordHash,
        photo: photo,
        course_id: course_id
      },
      include: {
        course: true
      }
    })

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      age: Yup.number().required().positive().integer(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(5),
      photo: Yup.string().required(),
      course_id: Yup.string().required()
    })

    await schema.validate(updateUser)

    return updateUser
  }
}

export { UpdateUserService }

