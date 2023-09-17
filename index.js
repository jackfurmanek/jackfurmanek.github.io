import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js'
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js"

const scene = new THREE.Scene();

let object;

const loader = new GLTFLoader();

loader.load(
    "models/monkey/monkey.glb",
    function (gltf) {
        object = gltf.scene;
        scene.add(object);
    },
    function (xhr) {
        console.log('loading!');
    },
    function (error) {
        console.error(error);
    }
);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 30;

const geometry = new THREE.BoxGeometry(10, 20, 2);
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const box = new THREE.Mesh(geometry, material);
scene.add(box);
box.position.z = -2;



const pl = new THREE.PointLight(0xFFFFFF);
pl.position.set(5, 5, 5);
scene.add(pl);


const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

animate();
