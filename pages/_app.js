import '@/styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import { SessionProvider } from "next-auth/react"

const supportedChainIds = [1,4]
const connectors = {
  injected : {}
}

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  
  return (
  <SessionProvider session={session}>
    <ThirdwebWeb3Provider
    supportedChainIds={supportedChainIds}
    connectors={connectors}
    >
      <Component {...pageProps} />
      
    </ThirdwebWeb3Provider>
  </SessionProvider>
  )
}
