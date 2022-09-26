
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x022B62)
scene.fog = new THREE.fog(0xffffff, 2, 10);
var loader = new THREE.TextureLoader();
loader.load("../img/agua.jpg", function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 30;
camera.position.x = 5;
camera.position.y = 0;
//animacion

function animate(){
    requestAnimationFrame(animate);
    cone.rotation.y += 0.01;
	cone.rotation.x += 0.01;
    renderer.render( scene, camera );
}
animate();