import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js'
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js"
const PI = 3.1415926535;

const scene = new THREE.Scene();

let boilerexams;
const loader = new GLTFLoader();
loader.load(
    "models/boilerexams/boilerexams.glb",
    function (gltf) {
        boilerexams = gltf.scene;
        scene.add(boilerexams);
        boilerexams.position.x = -60;
        boilerexams.scale.set(8, 8, 8);
    },
    function (xhr) {
        console.log('loading!');
    },
    function (error) {
        console.error(error);
    }
);

let wave;
loader.load(
    "models/wave/wave.glb",
    function (gltf) {
        wave = gltf.scene;
        scene.add(wave);
        wave.scale.set(3, 3, 3);
    },
    function (xhr) {
        console.log('loading!');
    },
    function (error) {
        console.error(error);
    }
);

let codegator1;
loader.load(
    "models/code/codegator.glb",
    function (gltf) {
        codegator1 = gltf.scene;
        scene.add(codegator1);
        codegator1.position.x = -130;
        codegator1.rotation.x = .5 * PI;
        codegator1.scale.set(23, 23, 23);
    },
    function (xhr) {
        console.log('loading!');
    },
    function (error) {
        console.error(error);
    }
);

let codegator2;
loader.load(
    "models/code/codegator.glb",
    function (gltf) {
        codegator2 = gltf.scene;
        scene.add(codegator2);
        codegator2.position.x = -110;
        codegator2.position.y = 1;
        codegator2.rotation.x = .5 * PI;
        codegator2.rotation.y = PI
        codegator2.scale.set(23, 23, 23);
    },
    function (xhr) {
        console.log('loading!');
    },
    function (error) {
        console.error(error);
    }
);


let codeslashscale = 33;

let codeslash;
loader.load(
    "models/code/codeslash.glb",
    function (gltf) {
        codeslash = gltf.scene;
        scene.add(codeslash);
        codeslash.position.x = -120.2;
        codeslash.position.y = 1;
        codeslash.rotation.x = .5 * PI;
        codeslash.scale.set(codeslashscale, codeslashscale, codeslashscale);
    },
    function (xhr) {
        console.log('loading!');
    },
    function (error) {
        console.error(error);
    }
);

let shell1;
loader.load(
    "models/shell/shell1.glb",
    function (gltf) {
        shell1 = gltf.scene;
        scene.add(shell1);
        shell1.position.x = -180;
        shell1.position.y = 5;
        shell1.position.z = -8;
        shell1.scale.set(11, 11, 11);
    },
    function (xhr) {
        console.log('loading!');
    },
    function (error) {
        console.error(error);
    }
);

let shell2;
loader.load(
    "models/shell/shell2.glb",
    function (gltf) {
        shell2 = gltf.scene;
        scene.add(shell2);
        shell2.position.x = -190;
        shell2.position.y = -4;
        shell2.position.z = 8;
        shell2.scale.set(7, 7, 7);
    },
    function (xhr) {
        console.log('loading!');
    },
    function (error) {
        console.error(error);
    }
);

let shell3;
loader.load(
    "models/shell/shell3.glb",
    function (gltf) {
        shell3 = gltf.scene;
        scene.add(shell3);
        shell3.position.x = -170;
        shell3.position.y = -3;
        shell3.position.z = 5;
        shell3.scale.set(4, 4, 4);
    },
    function (xhr) {
        console.log('loading!');
    },
    function (error) {
        console.error(error);
    }
);

let compass;
loader.load(
    "models/compass/compass.glb",
    function (gltf) {
        compass = gltf.scene;
        scene.add(compass);
        compass.position.x = 25;
        compass.position.y = -10;
        compass.position.z = 20;
        compass.rotation.x = -1;
        compass.rotation.y = -1;
        compass.rotation.z = -0.8;
        compass.scale.set(.5, .5, .5);
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


const geometry = new THREE.BoxGeometry( 10, 20, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF5733, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

const geometr = new THREE.BoxGeometry( 20, 10, 2 );
const materia = new THREE.MeshBasicMaterial( { color: 0xFF5733, wireframe: true } );
const cub = new THREE.Mesh( geometr, materia );
//scene.add( cub );
cub.position.x = -60;

const geomet = new THREE.BoxGeometry( 10, 20, 2 );
const materi = new THREE.MeshBasicMaterial( { color: 0xFF5733, wireframe: true } );
const cu = new THREE.Mesh( geomet, materi );
//scene.add( cu );
cu.position.x = -120;

const geome = new THREE.BoxGeometry( 10, 20, 2 );
const mater = new THREE.MeshBasicMaterial( { color: 0xFF5733, wireframe: true } );
const c = new THREE.Mesh( geome, mater );
//scene.add( c );
c.position.x = -180;




const bl = new THREE.PointLight(0xa6b9ff);
bl.position.set(-40, -15, -20);
scene.add(bl);
const blh = new THREE.PointLightHelper(bl);
//scene.add(blh);

const pl = new THREE.PointLight(0xFFF1DE);
pl.position.set(20, 15, 20);
scene.add(pl);
const plh = new THREE.PointLightHelper(pl);
//scene.add(plh);

const al = new THREE.AmbientLight(0xFFFFFF);
al.intensity = .5;
scene.add(al);



camera.position.z = 40;
const cubeInitY = 0;
cube.rotation.y = cubeInitY;

const cameraInitX = 0;
camera.position.x = cameraInitX;



function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    camera.position.x = (t * 0.05) + cameraInitX;

    pl.position.x = (t * 0.05) + 20;
    bl.position.x = (t * 0.05) + -40;

    compass.position.x = (t * 0.05) + 25;
    compass.rotation.z = (t * 0.0012) - 0.8;
}

document.body.onscroll = moveCamera;

const graytex = new THREE.TextureLoader().load('images/back.png');
scene.background = graytex;

var sincount = 0;

function animate() {
    requestAnimationFrame(animate);
    sincount += 0.01;

    wave.rotation.z = 0.2 * Math.sin(sincount * 4);

    boilerexams.position.y = 3 * Math.sin((sincount * 3)+2);
    boilerexams.rotation.x = 0.25 * Math.sin(sincount);
    boilerexams.rotation.y = (0.15 * Math.sin(sincount * 1.25));
    boilerexams.rotation.z = 0.15 * Math.sin(sincount * 1.25);

    codegator1.position.x = 3 * Math.sin(sincount * 2) - 135;
    codegator2.position.x = -3 * Math.sin(sincount * 2) - 105;
    codeslash.scale.set(codeslashscale + Math.sin(sincount * 2) * 5, codeslashscale + Math.sin(sincount * 2) * 5, codeslashscale + Math.sin(sincount * 2) * 5);

    shell1.position.y = 5 * Math.sin((sincount * 3)) + 5;
    shell1.rotation.x = 0.25 * Math.sin(sincount);
    shell1.rotation.y = (0.15 * Math.sin(sincount * 1.25));
    shell1.rotation.z = 0.15 * Math.sin(sincount * 1.25);

    shell2.position.y = 3 * Math.sin((sincount * 3 + 1)) - 4;
    shell2.rotation.x = 0.4 * Math.sin(sincount + 2);
    shell2.rotation.y = (0.15 * Math.sin(sincount * -1.25));
    shell2.rotation.z = 0.15 * Math.sin(sincount * 1.25 + 5);

    shell3.position.y = 3 * Math.sin((sincount * 3 + 2)) - 3;
    shell3.rotation.x = 0.55 * Math.sin(sincount * -1.6);
    shell3.rotation.y = (0.75 * Math.sin(sincount * -1.75));
    shell3.rotation.z = 0.65 * Math.sin(sincount * -2);


    renderer.render(scene, camera);
}

animate();