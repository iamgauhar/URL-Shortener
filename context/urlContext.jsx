import { createContext, useContext, useState } from "react";

const urlContext = createContext();

const urlContextProvider = ({ children }) => {
    const [url, setUrl] = useState("");
    const [msg, setMsg] = useState("")

    return (
        <urlContext.Provider value={{
            url, setUrl,
            msg, setMsg,
        }}>
            {children}
        </urlContext.Provider>
    )
}

const useUrlContext = () => useContext(urlContext)

export { urlContext, urlContextProvider, useUrlContext }