<template>
  <div ref="playground" class="lg:w-full">
  </div>
</template>

<script lang="ts">
import * as THREE from "three";

export default {

  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 80, this.$refs.playground.clientWidth/this.$refs.playground.clientHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( this.$refs.playground.clientWidth,this.$refs.playground.clientHeight );
    renderer.setClearColor(0x000000,0)
    this.$refs.playground.appendChild( renderer.domElement );

    const darkPurple = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
    const lightPurple = getComputedStyle(document.documentElement).getPropertyValue('--color-third');
    const secondary = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary');

    const sphereGeometry = new THREE.SphereGeometry( 50,32,16);
    const sphereMaterial = new THREE.MeshBasicMaterial( { color: darkPurple, wireframe: true } );
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    scene.add( sphere );

    const sphereGeometry2 = new THREE.SphereGeometry( 55,16,8);
    const sphereMaterial2 = new THREE.MeshBasicMaterial( { color: secondary, wireframe: true } );
    const sphere2 = new THREE.Mesh( sphereGeometry2, sphereMaterial2 );
    scene.add( sphere2 );

    const torusKnotGeom = new THREE.TorusKnotGeometry(28,8,50,8);
    const torusKnotMaterial = new THREE.MeshBasicMaterial( { color: lightPurple, wireframe: true } );
    const torusKnot = new THREE.Mesh( torusKnotGeom, torusKnotMaterial );
    scene.add(torusKnot);


    camera.position.z = 50;
    let mvmtAcceleration = 0.05;
    const updateCameraPos = () => {
      if(camera.position.z < 25 || camera.position.z > 100) mvmtAcceleration *=-1;
      camera.position.z += mvmtAcceleration;
    }

    const resizeRender = () => {
      const canvas = renderer.domElement;
      const playground = this.$refs.playground;
      const needAdaptation = canvas.width !== playground.clientWidth || canvas.height !== playground.clientHeight;
      if(needAdaptation) {
        renderer.setSize(playground.clientWidth, playground.clientHeight);
        camera.aspect = playground.clientWidth/playground.clientHeight;
        camera.updateProjectionMatrix();
      }
    }

    function animate() {
      requestAnimationFrame( animate );
      resizeRender();
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
      sphere2.rotation.x += 0.001;
      sphere2.rotation.y += 0.001;

      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.005;
      torusKnot.rotation.z += 0.01;
      updateCameraPos();
      renderer.render( scene, camera );
    };

    animate();
  }
}


</script>

<style scoped>
</style>
