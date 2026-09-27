import * as THREE from "three";
import {
  generateSphere,
  generateWireframeCube,
  generateCapsuleDevice,
  generateNeuralTorus,
  generateApertureLens,
  generateMatrixGrid,
  generateDispersedCloud,
  generateKdEnergyCore,
} from "../math/shapes";
import { ShapeType, SectionType } from "@/context/AnimationContext";

// Exact electric blue theme colors
const COLOR_INNER = new THREE.Color("#003FC5");   // Primary Inner
const COLOR_RADIANT = new THREE.Color("#006EF5"); // Radiant Edge
const COLOR_SPARKLE = new THREE.Color("#2C81FA"); // Sparkle Highlight
const COLOR_CORE = new THREE.Color("#001C5B");    // Base Core Dark

/**
 * Generate soft circular radial particle glow sprite with hot star core
 */
function createParticleTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    // Hot white center star core, radiant electric cyan & blue halo
    gradient.addColorStop(0.0, "rgba(255, 255, 255, 1.0)");
    gradient.addColorStop(0.20, "rgba(215, 238, 255, 0.98)");
    gradient.addColorStop(0.45, "rgba(44, 129, 250, 0.92)");
    gradient.addColorStop(0.70, "rgba(0, 110, 245, 0.65)");
    gradient.addColorStop(0.90, "rgba(0, 63, 197, 0.25)");
    gradient.addColorStop(1.0, "rgba(0, 28, 91, 0.0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

export class ParticleController {
  public group: THREE.Group;
  private count: number;
  private isMobile: boolean;
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private points: THREE.Points;

  // Shapes registry
  private shapes: Record<ShapeType, Float32Array>;

  // Position buffers
  private currentPositions: Float32Array;
  private sourcePositions: Float32Array;
  private targetPositions: Float32Array;

  // Morph state
  private morphProgress = 1;
  private morphDuration = 0.85; // seconds
  private currentShape: ShapeType = "preloader";

  // Section position targets
  private targetGroupPos = new THREE.Vector3(0, 0, 0);

  // Mouse interaction state
  private mouseTarget = new THREE.Vector2(0, 0);
  private mouseCurrent = new THREE.Vector2(0, 0);
  private mouseActive = false;

  constructor(count: number, isMobile = false, initialShape: ShapeType = "preloader") {
    this.count = count;
    this.isMobile = isMobile;
    this.currentShape = initialShape;
    this.group = new THREE.Group();

    // 1. Generate all shapes with exact count * 3 coordinates
    this.shapes = {
      sphere: generateSphere(count, isMobile ? 1.5 : 2.2),
      cube: generateWireframeCube(count, isMobile ? 1.9 : 2.6),
      device: generateCapsuleDevice(count),
      torus: generateNeuralTorus(count),
      aperture: generateApertureLens(count),
      matrix: generateMatrixGrid(count),
      preloader: generateKdEnergyCore(count),
    };

    // 2. Setup initial positions
    const initialCoords =
      initialShape === "preloader"
        ? generateDispersedCloud(count, 14.0)
        : this.shapes[initialShape];

    this.currentPositions = new Float32Array(initialCoords);
    this.sourcePositions = new Float32Array(initialCoords);
    this.targetPositions = new Float32Array(this.shapes[initialShape]);

    // 3. Setup vertex colors (Electric blue theme)
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const p = Math.random();
      let color: THREE.Color;

      if (p < 0.20) {
        color = COLOR_CORE;
      } else if (p < 0.55) {
        color = COLOR_INNER;
      } else if (p < 0.82) {
        color = COLOR_RADIANT;
      } else {
        color = COLOR_SPARKLE;
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    // 4. Build BufferGeometry
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.currentPositions, 3)
    );
    this.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // 5. PointsMaterial with NormalBlending for high-contrast crisp visibility on silver/light page
    this.material = new THREE.PointsMaterial({
      size: isMobile ? 2.2 : 3.4, // Crisp, vibrant glowing points
      sizeAttenuation: false,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.group.add(this.points);

    // Initial group positioning
    this.updateSectionLayout("hero");
  }

  public setShape(shape: ShapeType, immediate = false, duration = 0.85) {
    if (shape === this.currentShape && !immediate) return;

    this.currentShape = shape;
    this.morphDuration = duration;
    const nextTarget = this.shapes[shape] || this.shapes.sphere;

    if (immediate) {
      for (let i = 0; i < this.count * 3; i++) {
        this.currentPositions[i] = nextTarget[i];
        this.sourcePositions[i] = nextTarget[i];
        this.targetPositions[i] = nextTarget[i];
      }
      this.morphProgress = 1;
    } else {
      for (let i = 0; i < this.count * 3; i++) {
        this.sourcePositions[i] = this.currentPositions[i];
        this.targetPositions[i] = nextTarget[i];
      }
      this.morphProgress = 0;
    }
  }

  public updateSectionLayout(section: SectionType) {
    if (this.isMobile) {
      if (section === "hero") {
        this.targetGroupPos.set(0, 0.5, 0);
      } else {
        this.targetGroupPos.set(0, 1.2, 0);
      }
    } else {
      if (section === "hero") {
        // Offset right to center perfectly inside the hero right showcase visual area
        this.targetGroupPos.set(1.65, 0, 0);
      } else {
        // Offset to sticky left column in services
        this.targetGroupPos.set(-2.0, 0, 0);
      }
    }
  }

  public updateMouse(x: number, y: number, active: boolean) {
    this.mouseTarget.set(x, y);
    this.mouseActive = active;
  }

  public update(delta: number, elapsedTime: number) {
    // 1. Mouse coordinates linear interpolation
    this.mouseCurrent.lerp(this.mouseTarget, 0.08);

    // 2. Group position interpolation based on section
    this.group.position.lerp(this.targetGroupPos, 0.05);

    // 3. Morph progression (Cubic ease in-out)
    if (this.morphProgress < 1) {
      this.morphProgress += delta / this.morphDuration;
      if (this.morphProgress > 1) this.morphProgress = 1;
    }

    const t = this.easeInOutCubic(this.morphProgress);

    // 4. Update particle coordinates
    const pos = this.currentPositions;
    const src = this.sourcePositions;
    const tgt = this.targetPositions;

    // Mouse coordinates in 3D world space relative to group position
    const mx = this.mouseCurrent.x * 4.0 - this.group.position.x;
    const my = this.mouseCurrent.y * 2.8 - this.group.position.y;
    const repelRadiusSq = 1.8 * 1.8;

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;

      // Base target position through morph
      let bx = src[i3] + (tgt[i3] - src[i3]) * t;
      let by = src[i3 + 1] + (tgt[i3 + 1] - src[i3 + 1]) * t;
      let bz = src[i3 + 2] + (tgt[i3 + 2] - src[i3 + 2]) * t;

      // Gentle organic turbulence
      const wave =
        Math.sin(elapsedTime * 1.5 + bx * 0.7) *
        Math.cos(elapsedTime * 1.1 + by * 0.7) *
        0.025;
      bx += wave;
      by += wave * 0.5;

      // Magnetic mouse scatter & dispersion
      if (this.mouseActive) {
        const dx = bx - mx;
        const dy = by - my;
        const distSq = dx * dx + dy * dy;

        if (distSq < repelRadiusSq && distSq > 0.001) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / 1.8) * 0.75;
          bx += (dx / dist) * force;
          by += (dy / dist) * force;
          bz += (Math.random() - 0.5) * force * 0.4;
        }
      }

      // Smooth spring follow
      pos[i3] += (bx - pos[i3]) * 0.16;
      pos[i3 + 1] += (by - pos[i3 + 1]) * 0.16;
      pos[i3 + 2] += (bz - pos[i3 + 2]) * 0.16;
    }

    this.geometry.attributes.position.needsUpdate = true;

    // 5. Idle group rotation
    this.group.rotation.y = elapsedTime * 0.09 + this.mouseCurrent.x * 0.25;
    this.group.rotation.x =
      Math.sin(elapsedTime * 0.06) * 0.08 - this.mouseCurrent.y * 0.2;
  }

  private easeInOutCubic(x: number): number {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  public setOpacity(op: number) {
    this.material.opacity = Math.max(0, Math.min(1, op));
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
