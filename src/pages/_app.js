import store from "@/redux/store";
import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.pageProps}>
      {getLayout(
        <StyleProvider hashPriority="high">
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </StyleProvider>
      )}
    </SessionProvider>
  );
}
