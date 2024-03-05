import VideoList from "@/app/ui/components/VideoList"
import Link from 'next/link';




export default function Page() {
    return (
        <>

        <div className="p-5 mb-5">
            <h1 className="page-title blue">
                Videos
                <div className="title-btns">
                    <Link className="btn btn-outline" href="videos/new">
                    New
                    </Link>
                </div>
            </h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 ms-3">
                    <VideoList userId={""}/>
                </div>
            </div>
        </div>

        </>
    )
}