'use client';

import { useEffect } from "react";

export default function PageTitle({ title }: { title: string }) {
   // use the effect hook to change the page title in the DOM to the prop value
    useEffect(() => {
        document.title = `${title} - COMP2112 Blog`;
    }, [title]);

    // must return empty value as a tsx component
    return null;
}