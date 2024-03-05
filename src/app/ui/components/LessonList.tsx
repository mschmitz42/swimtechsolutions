import { getLessons, getUserLessons } from "@/db/lessons"
import Link from "next/link"


export default async function LessonList ( { userId }: {userId: string}  ) {
    const lessons = userId === ""? await getLessons():await getUserLessons(userId)

    return (
        <>
        <div className="card-grid">
            {lessons.map(lesson => (
                <div key={lesson.id} className="card">
                <div className="card-header">
                    {lesson.description}
                </div>
                <div className="card-body">
                    {lesson.user?.name ?? "n/a"}
                </div>
               <div className="card-footer">
                    <Link className="btn" href={`/dashboard/lessons/view/${lesson.id.toString()}`}>
                        View
                    </Link>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}