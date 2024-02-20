
import DashboardHeader from "../ui/components/DashboardHeader";
import Sidebar from "../ui/components/Sidebar";
import AOSClient from "@/components/AOSClient";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/components/AuthOptions"
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const session = await getServerSession(AuthOptions);

    if (!session || !session.user) {
      redirect("/api/auth/signin");
    }

    return (
      <>

        <AOSClient>

            <DashboardHeader/>

            <Sidebar/>

            <main id="main-dashboard" className="main">

                {children}

            </main> 

            {/* <HomeFooter/> */}

        </AOSClient>

      </>
    );
  }
  