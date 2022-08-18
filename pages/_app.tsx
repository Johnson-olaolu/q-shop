import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import store from "../store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/lib/persistStore";
import Layout from "../components/layout.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
