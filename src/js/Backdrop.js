import * as THREE from 'three'
import C from 'cannon'


const distance = 16

export default class Backdrop {

    constructor(scene, camera) {
        this.scene = scene
        this.camera = camera
        this.setup()
        this.bindEvents()
        console.log(this.scene)
    }


    bindEvents() {
        window.addEventListener('resize', () => { this.onResize() })
    }


    setup() {
        console.log(this.scene)
        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(1, 1, 1).normalize()
        // this.scene.add(light)

        const geometry = new THREE.BoxBufferGeometry(20, 20, 20)

        for (let i = 0; i < 2000; i++) {

            const object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff, transparent: true, opacity: 0.75 }))

            object.position.x = Math.random() * 800 - 400;
            object.position.y = Math.random() * 800 - 400;
            object.position.z = Math.random() * 800 - 400;

            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;

            object.scale.x = Math.random() + 0.5
            object.scale.y = Math.random() + 0.5
            object.scale.z = Math.random() + 0.5

            this.scene.add(object)
        }
    }

    /* Handlers
    --------------------------------------------------------- */


    onResize() {
        const { W, H } = APP.Layout
        this.camera.aspect = W / H
        this.camera.top = distance
        this.camera.right = distance * this.camera.aspect
        this.camera.bottom = -distance
        this.camera.left = -distance * this.camera.aspect

        this.camera.updateProjectionMatrix()
        this.renderer.setSize(W, H)
    }

}

