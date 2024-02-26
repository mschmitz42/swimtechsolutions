"use server"

import { createUser, userError } from "@/db/users"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export async function createUserAction(prevState: unknown, formData: FormData) {
    let [data, errors] = validateUser(formData, true)

    if (data == null) return errors
  
    let result = await createUser(data)

    if (result != null) return result;
  
    revalidatePath("/dashboard/clients")
    redirect("/dashboard/clients")
  }

  export async function editUserAction(prevState: unknown, formData: FormData) {
    const [data, errors] = validateUser(formData, false)
    if (data == null) return errors
  
    // const newUser = await createUser(data)
  
    revalidatePath("/dashboard/clients")
    redirect("/dashboard/clients")
  }

  
  function validateUser(formData: FormData, passwordRequired: boolean) {
    const errors: userError = {}

    const email = formData.get("email") as string
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const phone = formData.get("phone") as string
    const password = formData.get("password") as string

    let isValid = true
  
    if (email === "") {
      errors.email = "Required"
      isValid = false
    } else if (!validateEmail(email)) {
      errors.email = "Invalid Email Address"
      isValid = false
    }
  
    if (passwordRequired) {
        if (password === "") {
            errors.password = "Required"
            isValid = false
        } else if (!validatePassword(password)) {
            errors.password = "Password must be between 8 and 50 characters including 1 upper case, 1 lower case, and 1 digit."
            isValid = false
        }
    }
    
    if (firstName === "") {
      errors.firstName = "Required"
      isValid = false
    }
  
    if (firstName === "") {
        errors.firstName = "Required"
        isValid = false
      }
    
    if (lastName === "") {
        errors.lastName = "Required"
        isValid = false
    }

    if (!(phone === ""))  {
        if (!validatePhone(phone)) {
            errors.phone = "Invalid Phone NUmber"
            isValid = false
        }
    }
    
       
    return [isValid ? { email, firstName, lastName, phone, password } : undefined, errors] as const
  }


function validateEmail(email: string) {
    const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(String(email).toLowerCase());
}



function validatePassword(pwd: string) {
    const res = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,50}$/;
    return res.test(String(pwd));
}



function validatePhone(phone: string) {
    const res = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return res.test(String(phone));
}

  