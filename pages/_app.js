import '../styles/styles.scss'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import App from 'next/app'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Whatsapp from '../components/Whatsapp';

const myApp = ({Component, pageProps}) => {
console.log(pageProps, 'asdasd')
    return (
    <div>
    <NavBar/>
    <div id="page-container">
    <div id="content-wrap">
    <Component {...pageProps} />
   </div>
   <Whatsapp />
   <Footer id="footer"/>
 </div>
        </div>
    )
}

// myApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default myApp;