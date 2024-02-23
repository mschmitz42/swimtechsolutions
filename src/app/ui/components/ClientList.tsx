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
                <div className="card-header">
                    {
                        (user.profile == null) ? user.name : user.profile.firstName + " " + user.profile.lastName
                    }
               </div>
                <div className="card-body">
                    {/* <Image
                        src={user.image ??="/img/logo.png"}
                        width={100}
                        height={100}
                        className=""
                        alt="User Image"
                    /> */}
                    {user.email}
                </div>
                <div className="card-footer">
                    <Link className="btn" href={`lessons/?user=${user.id.toString()}`}>
                        Lessons
                    </Link>
                    <Link className="btn" href={`videos/?user=${user.id.toString()}`}>
                        Videos
                    </Link>
                    <Link className="btn" href={`clients/${user.id.toString()}`}>
                        Edit
                    </Link>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}