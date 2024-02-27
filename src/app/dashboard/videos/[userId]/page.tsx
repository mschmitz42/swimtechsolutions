import VideoList from "@/app/ui/components/VideoList"
import { getUser } from "@/db/users"

type Props = {
    userId: string,
    firstName: string,
    lastName: string
}

export default async function ClientVideoPage({
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
            <div className="p-5">
                <h1 className="blue">{props.firstName} {props.lastName}&apos;s Videos</h1>
            </div>

            <div className="container">
              <div className="row">
              <div className="col-12 col-md-8 ms-3">
                  <VideoList userId={userId}/>
                </div>
              </div>
            </div>

        </>
    );
}

