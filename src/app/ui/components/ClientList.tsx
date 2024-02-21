import { getUsers } from "@/db/users"
import Link from "next/link"
import Image from "next/image"


export default async function ClientList () {
    const users = await getUsers()

    return (
        <>
        <div className="card-grid">
            {users.map(user => (
                <div key={user.id} className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                <div>
                    <Image
                        src={user.image ??="/img/logo.png"}
                        width={100}
                        height={100}
                        className=""
                        alt="User Image"
                    />
                </div>
                </div>
                <div className="card-footer">
                <Link className="btn btn-outline-primary" href={`clients/${user.id.toString()}`}>
                    View
                </Link>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}