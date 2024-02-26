import { unstable_cache } from "next/cache"
import prisma from "./prisma"
import { Prisma } from '@prisma/client'
import { cache } from "react"
import { hash } from "bcrypt"


export type userError = {
  email?: string; 
  firstName?: string; 
  lastName?: string; 
  phone?: string; 
  password?: string  
}

export const getUsers = unstable_cache(
  cache(async () => {
    // await wait(2000)

    return prisma.user.findMany({
        include: {
          profile: true,
        },
      })  
    }),
  ["users"]
)

// export async function getUsers() {
//   return prisma.user.findMany({
//     include: {
//       profile: true,
//     },
//   })  
// }

export const getUser = unstable_cache(
  cache(async (userId: string) => {
    // await wait(2000)
    return prisma.user.findUnique({ 
      where: { id: userId },
      include: {
        profile: true,
      },
    })
  }),
  ["user", "userId"]
)

export const getUserByEmail = unstable_cache(
  cache(async (email: string) => {
    // await wait(2000)
    return prisma.user.findUnique({ 
      where: { email: email },
      include: {
        profile: true,
      },
    })
  }),
  ["user", "userId"]
)

export async function createUser({
  email,
  firstName,
  lastName,
  phone,
  password
}: {
  email: string
  firstName: string
  lastName: string
  phone: string
  password: string
}) {
  let errors : userError = {}
  let user: Prisma.UserCreateInput
  const hashedPassword = await hash(password, 12);

  user = {
    email: email,
    name: firstName + " " + lastName,
    profile: {
      create: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        password: hashedPassword
      }
    }
  }

  
  try {
    const newUser = await prisma.user.create({ data: user })
    return null;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        errors.email = "Email must be unique"
        return errors;
      }
    }
    throw e;
  }
}

export async function updateUser(
  userId: string,
  {
    email,
    firstName,
    lastName,
    phone,
    password
    }: {
      email: string
      firstName: string
      lastName: string
      phone?: string
      password?: string
      }
) {
  
  let errors : userError = {}
  let user: Prisma.UserUpdateInput
  const hashedPassword = password? await hash(password, 12): "";

  if (hashedPassword !== "") {
    user = {
      email: email,
      name: firstName + " " + lastName,
      profile: {
        update: {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          password: hashedPassword
        }
      }
    }
  } else {
    user = {
      email: email,
      name: firstName + " " + lastName,
      profile: {
        update: {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
        }
      }
    }
  } 

  try {
    const result = await prisma.user.update({ 
      where: {
        id: userId,
      },
      data: user 
    })
    return null;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        errors.email = "Email must be unique"
        return errors;
      }
    }
    throw e;
  }
}

// export async function deletePost(postId: string | number) {
//   await wait(2000)
//   return prisma.post.delete({ where: { id: Number(postId) } })
// }


function wait(duration: number) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
