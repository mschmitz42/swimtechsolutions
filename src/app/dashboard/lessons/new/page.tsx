import { LessonForm } from "@/app/ui/components/LessonForm";
import { UserSelectOptions } from "@/app/ui/components/UserSelectOptions"

export default function NewLessontPage() {
  return (
    <>
    <div className="p-5">
        <h1 className="page-title blue">New Swim Lesson</h1>
    </div>
    <div className="container">
        <div className="row">
        <div className="col-12 col-md-8 ms-3">
            <LessonForm userSelectOptions={<UserSelectOptions />}/>
        </div>
        </div>
    </div>

    </>
  )
}
