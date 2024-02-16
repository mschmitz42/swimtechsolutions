"use client"

import "../assets/vendor/aos/aos.css";

import { useEffect } from 'react';
import AOS from "../assets/vendor/aos/aos"

export default function AOSClient({
    children,
}: {
    children: React.ReactNode
}) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
          });
          }, [])

    return <>{children}</>
}
