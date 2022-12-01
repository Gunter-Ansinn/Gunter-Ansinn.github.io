const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.SphereGeometry( 1, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const black_hole = new THREE.Mesh( geometry, material );

const black_hole_material = new THREE.ShaderMaterial({
    uniforms : {
        time: { value: 1.0},
        resolution: { value: new THREE.Vector2() }
    },

    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent
})

scene.add( black_hole );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    black_hole.rotation.x += 0.01;

	renderer.render( scene, camera );
}

animate();