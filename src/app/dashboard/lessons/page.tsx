import UserSearchForm from "@/app/ui/components/UserSearchForm"
import LessonList from "@/app/ui/components/LessonList"
import Link from 'next/link';


export default function Page() {
    return (
        <>

            <div className="p-5 mb-5">
                <h1 className="page-title blue">
                    Swim Lessons
                    <div className="title-btns">
                        <Link className="btn btn-outline" href="lessons/new">
                        New
                        </Link>
                    </div>
                </h1>
                <UserSearchForm/>
                <LessonList userId={""}/>
            </div>

        </>
    )
}