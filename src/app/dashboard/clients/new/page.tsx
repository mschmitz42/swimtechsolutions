import { ClientForm } from "@/app/ui/components/ClientForm";
// import { UserSelectOptions } from "../userSelectOptions"

export default function NewClientPage() {
  return (
    <>
    <div className="p-5">
        <h1 className="page-title blue">New Client</h1>
    </div>
    <div className="container">
        <div className="row">
        <div className="col-12 col-md-8 ms-3">
            <ClientForm/>
        </div>
        </div>
    </div>

    </>
  )
}
