import { createContext, useContext, useState, useEffect } from "react"

const TokenContext = createContext()

export function tokenizer ({ token }) {
  sessionStorage.setItem("token", JSON.stringify(token))
}

export default function TokenContextProvider({ children }) {

  const [token, setToken] = useState(undefined)

  useEffect(() => {

    token && tokenizer({ token })

  }, [token])

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export const useTokenContext = () => useContext(TokenContext)