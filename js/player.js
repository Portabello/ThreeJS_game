class Player {
  constructor(x,y,camera, renderer, scene) {
    this.x = x;
    this.y = y;
    this.camera = camera;
    this.renderer = renderer;
    this.scene = scene;
  }
  draw() {
    var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(this.x, this.y, 1 );
    this.scene.add(sphere);
  }

}
