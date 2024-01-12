import '../styles/globals.css';
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css'
import "../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/solid.css";
// Import other global styles or libraries here

function App({ Component, pageProps }) {
    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )
}

export default App;
