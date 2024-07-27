import {useContext, createContext} from "react"

const AuthContext = createContext()
// guarda a info de autentificação
export function AuthProvider({children, value}) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
// retorna a info de autentificação
export function useAuthValue() {
    return useContext(AuthContext)
}