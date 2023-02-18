import "assets/styles/styles.scss";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ConfigProvider } from "antd";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ConfigProvider>
        <Head>
          <title>FPVHub</title>
          <meta name="description" content="FPVHub" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ConfigProvider>
    </UserProvider>
  );
}
