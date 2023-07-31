import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps.pageProps}>
      <StyleProvider hashPriority="high">
        <Component {...pageProps} />
      </StyleProvider>
    </SessionProvider>
  );
}
