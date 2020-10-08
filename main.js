import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/build/OrbitControls.js'
import { Delaunator } from '/build/delaunator.js';
import { BufferGeometryUtils } from '/build/BufferGeometryUtils.js';
var controls, camera, scene, renderer;
var container;
var points = []

var timer = 0;
var delay = 250;
var prevent = false;

var canvasWidth = window.innerWidth
var canvasHeight = window.innerHeight
var mouse = new THREE.Vector2();
var addedObject = []
var p1, p2;

var geometrySphere = new THREE.SphereGeometry(.5, 32, 32);
var materialSphere = new THREE.MeshBasicMaterial({ color: 0xffff00 });

var pointData, colorData;

var urlToFloatFile = './assests/data.dat';
var request = new XMLHttpRequest();
request.open('GET', urlToFloatFile, true);

//specify the response type as arraybuffer
request.responseType = 'arraybuffer';


request.onload = function (msg) {
    pointData = new Float32Array(this.response)

    var urlToUintFile = './assests/datacolor.dat';
    var requestColor = new XMLHttpRequest();
    requestColor.open('GET', urlToUintFile, true);

    //specify the response type as arraybuffer
    requestColor.responseType = 'arraybuffer';

    requestColor.onload = function (msg) {
        colorData = new Uint8Array(this.response);

        pointCloudfromBuffer(pointData, colorData)
    };
    requestColor.send();
};


request.send();


init();
animate();

async function init() {
    console.log();

    container = document.getElementById('container');
    scene = new THREE.Scene();
    // scene.background = new THREE.Color("rgb(228, 233, 239)");
    scene.background = new THREE.Color("rgb(0, 0, 0)");
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, .1, 100000000);
    camera.position.z = 200;
    // camera.position.z = 10000;
    scene.add(camera)

    var light = new THREE.PointLight(0xFFFFFF, .7);
    // light.castShadow = true;
    light.position.set(0, 0, 0);
    // camera.add(light);

    var light2 = new THREE.PointLight(0xFFFFFF, .7);
    // light2.castShadow = true;
    light2.position.set(500, 500, -1000);
    // scene.add(light2);


    var lightA = new THREE.AmbientLight(0xFFFFFF, .5); // soft white light
    // scene.add(lightA);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    // renderer.shadowMap.enabled = true

    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);

    // axes helper
    var axesHelper = new THREE.AxesHelper(50);
    // scene.add(axesHelper);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => {
        clearTimeout(timer);
        prevent = true;
    });

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('click', onclick);

}
function onclick(event) {
    timer = setTimeout(function () {
        if (!prevent) {
            mouse.x = (event.clientX / canvasWidth) * 2 - 1;
            mouse.y = - (event.clientY / canvasHeight) * 2 + 1;
            checkIntersectionclick();
        }
        prevent = false;
    }, delay);
}

var linematerial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
function checkIntersectionclick() {
    console.log("clicked")
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    var intersectionclick = raycaster.intersectObjects(addedObject, true);
    if (intersectionclick.length > 0) {
        var sphere = new THREE.Mesh(geometrySphere, materialSphere);
        sphere.name = "point"
        if (!p1 && !p2) {
            p1 = intersectionclick[0].point
        } else if (p1 && !p2) {
            p2 = intersectionclick[0].point

            var path = new THREE.LineCurve3(p1, p2);
            var Tubegeometry = new THREE.TubeGeometry(path, 20, .5, 8, false);
            var line = new THREE.Mesh(Tubegeometry, linematerial);
            line.name = "dimensionLine"
            line.renderOrder = 1
            scene.add(line)

            p1 = p2
            p2 = null
        }
        addedObject.push(sphere)
        sphere.position.copy(intersectionclick[0].point)
        scene.add(sphere)
    }
}
function pointCloudfromBuffer(point, colors) {

    var geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(point, 3));
    colors.forEach((e,i,arr)=>{
        arr[i] = 255 - e
    })

    // var col = []
    // for (var i = 0; i < colors.length; i++) {

    //         if(i%4 == 3){
    //             continue;
    //         }
    //         col.push(1-(colors[i]/255))
    //     }
    // geom.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));

    geom.setAttribute('color', new THREE.BufferAttribute(colors, 4, true));
    // geom.setAttribute('color', new THREE.Uint8BufferAttribute(col, 3));
    // geom.setAttribute( 'color', new THREE.BufferAttribute( colors, 4 ) );
    geom.computeBoundingBox()

    var geoboundingBox = geom.boundingBox
    var centerP = new THREE.Vector3()
    centerP.addVectors(geoboundingBox.max, geoboundingBox.min)
    centerP.divideScalar(2)

    var cloud = new THREE.Points(geom, new THREE.PointsMaterial({ size: 1, vertexColors: true }));

    // get poind cloud to origin
    cloud.position.set(cloud.position.x - centerP.x, cloud.position.y - centerP.y, cloud.position.z - centerP.z)
    console.log(cloud);
    addedObject.push(cloud)
    cloud.renderOrder = 0
    scene.add(cloud);
}

function onWindowResize() {
    canvasWidth = window.innerWidth
    canvasHeight = window.innerHeight
    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasWidth, canvasHeight);
}

function animate() {
    requestAnimationFrame(animate);
    render()
}
function render() {
    renderer.render(scene, camera);
}

