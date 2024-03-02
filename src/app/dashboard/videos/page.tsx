import VideoList from "@/app/ui/components/VideoList"




export default function Page() {
    return (
        <>

        <div className="p-5 mb-5">
            <h1 className="page-title blue">
                Videos
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