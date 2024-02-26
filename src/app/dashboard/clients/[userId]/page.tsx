import { ClientForm, ClientFormProps } from "@/app/ui/components/ClientForm";
import { getUser } from "@/db/users"


export default async function ClientPage({
    params: { userId },
  }: {
    params: { userId: string }
  }) {

    const db_user = await getUser( userId );

    const props: ClientFormProps = {
      user : {
        userId: userId,
        email: db_user?.email!,
        firstName: db_user?.profile?.firstName,
        lastName: db_user?.profile?.lastName,
        phone: db_user?.profile?.phone,
      }
    }

    return (
        <>
            <div className="p-5">
                <h1 className="blue">Edit {props.user?.firstName} {props.user?.lastName}</h1>
            </div>

            <div className="container">
              <div className="row">
              <div className="col-12 col-md-8 ms-3">
                  <ClientForm  user={ props.user }/>
                </div>
              </div>
            </div>

        </>
    );
}