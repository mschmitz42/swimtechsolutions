"use server"

import { createLesson, lessonError } from "@/db/lessons"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export async function createLessonAction(prevState: unknown, formData: FormData) {

    let [data, errors] = validateLesson(formData)

    if (data == null) return errors
  
    const result = await createLesson(data)

    // if (result != null) return result;
  
    revalidatePath("/dashboard/lessons")
    revalidatePath(`/dashboard/lessons/${data.userId}`)
    redirect("/dashboard/lessons")
  }

//   export async function editUserAction(userId: string, prevState: unknown, formData: FormData) {
//     const [data, errors] = validateUser(formData, false)
//     if (data == null) return errors
  
//     const result = await updateUser(userId, data)

//     if (result != null) return result;

//     revalidatePath("/dashboard/clients")
//     revalidatePath(`/dashboard/clients/${userId}`)
//     redirect("/dashboard/clients")
//   }

  
  function validateLesson(formData: FormData) {
    const errors: lessonError = {}

    const userId = formData.get("userId") as string
    const description = formData.get("description") as string
    const temp_date = formData.get("date") as string
    const body = formData.get("body") as string

    let isValid = true
    let date = new Date().toISOString()
  
    
    if (description === "") {
      errors.description = "Description is Required"
      isValid = false
    }
  
    if (temp_date === "") {
        errors.date = "Date is Required"
        isValid = false
    } else {
        if (!validateDate(temp_date)) {
            errors.date = "Invalid date format. Try mm/dd/yyyy."
            isValid = false
       } else {
            date = new Date(temp_date).toISOString();
       }
    }
    
    if (body === "") {
        errors.body = "Lesson contents are required"
        isValid = false
    }

    
       
    return [isValid ? { userId, description, date, body } : undefined, errors] as const
  }


function validateDate(stringDate: string) {
    return !isNaN(Date.parse(stringDate))
}


