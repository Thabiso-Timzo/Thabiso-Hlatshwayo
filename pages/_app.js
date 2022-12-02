import {Provider} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

import '../styles/globals.css'
import store from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}

export default MyApp
