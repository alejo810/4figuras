const scene = new THREE.Scene();
scene.background = new THREE.Color(0x022B62)
// scene.fog = new THREE.fog(0xffffff, 2, 10);
var loader = new THREE.TextureLoader();
loader.load("../img/madera.jpg", function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CapsuleGeometry( 5, 8, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0x18D15B} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 30;
camera.position.x = 5;
camera.position.y = 0;
//animacion

function animate(){
    requestAnimationFrame(animate);
    capsule.rotation.y += 0.01;
	capsule.rotation.x += 0.01;
    renderer.render( scene, camera );
}
animate();