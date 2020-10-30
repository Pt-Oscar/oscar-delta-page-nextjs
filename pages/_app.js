import '../styles/styles.scss'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import App from 'next/app'

const myApp = ({Component, pageProps}) => {
console.log(pageProps, 'asdasd')
    return (
    <div>
    <NavBar/>
    <div id="page-container">
    <div id="content-wrap">
    <Component {...pageProps} />
   </div>
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