import ClientList from "@/app/ui/components/ClientList"
import UserSearchForm from "@/app/ui/components/UserSearchForm"
import Link from 'next/link';

export default function Page() {
    return (
        <>

            <div className="p-5 mb-5">
                <h1 className="page-title blue">
                    Clients
                    <div className="title-btns">
                        <Link className="btn btn-outline" href="clients/new">
                        New
                        </Link>
                    </div>
                </h1>
                <UserSearchForm/>
                <ClientList/>
            </div>

        </>
    )
}