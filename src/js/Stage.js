// import SceneDrop from './SceneDrop'
import SceneSticky from './SceneSticky'
import Backdrop from './Backdrop'
// import SceneHinge from './SceneHinge'

export default class Stage {

    constructor() {
        this.setup()

        this.onResize()

        this.bindEvents()
    }

    bindEvents() {
        window.addEventListener('resize', () => { this.onResize() })
    }

    setup() {
        if (document.body.classList.contains('demo-2')) {
            this.mainScene = new SceneSticky()
            // this.backgroundScene = new Backdrop()
        }
    }


    /* Handlers
    --------------------------------------------------------- */

    onResize() {
        const scl = APP.Layout.isMobile ? 0.7 : 1
        this.mainScene.scene.scale.set(scl, scl, scl)
    }


    /* Actions
    --------------------------------------------------------- */



    /* Values
    --------------------------------------------------------- */


}
