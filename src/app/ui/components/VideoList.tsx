import { getUserVideos } from "@/db/videos"
import Link from "next/link"
import Image from "next/image"


export default async function VideoList ( { userId }: {userId: string}  ) {

    const videos = await getUserVideos(userId)

    return (
        <>
        <div className="card-grid">
            {videos.map(video => (
                <div key={video.id} className="card">
                <div className="card-header">
                    {video.title}
               </div>
                <div className="card-body">
                    <iframe width="560" height="315" src={video.embedCode} title={video.title}></iframe>
                </div>
                <div className="card-footer">
                    {/* <Link className="btn" href={video.url}>
                        View
                    </Link> */}
                </div>
            </div>
            ))}
        </div>
        </>
    )
}