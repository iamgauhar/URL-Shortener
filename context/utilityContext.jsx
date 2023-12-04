import { createContext, useContext, useState } from "react";

const UtilityContext = createContext();

const UtilityContextProvider = ({ children }) => {
    const [msg, setMsg] = useState("");
    const [spinner, setSpinner] = useState(false)
    const [err, setErr] = useState(false)
    const [failure, setFailure] = useState(false)
    const [isTable, setIsTable] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)
    const [nor, setNor] = useState(0)
    const [isMsg, setIsMsg] = useState(false)
    const [verified, setVerified] = useState(false)


    return (
        <UtilityContext.Provider
            value={{
                err, setErr,
                spinner, setSpinner,
                isMsg, setIsMsg,
                msg, setMsg,
                failure, setFailure,
                btnLoading, setBtnLoading,
                nor, setNor,
                isTable, setIsTable,
                verified, setVerified,
            }}
        >
            {children}
        </UtilityContext.Provider>
    );
};

const useUtilityContext = () => useContext(UtilityContext);

export { UtilityContext, UtilityContextProvider, useUtilityContext };