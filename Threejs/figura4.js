const scene = new THREE.Scene();
scene.background = new THREE.Color(0x022B62)
scene.fog = new THREE.Fog(0xffffff, 2, 8);
var loader = new THREE.TextureLoader();
loader.load("../img/cafe.jpg", function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.SphereGeometry( 10, 25, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0x8018D1 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 30;
camera.position.x = 5;
camera.position.y = 0;
//animacion

function animate(){
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
	sphere.rotation.x += 0.01;
    renderer.render( scene, camera );
}
animate();