import { getLesson } from "@/db/lessons"


export default async function LessonPage({
    params: { lessonId },
  }: {
    params: { lessonId: string }
  }) {

    const lesson = await getLesson( lessonId );


    return (
        <>
            <div className="p-5">
                <h1 className="blue">{ lesson?.description }</h1>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8" dangerouslySetInnerHTML={{__html: lesson?.body ?? ""}}>

                </div>
              </div>
            </div>

        </>
    );
}