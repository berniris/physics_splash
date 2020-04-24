import '../sass/styles.scss'
import Stage from './Stage'
import Layout from './Layout'

const APP = window.APP || {}

console.log(APP)

/*-----------------------------------------------------------------------------------*/
/*  01. INIT
/*-----------------------------------------------------------------------------------*/

const initApp = () => {
    window.APP = APP

    APP.Layout = new Layout()
    APP.Stage = new Stage()
    console.log(APP)
}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    initApp()
} else {
    document.addEventListener('DOMContentLoaded', initApp)
}
