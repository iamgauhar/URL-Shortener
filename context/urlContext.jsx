import { createContext, useContext, useState } from "react";

const UrlContext = createContext();

const UrlContextProvider = ({ children }) => {
    const [url, setUrl] = useState("");
    const [updateUrlInput, setUpdateUrlInput] = useState("");
    const [shortUrl, setShortURL] = useState("")
    const [available, setAvailable] = useState(false)
    const [iscopied, setIsCopied] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [allUrls, setAllUrls] = useState([])
    const [openUrlInput, setOpenUrlInput] = useState(false)
    const [urlId, setUrlId] = useState("")
    const [updateSuccess, setUpdateSuccess] = useState(false)


    return (
        <UrlContext.Provider value={{
            url, setUrl,
            shortUrl, setShortURL,
            available, setAvailable,
            iscopied, setIsCopied,
            redirect, setRedirect,
            allUrls, setAllUrls,
            updateUrlInput, setUpdateUrlInput,
            openUrlInput, setOpenUrlInput,
            urlId, setUrlId,
            updateSuccess, setUpdateSuccess,
        }}>
            {children}
        </UrlContext.Provider>
    )
}

const useUrlContext = () => useContext(UrlContext)

export { UrlContext, UrlContextProvider, useUrlContext }