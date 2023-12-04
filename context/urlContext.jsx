import { createContext, useContext, useState } from "react";

const UrlContext = createContext();

const UrlContextProvider = ({ children }) => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortURL] = useState("")
    const [available, setAvailable] = useState(false)
    const [iscopied, setIsCopied] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [allUrls, setAllUrls] = useState([])


    return (
        <UrlContext.Provider value={{
            url, setUrl,
            shortUrl, setShortURL,
            available, setAvailable,
            iscopied, setIsCopied,
            redirect, setRedirect,
            allUrls, setAllUrls,
        }}>
            {children}
        </UrlContext.Provider>
    )
}

const useUrlContext = () => useContext(UrlContext)

export { UrlContext, UrlContextProvider, useUrlContext }