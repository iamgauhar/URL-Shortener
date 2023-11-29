import { createContext, useContext, useState } from "react";

const UrlContext = createContext();

const UrlContextProvider = ({ children }) => {
    const [url, setUrl] = useState("");
    const [msg, setMsg] = useState("")
    const [shortUrl, setShortURL] = useState("")
    const [available, setAvailable] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [iscopied, setIsCopied] = useState(false)
    const [err, setErr] = useState(false)
    const [isMsg, setIsMsg] = useState(false)
    const [verified, setVerified] = useState(false)

    return (
        <UrlContext.Provider value={{
            url, setUrl,
            shortUrl, setShortURL,
            available, setAvailable,
            spinner, setSpinner,
            iscopied, setIsCopied,
            err, setErr,
            isMsg, setIsMsg,
            msg, setMsg,
            verified, setVerified
        }}>
            {children}
        </UrlContext.Provider>
    )
}

const useUrlContext = () => useContext(UrlContext)

export { UrlContext, UrlContextProvider, useUrlContext }