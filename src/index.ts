import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87CEEB);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(0, 5, 10);
directionalLight.castShadow = true;
scene.add(directionalLight);

const planeGeometry = new THREE.PlaneGeometry(5, 8);
const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.z = -2
plane.receiveShadow = true;
scene.add(plane);

const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32);
const cylinderMaterial = new THREE.MeshLambertMaterial({ color: 0xf0f0f0 });

const cylinder1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder1.position.set(1, 1, 0);
cylinder1.castShadow = true;
scene.add(cylinder1);

const cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder2.position.set(-1, 1, 0);
cylinder2.castShadow = true;
scene.add(cylinder2);

import('three/examples/jsm/controls/OrbitControls').then(({ OrbitControls }) => {
  const controls = new OrbitControls(camera, renderer.domElement);
});

camera.position.set(0, 3, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
