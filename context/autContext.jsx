import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [verifyEmail, setVerifyEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [user, setUser] = useState(null);
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                name, setName,
                email,
                setEmail,
                password,
                setPassword,
                verifyEmail,
                setVerifyEmail,
                newPassword,
                setNewPassword,
                user, setUser,
                repeatPassword, setRepeatPassword,
                isLoggedIn, setLoggedIn,

            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthContextProvider, useAuthContext };