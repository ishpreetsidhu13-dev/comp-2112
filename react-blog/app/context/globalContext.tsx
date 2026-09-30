'use client';

import { createContext, useContext, ReactNode, useState } from "react";
import {isNumberObject} from "node:util/types";

type CounterContextType = {
    sessionCounter: number;
    increment: () => void;
}

// make public
export const GlobalContext = createContext<CounterContextType | undefined>(undefined);

// create wrapper we can use in layout.tsx to make this available everywhere
export function GlobalProvider({ children }: { children: ReactNode }) {
    // use state hook to manage global counter var
    const [sessionCounter, setSessionCounter] = useState<number>(0);
    const increment = () => {
        setSessionCounter(sessionCounter + 1);
    }

    return (
        <GlobalContext.Provider value={{ sessionCounter, increment}}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useSessionCounter() {
    const context = useContext(GlobalContext);
    if (!context) throw new Error("Counter needs a Provider");
    return context;
}