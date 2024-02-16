import Image from 'next/image';
import Link from 'next/link';

export default function DashboardHeader () {
    return (
        <>
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="logo d-flex align-items-center justify-content-between ms-5">
                <Link href="/" className="logo d-flex align-items-center w-auto">
                <Image
                    src="/img/logo.png"
                    width={120}
                    height={53}
                    className=""
                    alt="Swimtech Solutions Logo"
                />
                <span className="logo-text ms-3">Swimtech Solutions</span>
                </Link>
            <i className="bi bi-list toggle-sidebar-btn ms-3"></i>
            </div>

        </header>
        {/* <!-- End Header --> */}
       </>
    );
}