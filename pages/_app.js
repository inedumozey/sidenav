import Layouts from "../layouts/Layouts";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
