import ClientList from "@/app/ui/components/ClientList"
import UserSearchForm from "@/app/ui/components/UserSearchForm"

export default function Page() {
    return (
        <>

            <div className="p-5 mb-5">
                <h1 className="blue">Clients</h1>
                <UserSearchForm/>
                <ClientList/>
            </div>

        </>
    )
}