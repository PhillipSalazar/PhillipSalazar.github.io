
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
var canvas = document.getElementById("can");
renderer = new THREE.WebGLRenderer({ canvas: canvas });
//var renderer = new THREE.WebGLRenderer();
//renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setSize(window.innerWidth,window.innerHeight);
//renderer.domElement.id = "can";
//renderer.domElement.id = 'can';
//document.body.appendChild(renderer.domElement);

var gemotry = new THREE.CubeGeometry( 1.5, 1.5, 1.5);
var geo = new THREE.SphereGeometry(1);
var geo1 = new THREE.ConeGeometry(1,2,10);
var geo2 = new THREE.CylinderGeometry(1,1,2);
var material =  new THREE.MeshBasicMaterial({color: '#DC143C'});

var mat = new THREE.MeshBasicMaterial({
  color: '#F0FFFF',
  wireframe: true
});
var sphere = new THREE.Mesh(geo, mat);
var cube = new THREE.Mesh(gemotry, mat);
var cone = new THREE.Mesh(geo1, mat);
var cylinder = new THREE.Mesh(geo2, mat);
/*var loader = new THREE.ObjectLoader();
loader.load("last-nano.json",function ( obj ) {
  obj.position.z = 3;
  obj.position.x = -2;

scene.add(obj);

});
*/
cone.position.x = -8;
cone.position.y = -3;
// sphere position
sphere.position.x = 7;
sphere.position.y = -3;
// cube position
cube.position.x = 7.5;
cube.position.y = 3.5;
// cylinder position
cylinder.position.x = -8
cylinder.position.y = 3;
scene.add( cube );
scene.add( sphere );
scene.add( cone );
scene.add( cylinder );

scene.background = new THREE.Color( '#222' );
camera.position.z = 7;

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  sphere.rotation.x += 0.005;
  sphere.rotation.y += 0.005;
  cone.rotation.x += 0.005;
  cone.rotation.y += 0.005;
  cylinder.rotation.x += 0.005;
  cylinder.rotation.y += 0.005;
}
render();
