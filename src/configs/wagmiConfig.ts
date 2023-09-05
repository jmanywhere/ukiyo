import { w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'

export const walletConnectProjectId = '573758bcbd547e69aea8d2aa862ba40a'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [w3mProvider({ projectId: walletConnectProjectId })],
)

export const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    chains,
    projectId: walletConnectProjectId,
  }),
  publicClient,
  webSocketPublicClient,
})

export { chains }