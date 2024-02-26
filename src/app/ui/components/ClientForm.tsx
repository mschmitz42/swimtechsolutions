"use client"

import { createUserAction, editUserAction } from "@/app/actions/users"
import { useFormState, useFormStatus } from "react-dom"
import { FormGroup } from "@/components/FormGroup"
import Link from "next/link"


export type ClientFormProps = {
    user?: { userId: string; email: string; firstName?: string | null | undefined; lastName?: string | null | undefined;  phone?: string | null | undefined; }
  }
  

export function ClientForm( { user }: ClientFormProps ) {
    const action = (user == null) ? createUserAction : editUserAction

    const [errors, formAction] = useFormState(action, {})
  
    return (
        <form action={formAction} className="form">
        <div className="form-row">
            <FormGroup errorMessage={errors.email}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                required
                defaultValue={user?.email}
            />
            </FormGroup>
        </div>
        <div className="form-row">
            <FormGroup errorMessage={errors.password}>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                required={user == null? true : false}
            />
            </FormGroup>
       </div>
        <div className="form-row">
            <FormGroup errorMessage={errors.firstName}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    defaultValue={user?.firstName ?? ""}
                />
            </FormGroup>
            <FormGroup errorMessage={errors.lastName}>
                <label htmlFor="firstName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    defaultValue={user?.lastName ?? ""}
                />
            </FormGroup>
        </div>
        <div className="form-row">
            <FormGroup errorMessage={errors.phone}>
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    defaultValue={user?.phone ?? ""}
                />
            </FormGroup>
        </div>
        <div className="form-row form-btn-row">
            <Link
                className="btn btn-outline"
                href={user ? `/clients/${user.userId}` : "/dashboard/clients"}
                >
                Cancel
            </Link>
            <SubmitButton />
        </div>
        </form>
    )
}
  

function SubmitButton() {
    const { pending } = useFormStatus()
  
    return (
      <button disabled={pending} className="btn" type="submit">
        {pending ? "Saving" : "Save"}
      </button>
    )
  }
  


{/* <div id="PasswordBox" class="register-form-group">
<div class="row align-items-center">
    <div class="col-10">
        <asp:label runat="server" associatedControlID="Password">Password*</asp:label>
        <asp:TextBox ID="Password" runat="server" CssClass="form-control login-form-control" TextMode="Password" maxlength="50" />
    </div>
    <div class="col-2 d-none d-xl-block">
        <div class="tool-tip" role="tooltip" id="passwordrules">
            <!-- info icon -->
            <span class="material-symbols-outlined">info</span>
            <span class="tooltiptext">Must be between 8 and 50 characters including 1 upper case, 1 lower case and 1 digit.</span>
        </div>
    </div>
</div>
</div> */}
