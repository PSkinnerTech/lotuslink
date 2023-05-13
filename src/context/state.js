import { createContext, useState } from "react";

export const StateContext = createContext();

export default function State({ children }) {
    const [name, setName] = useState('');

    const context = { name, setName };

    return <StateContext.Provider value={context}>
        {children}
    </StateContext.Provider>
}