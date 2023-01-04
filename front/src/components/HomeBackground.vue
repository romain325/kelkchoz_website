<template>
  <div ref="playground" class="lg:w-full">
  </div>
</template>

<script lang="ts">
import * as THREE from "three"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";

export default {
  data() {
    return {
      renderer: new THREE.WebGLRenderer({alpha: true})
    }
  },
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 80, this.$refs.playground.clientWidth/this.$refs.playground.clientHeight, 0.1, 1000 );

    this.renderer.setSize( this.$refs.playground.clientWidth,this.$refs.playground.clientHeight );
    this.renderer.setClearColor(0x000000,0)
    this.$refs.playground.appendChild( this.renderer.domElement );

    const darkPurple = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--color-primary').replace("#","0x"),16);
    const lightPurple = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--color-third').replace("#","0x"),16);
    const secondary = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').replace("#","0x"),16);


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
      const canvas = this.renderer.domElement;
      const playground = this.$refs.playground;
      const needAdaptation = canvas.width !== playground.clientWidth || canvas.height !== playground.clientHeight;
      if(needAdaptation) {
        this.renderer.setSize(playground.clientWidth, playground.clientHeight);
        camera.aspect = playground.clientWidth/playground.clientHeight;
        camera.updateProjectionMatrix();
      }
    }

    const animate = () => {
      resizeRender();
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
      sphere2.rotation.x += 0.001;
      sphere2.rotation.y += 0.001;

      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.005;
      torusKnot.rotation.z += 0.01;
      updateCameraPos();
      this.renderer.render( scene, camera );
    };

    this.renderer.setAnimationLoop(animate);
  },
  unmounted() {
    this.renderer.setAnimationLoop(null);
  }
}


</script>

<style scoped>
</style>
