import { VideoForm } from "@/app/ui/components/VideoForm";
import { UserSelectOptions } from "@/app/ui/components/UserSelectOptions"

export default function NewVideoPage() {
  return (
    <>
    <div className="p-5">
        <h1 className="page-title blue">New Video</h1>
    </div>
    <div className="container">
        <div className="row">
        <div className="col-12 col-md-8 ms-3">
            <VideoForm userSelectOptions={<UserSelectOptions />}/>
        </div>
        </div>
    </div>

    </>
  )
}
