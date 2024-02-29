import { getUserVideos } from "@/db/videos"
// import Link from "next/link"
// import Image from "next/image"
// import DOMPurify from "isomorphic-dompurify"


export default async function VideoList ( { userId }: {userId: string}  ) {

    const videos = await getUserVideos(userId)

    return (
        <>
        <div className="card-grid video-card-grid">
            {videos.map(video => (
                <div key={video.id} className="card">
                <div className="card-header video-card-header">
                    {video.title}
               </div>
                <div className="card-body video-card-body">
                {/* <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(video.embedCode)}}></div> */}
                <div dangerouslySetInnerHTML={{__html: video.embedCode}}></div>
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