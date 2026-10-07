'use client';

import { useState } from "react";
import PageTitle from "@/app/components/pageTitle";
import { useSessionCounter } from "@/app/context/globalContext";

export default function Home() {
    // create local state variable to hold a counter (this page only)
    const [counter, setCounter] = useState<number>(0);

    // access global counter var write method in global context
    const { increment } = useSessionCounter();

    // event handler for button
    const handleClick = () => {
        // updates local page state var
        setCounter(counter + 1);

        // also update global session var (persists on refresh / reload)
        increment();
    }

    const handleReset = () => {
        setCounter(0);
    }

  return (
      <main>
        <PageTitle title="Home" />
        <h1>React Blog</h1>
        <p>We&apos;re building this site using Next.js in COMP2112.</p>
        <section>
            <p>The button has been clicked {counter} times.</p>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleReset}>Reset</button>
        </section>
      </main>
   );
}
