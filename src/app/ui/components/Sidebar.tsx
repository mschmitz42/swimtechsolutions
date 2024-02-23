"use client"

import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <>
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <Link className="nav-link " href="/dashboard">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-heading"></li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" href="/dashboard/lessons">
                    <i className="bi bi-water"></i>
                    <span>Swim Lessons</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link collapsed" href="/dashboard/videos">
                    <i className="bi bi-camera-video"></i>
                    <span>Videos</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link collapsed" href="/dashboard/clients">
                    <i className="bi bi-people"></i>
                    <span>Clients</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link collapsed" href="/dashboard/profile">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <button className="nav-link collapsed" onClick={() => signOut()}>
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Logout</span>
                    </button>
                </li>

            </ul>

        </aside>

        </>
    );
}