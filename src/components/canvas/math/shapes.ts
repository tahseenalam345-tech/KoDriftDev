/**
 * Solid Parametric 3D Particle Shape Generators
 * Every generator returns an exact Float32Array of length count * 3.
 * No broken, half-formed, or missing vertices.
 */

export const DESKTOP_PARTICLE_COUNT = 5000;
export const MOBILE_PARTICLE_COUNT = 2800;

/**
 * 1. FIBONACCI SPHERE (Hero Default)
 * Perfectly uniform golden-ratio spherical distribution with an inner concentric core.
 */
export function generateSphere(count: number, radius = 2.2): Float32Array {
  const positions = new Float32Array(count * 3);
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  const goldenAngle = 2 * Math.PI * (1 - 1 / goldenRatio); // ~2.39996 rad

  const innerCount = Math.floor(count * 0.25);
  const outerCount = count - innerCount;

  // Outer shell (75% of particles)
  for (let i = 0; i < outerCount; i++) {
    const y = 1 - (i / (outerCount - 1)) * 2; // From 1 to -1
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;

    positions[i * 3] = Math.cos(theta) * radiusAtY * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * radiusAtY * radius;
  }

  // Inner layered core (25% of particles at radius 1.2 on desktop)
  const innerRadius = radius * (1.2 / 2.2);
  for (let i = 0; i < innerCount; i++) {
    const idx = outerCount + i;
    const y = 1 - (i / (innerCount - 1)) * 2;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;

    positions[idx * 3] = Math.cos(theta) * radiusAtY * innerRadius;
    positions[idx * 3 + 1] = y * innerRadius;
    positions[idx * 3 + 2] = Math.sin(theta) * radiusAtY * innerRadius;
  }

  return positions;
}

/**
 * 2. WIREFRAME CUBE / ARCHITECTURAL BOX (Web Development)
 * Strict 12 outer edges, 6 diagonal face braces, and inner 3D lattice planes.
 */
export function generateWireframeCube(count: number, size = 2.6): Float32Array {
  const positions = new Float32Array(count * 3);
  const h = size / 2;

  // 12 cube edges
  const edges: [number, number, number, number, number, number][] = [
    // Bottom square
    [-h, -h, -h, h, -h, -h],
    [h, -h, -h, h, -h, h],
    [h, -h, h, -h, -h, h],
    [-h, -h, h, -h, -h, -h],
    // Top square
    [-h, h, -h, h, h, -h],
    [h, h, -h, h, h, h],
    [h, h, h, -h, h, h],
    [-h, h, h, -h, h, -h],
    // 4 vertical pillars
    [-h, -h, -h, -h, h, -h],
    [h, -h, -h, h, h, -h],
    [h, -h, h, h, h, h],
    [-h, -h, h, -h, h, h],
    // Face cross braces (architectural blueprint struts)
    [-h, -h, -h, h, h, -h], // Front diag 1
    [-h, h, -h, h, -h, -h], // Front diag 2
    [-h, -h, h, h, h, h],   // Back diag 1
    [-h, h, h, h, -h, h],   // Back diag 2
    [-h, -h, -h, -h, h, h], // Left diag
    [h, -h, -h, h, h, h],   // Right diag
  ];

  // Allocate 70% of points to outer edges and cross braces
  const linePointCount = Math.floor(count * 0.75);
  const ptsPerLine = Math.floor(linePointCount / edges.length);

  let idx = 0;
  for (let e = 0; e < edges.length; e++) {
    const [x1, y1, z1, x2, y2, z2] = edges[e];
    for (let p = 0; p < ptsPerLine; p++) {
      const t = p / (ptsPerLine - 1);
      positions[idx * 3] = x1 + (x2 - x1) * t;
      positions[idx * 3 + 1] = y1 + (y2 - y1) * t;
      positions[idx * 3 + 2] = z1 + (z2 - z1) * t;
      idx++;
    }
  }

  // Remaining 25% points form internal grid planes
  const internalLines = [
    // Center horizontal cross
    [-h, 0, 0, h, 0, 0],
    [0, -h, 0, 0, h, 0],
    [0, 0, -h, 0, 0, h],
    // Mid frame
    [-h, 0, -h, h, 0, -h],
    [h, 0, -h, h, 0, h],
    [h, 0, h, -h, 0, h],
    [-h, 0, h, -h, 0, -h],
  ];

  const remaining = count - idx;
  const ptsPerInternal = Math.floor(remaining / internalLines.length);

  for (let e = 0; e < internalLines.length; e++) {
    const [x1, y1, z1, x2, y2, z2] = internalLines[e];
    const take = e === internalLines.length - 1 ? count - idx : ptsPerInternal;
    for (let p = 0; p < take; p++) {
      const t = take > 1 ? p / (take - 1) : 0.5;
      positions[idx * 3] = x1 + (x2 - x1) * t;
      positions[idx * 3 + 1] = y1 + (y2 - y1) * t;
      positions[idx * 3 + 2] = z1 + (z2 - z1) * t;
      idx++;
    }
  }

  return positions;
}

/**
 * 3. SMARTPHONE DEVICE OUTLINE (App Development)
 * Exact 9:18 aspect ratio (width 1.6, height 3.2), rounded corners, top camera notch, home bar.
 */
export function generateCapsuleDevice(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const w = 1.6;
  const h = 3.2;
  const r = 0.35;
  const d = 0.18; // 3D depth between front and back bezels

  // Helper function to sample perimeter of rounded rectangle
  function sampleRoundedRect(t: number, width: number, height: number, radius: number) {
    const straightW = width - 2 * radius;
    const straightH = height - 2 * radius;
    const cornerArc = (Math.PI / 2) * radius;
    const perimeter = 2 * straightW + 2 * straightH + 4 * cornerArc;
    let dist = t * perimeter;

    // Top straight
    if (dist <= straightW) {
      return { x: -straightW / 2 + dist, y: height / 2 };
    }
    dist -= straightW;

    // Top-right corner arc
    if (dist <= cornerArc) {
      const angle = (dist / cornerArc) * (Math.PI / 2);
      return {
        x: straightW / 2 + Math.sin(angle) * radius,
        y: straightH / 2 + Math.cos(angle) * radius,
      };
    }
    dist -= cornerArc;

    // Right straight
    if (dist <= straightH) {
      return { x: width / 2, y: straightH / 2 - dist };
    }
    dist -= straightH;

    // Bottom-right corner arc
    if (dist <= cornerArc) {
      const angle = (dist / cornerArc) * (Math.PI / 2);
      return {
        x: straightW / 2 + Math.cos(angle) * radius,
        y: -straightH / 2 - Math.sin(angle) * radius,
      };
    }
    dist -= cornerArc;

    // Bottom straight
    if (dist <= straightW) {
      return { x: straightW / 2 - dist, y: -height / 2 };
    }
    dist -= straightW;

    // Bottom-left corner arc
    if (dist <= cornerArc) {
      const angle = (dist / cornerArc) * (Math.PI / 2);
      return {
        x: -straightW / 2 - Math.sin(angle) * radius,
        y: -straightH / 2 - Math.cos(angle) * radius,
      };
    }
    dist -= cornerArc;

    // Left straight
    if (dist <= straightH) {
      return { x: -width / 2, y: -straightH / 2 + dist };
    }
    dist -= straightH;

    // Top-left corner arc
    const angle = (dist / cornerArc) * (Math.PI / 2);
    return {
      x: -straightW / 2 - Math.cos(angle) * radius,
      y: straightH / 2 + Math.sin(angle) * radius,
    };
  }

  let idx = 0;

  // 1. Outer Frame (Front & Back layers) -> 45% of particles
  const outerBezelCount = Math.floor(count * 0.45);
  for (let i = 0; i < outerBezelCount; i++) {
    const t = i / outerBezelCount;
    const pt = sampleRoundedRect(t, w, h, r);
    const z = i % 2 === 0 ? d / 2 : -d / 2;

    positions[idx * 3] = pt.x;
    positions[idx * 3 + 1] = pt.y;
    positions[idx * 3 + 2] = z;
    idx++;
  }

  // 2. Inner Screen Bezel (Inset by 0.12) -> 30% of particles
  const innerBezelCount = Math.floor(count * 0.30);
  const iw = w - 0.24;
  const ih = h - 0.24;
  const ir = Math.max(0.1, r - 0.12);
  for (let i = 0; i < innerBezelCount; i++) {
    const t = i / innerBezelCount;
    const pt = sampleRoundedRect(t, iw, ih, ir);

    positions[idx * 3] = pt.x;
    positions[idx * 3 + 1] = pt.y;
    positions[idx * 3 + 2] = d / 2;
    idx++;
  }

  // 3. Top Dynamic Island / Camera Notch (rounded pill) -> 12% of particles
  const notchCount = Math.floor(count * 0.12);
  const notchW = 0.55;
  const notchH = 0.14;
  const notchY = h / 2 - 0.32;
  for (let i = 0; i < notchCount; i++) {
    const t = i / notchCount;
    const pt = sampleRoundedRect(t, notchW, notchH, notchH / 2);

    positions[idx * 3] = pt.x;
    positions[idx * 3 + 1] = notchY + pt.y;
    positions[idx * 3 + 2] = d / 2 + 0.02;
    idx++;
  }

  // 4. Bottom Home Indicator Bar (horizontal sleek line) -> 8% of particles
  const barCount = Math.floor(count * 0.08);
  const barW = 0.65;
  const barY = -h / 2 + 0.25;
  for (let i = 0; i < barCount; i++) {
    const t = i / (barCount - 1);
    positions[idx * 3] = -barW / 2 + t * barW;
    positions[idx * 3 + 1] = barY;
    positions[idx * 3 + 2] = d / 2 + 0.02;
    idx++;
  }

  // 5. Fill remaining points into subtle screen grid
  while (idx < count) {
    const u = (Math.random() - 0.5) * (iw - 0.2);
    const v = (Math.random() - 0.5) * (ih - 0.6);
    positions[idx * 3] = u;
    positions[idx * 3 + 1] = v;
    positions[idx * 3 + 2] = (Math.random() - 0.5) * 0.04;
    idx++;
  }

  return positions;
}

/**
 * 4. NEURAL TORUS RING (AI Automation)
 * Dense revolving parametric Torus (R = 1.8, r = 0.6) with helical vortex tracks.
 */
export function generateNeuralTorus(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const R = 1.8; // Major radius
  const r = 0.6; // Minor tube radius
  const tracks = 8; // Multi-helical spiral strands

  for (let i = 0; i < count; i++) {
    // Distribute along helical angle u and polar angle v
    const u = (i / count) * Math.PI * 2 * tracks;
    const v = (i / count) * Math.PI * 2;

    const x = (R + r * Math.cos(u)) * Math.cos(v);
    const y = (R + r * Math.cos(u)) * Math.sin(v);
    const z = r * Math.sin(u);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  return positions;
}

/**
 * 5. APERTURE LENS RING (AI Product Photography)
 * 3 Concentric rings (R=2.2, 1.5, 0.8) intersected by 6 diagonal aperture diaphragm blades.
 */
export function generateApertureLens(count: number): Float32Array {
  const positions = new Float32Array(count * 3);

  // 3 Rings: Outer barrel, Mid ring, Inner diaphragm opening
  const ringRadii = [2.2, 1.5, 0.75];
  const ringDepth = [0.35, 0.12, -0.20]; // 3D depth step
  const ringShare = Math.floor(count * 0.55);
  const ptsPerRing = Math.floor(ringShare / ringRadii.length);

  let idx = 0;
  for (let ring = 0; ring < ringRadii.length; ring++) {
    const radius = ringRadii[ring];
    const z = ringDepth[ring];
    for (let i = 0; i < ptsPerRing; i++) {
      const angle = (i / ptsPerRing) * Math.PI * 2;
      positions[idx * 3] = Math.cos(angle) * radius;
      positions[idx * 3 + 1] = Math.sin(angle) * radius;
      positions[idx * 3 + 2] = z;
      idx++;
    }
  }

  // 6 Aperture blades: Tangent line segments between inner and outer ring
  const numBlades = 6;
  const bladePoints = count - idx;
  const ptsPerBlade = Math.floor(bladePoints / numBlades);

  for (let b = 0; b < numBlades; b++) {
    const baseAngle = (b / numBlades) * Math.PI * 2;
    const endAngle = baseAngle + 1.25; // Curved arc span
    const take = b === numBlades - 1 ? count - idx : ptsPerBlade;

    for (let p = 0; p < take; p++) {
      const t = take > 1 ? p / (take - 1) : 0.5;
      const angle = baseAngle + (endAngle - baseAngle) * t;
      const r = 0.75 + (2.2 - 0.75) * t;
      const z = -0.15 + 0.35 * t;

      positions[idx * 3] = Math.cos(angle) * r;
      positions[idx * 3 + 1] = Math.sin(angle) * r;
      positions[idx * 3 + 2] = z;
      idx++;
    }
  }

  return positions;
}

/**
 * 6. MATRIX DATA GRID (Software Development)
 * 3D multi-layered cyber data cube with planar lattices and vertical bus connections.
 */
export function generateMatrixGrid(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const size = 2.4;
  const layers = 5;
  const h = size / 2;

  // Allocate 80% to grid nodes across 5 stacked planes
  const gridNodeCount = Math.floor(count * 0.8);
  const ptsPerLayer = Math.floor(gridNodeCount / layers);

  let idx = 0;
  for (let l = 0; l < layers; l++) {
    const z = -h + (l / (layers - 1)) * size;
    const gridRes = Math.floor(Math.sqrt(ptsPerLayer));
    const step = size / (gridRes - 1);

    for (let row = 0; row < gridRes; row++) {
      for (let col = 0; col < gridRes; col++) {
        if (idx >= count) break;
        positions[idx * 3] = -h + col * step;
        positions[idx * 3 + 1] = -h + row * step;
        positions[idx * 3 + 2] = z;
        idx++;
      }
    }
  }

  // Remaining points form vertical connection pillars
  while (idx < count) {
    const col = Math.floor(Math.random() * 5);
    const row = Math.floor(Math.random() * 5);
    const x = -h + (col / 4) * size;
    const y = -h + (row / 4) * size;
    const z = (Math.random() * 2 - 1) * h;

    positions[idx * 3] = x;
    positions[idx * 3 + 1] = y;
    positions[idx * 3 + 2] = z;
    idx++;
  }

  return positions;
}

/**
 * 7. PRELOADER DISPERSED (0.0s – 0.6s Initial Cloud)
 * Dispersed into outer space along radial trajectory vectors.
 */
export function generateDispersedCloud(count: number, spread = 12.0): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    // Radial shell distribution between spread * 0.5 and spread
    const r = spread * (0.5 + 0.5 * Math.cbrt(Math.random()));

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

/**
 * 8. PRELOADER TIGHT KD ENERGY CORE (0.6s – 1.4s Converged Orb)
 * Compact spherical core (radius 0.6) with twin orbital halo rings.
 */
export function generateKdEnergyCore(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const coreCount = Math.floor(count * 0.7);
  const haloCount = count - coreCount;

  // Dense pulsating core
  for (let i = 0; i < coreCount; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 0.55 * Math.cbrt(Math.random());

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  // Orbital halo rings
  const halo1Count = Math.floor(haloCount / 2);
  for (let i = 0; i < halo1Count; i++) {
    const idx = coreCount + i;
    const angle = (i / halo1Count) * Math.PI * 2;
    const r = 0.85;

    positions[idx * 3] = Math.cos(angle) * r;
    positions[idx * 3 + 1] = Math.sin(angle) * r * 0.35;
    positions[idx * 3 + 2] = Math.sin(angle) * r;
  }

  for (let i = halo1Count; i < haloCount; i++) {
    const idx = coreCount + i;
    const angle = ((i - halo1Count) / (haloCount - halo1Count)) * Math.PI * 2;
    const r = 1.05;

    positions[idx * 3] = Math.sin(angle) * r * 0.4;
    positions[idx * 3 + 1] = Math.cos(angle) * r;
    positions[idx * 3 + 2] = Math.sin(angle) * r;
  }

  return positions;
}
