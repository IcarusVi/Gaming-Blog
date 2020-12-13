import '../styles/globals.scss'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import React from 'react'



  export default function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    React.useEffect(() => {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }, []);

    return (
      <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
      </ApolloProvider>
    );
  }