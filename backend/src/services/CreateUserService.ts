import { hash } from "bcryptjs";
import * as Yup from "yup"

import prismaClient from "../prisma";

interface IUserRequest {
  name: string,
  age: string,
  email: string,
  password: string,
  photo: string,
  course_id: string
}


class CreateUserService {
  async execute({ name, age, email, password, photo, course_id }: IUserRequest) {
    const passwordHash = await hash(password, 8)

    const userExists = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    if (userExists) {
      throw new Error("User already exists!")
    }

    const userInfo = { name, age, email, password: passwordHash, photo, course_id }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      age: Yup.number().required().positive().integer(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(5),
      photo: Yup.string().required(),
      course_id: Yup.string().required()
    })

    await schema.validate(userInfo)

    const user = await prismaClient.user.create({
      data: userInfo,
      include: {
        course: true
      }
    })

    return user
  }
}

export { CreateUserService }