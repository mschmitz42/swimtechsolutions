
import DashboardHeader from "../ui/components/DashboardHeader";
import Sidebar from "../ui/components/Sidebar";
import AOSClient from "@/components/AOSClient";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
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
  