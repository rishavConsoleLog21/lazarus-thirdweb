import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet, metamaskWallet, phantomWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.THIRDWEB_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        localWallet(),
        phantomWallet({
          recommended: true,
        }),
      ]}

    >
      <ToastContainer />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
