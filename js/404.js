const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new THREE.TextureLoader();

const renderer = createRenderer();

const geometry = new THREE.SphereGeometry( 1, 32, 16 );
const material = new THREE.MeshBasicMaterial( { map: loader.load('assets/earth.jpg'), } ); //color: 0x00ff00
const earth = new THREE.Mesh( geometry, material );

scene.add( earth );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    earth.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();