import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "../useHooks/useAuth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* HIGHER ORDER COMPONENT */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}
