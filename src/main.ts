import * as THREE from "three"

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 'green'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)
camera.position.z = 3

const canvas = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({ canvas: canvas! })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

export {}