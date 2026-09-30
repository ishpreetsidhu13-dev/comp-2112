'use client';

import Link from "next/link";
import { useSessionCounter} from "@/app/context/globalContext";

export default function Footer() {
    // read global sessionCounter var from global context
    const { sessionCounter } = useSessionCounter();

    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()}</p>
            <p>Session Clicks: {sessionCounter}</p>
            <Link href="/contact">Contact Us</Link>
        </footer>
    );
}