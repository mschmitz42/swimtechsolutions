import LessonList from "@/app/ui/components/LessonList"
import { getUser } from "@/db/users"
import Link from 'next/link';

type Props = {
    userId: string,
    firstName: string,
    lastName: string
}


export default async function ClientLessonPage({
    params: { userId },
  }: {
    params: { userId: string }
  }) {

    const db_user = await getUser( userId );

    const props: Props = {
        userId: db_user?.id ?? userId,
        firstName: db_user?.profile?.firstName ?? "",
        lastName: db_user?.profile?.lastName ?? "",
    }
   
    return (
        <>

            <div className="p-5 mb-5">
                <h1 className="blue">{props.firstName} {props.lastName}&apos;s Swim Lessons</h1>
                <LessonList userId={userId}/>
            </div>

        </>
    )
}