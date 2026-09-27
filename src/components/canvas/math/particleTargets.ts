/**
 * Ultra-Accurate Front-Facing 3D Parametric Targets
 * All generators return Float32Array with length count * 3
 */

export const TOTAL_POINTS = 4500;

/**
 * 1. Text Pixel Coordinate Generator
 */
export function sampleTextCoordinates(
  text: string,
  count: number = TOTAL_POINTS,
  scale: number = 0.009
): Float32Array {
  const coords = new Float32Array(count * 3);
  if (typeof window === "undefined") return coords;

  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 450;
  const ctx = canvas.getContext("2d");
  if (!ctx) return coords;

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 50px 'Manrope', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  let lines: string[] = [];
  if (text.includes("\n")) {
    lines = text.split("\n");
  } else if (text === "HI, WELCOME TO KODRIFTDEV") {
    lines = ["HI, WELCOME TO", "KODRIFTDEV"];
  } else if (text.length > 14) {
    const words = text.split(" ");
    if (words.length >= 2) {
      const mid = Math.ceil(words.length / 2);
      lines = [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
    } else {
      lines = [text];
    }
  } else {
    lines = [text];
  }

  const lineHeight = 74;
  const totalH = lines.length * lineHeight;
  const startY = canvas.height / 2 - totalH / 2 + lineHeight / 2;

  lines.forEach((line, i) => {
    ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
  });

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const validPixels: [number, number][] = [];

  const step = 3;
  for (let y = 0; y < canvas.height; y += step) {
    for (let x = 0; x < canvas.width; x += step) {
      const idx = (y * canvas.width + x) * 4;
      if (imgData.data[idx] > 160) {
        validPixels.push([x - canvas.width / 2, -(y - canvas.height / 2)]);
      }
    }
  }

  for (let i = 0; i < count; i++) {
    if (validPixels.length > 0) {
      const p = validPixels[i % validPixels.length];
      coords[i * 3] = p[0] * scale;
      coords[i * 3 + 1] = p[1] * scale;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 0.12;
    } else {
      coords[i * 3] = (Math.random() - 0.5) * 2;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 2;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
  }

  return coords;
}

/**
 * 2. Solid Volumetric Fibonacci 3D Sphere with Inner Core
 */
export function generateVolumetricSphere(count: number = TOTAL_POINTS, radius: number = 2.0): Float32Array {
  const coords = new Float32Array(count * 3);
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  const goldenAngle = 2 * Math.PI * (1 - 1 / goldenRatio);

  const innerCount = Math.floor(count * 0.25);
  const outerCount = count - innerCount;

  // Outer shell (75% of particles)
  for (let i = 0; i < outerCount; i++) {
    const y = 1 - (i / (outerCount - 1)) * 2;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;

    coords[i * 3] = Math.cos(theta) * radiusAtY * radius;
    coords[i * 3 + 1] = y * radius;
    coords[i * 3 + 2] = Math.sin(theta) * radiusAtY * radius;
  }

  // Inner layered core (25% of particles at radius 1.1)
  const innerRadius = radius * 0.55;
  for (let i = 0; i < innerCount; i++) {
    const idx = outerCount + i;
    const y = 1 - (i / (innerCount - 1)) * 2;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;

    coords[idx * 3] = Math.cos(theta) * radiusAtY * innerRadius;
    coords[idx * 3 + 1] = y * innerRadius;
    coords[idx * 3 + 2] = Math.sin(theta) * radiusAtY * innerRadius;
  }

  return coords;
}

/**
 * 3. True 3D Isometric Wireframe Cube with Volumetric Cross-Bracing
 */
export function generateWireframeCube(count: number = TOTAL_POINTS, size: number = 2.4): Float32Array {
  const coords = new Float32Array(count * 3);
  const h = size / 2;

  // 12 outer edges + 6 face cross-braces + 4 internal corner-to-corner diagonal struts
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
    // Face cross-braces (3D architectural blueprint struts)
    [-h, -h, -h, h, h, -h],
    [-h, h, -h, h, -h, -h],
    [-h, -h, h, h, h, h],
    [-h, h, h, h, -h, h],
    // Internal cross diagonals
    [-h, -h, -h, h, h, h],
    [h, -h, -h, -h, h, h],
  ];

  const ptsPerEdge = Math.floor(count / edges.length);
  let idx = 0;

  for (let e = 0; e < edges.length; e++) {
    const [x1, y1, z1, x2, y2, z2] = edges[e];
    const take = e === edges.length - 1 ? count - idx : ptsPerEdge;

    for (let p = 0; p < take; p++) {
      const t = take > 1 ? p / (take - 1) : 0.5;
      coords[idx * 3] = x1 + (x2 - x1) * t;
      coords[idx * 3 + 1] = y1 + (y2 - y1) * t;
      coords[idx * 3 + 2] = z1 + (z2 - z1) * t;
      idx++;
    }
  }

  return coords;
}

/**
 * 4. 3D Rounded Device Chassis with True Depth (Front Bezel, Back Plate, Dynamic Island)
 */
export function generatePhoneFrame(count: number = TOTAL_POINTS, width: number = 1.7, height: number = 3.2): Float32Array {
  const coords = new Float32Array(count * 3);
  const hw = width / 2;
  const hh = height / 2;
  const depth = 0.22; // 3D thickness

  for (let i = 0; i < count; i++) {
    const seg = Math.random();
    const isFront = Math.random() < 0.65;
    const z = isFront ? depth / 2 : -depth / 2;

    if (seg < 0.40) {
      // Left/Right vertical rails
      coords[i * 3] = Math.random() < 0.5 ? -hw : hw;
      coords[i * 3 + 1] = Math.random() * height - hh;
      coords[i * 3 + 2] = z;
    } else if (seg < 0.72) {
      // Top/Bottom horizontal rails
      coords[i * 3] = Math.random() * width - hw;
      coords[i * 3 + 1] = Math.random() < 0.5 ? -hh : hh;
      coords[i * 3 + 2] = z;
    } else if (seg < 0.88) {
      // Dynamic Island Pill on Front
      const pillW = 0.5;
      coords[i * 3] = (Math.random() - 0.5) * pillW;
      coords[i * 3 + 1] = hh - 0.32;
      coords[i * 3 + 2] = depth / 2 + 0.03;
    } else {
      // Corner connection struts between front & back plate
      const cx = Math.random() < 0.5 ? -hw : hw;
      const cy = Math.random() < 0.5 ? -hh : hh;
      coords[i * 3] = cx;
      coords[i * 3 + 1] = cy;
      coords[i * 3 + 2] = (Math.random() - 0.5) * depth;
    }
  }
  return coords;
}

/**
 * 5. Deep Volumetric 3D Revolving Torus Vortex (AI Automation)
 */
export function generateNeuralTorus(count: number = TOTAL_POINTS, R: number = 1.7, r: number = 0.58): Float32Array {
  const coords = new Float32Array(count * 3);
  const tracks = 6;
  for (let i = 0; i < count; i++) {
    const u = (i / count) * Math.PI * 2 * tracks;
    const v = (i / count) * Math.PI * 2;
    // Volumetric dispersion within tube radius
    const tubeR = r * (0.85 + Math.random() * 0.15);

    coords[i * 3] = (R + tubeR * Math.cos(u)) * Math.cos(v);
    coords[i * 3 + 1] = (R + tubeR * Math.cos(u)) * Math.sin(v);
    coords[i * 3 + 2] = tubeR * Math.sin(u);
  }
  return coords;
}

/**
 * 6. 3D Stepped Concentric Lens Barrels with Depth (AI Photography)
 */
export function generateApertureRings(count: number = TOTAL_POINTS): Float32Array {
  const coords = new Float32Array(count * 3);
  const ringRadii = [2.2, 1.5, 0.8];
  const ringDepths = [0.3, 0.0, -0.28];
  const ringPts = Math.floor((count * 0.6) / ringRadii.length);

  let idx = 0;
  for (let r = 0; r < ringRadii.length; r++) {
    const radius = ringRadii[r];
    const zBase = ringDepths[r];

    for (let i = 0; i < ringPts; i++) {
      const angle = (i / ringPts) * Math.PI * 2;
      coords[idx * 3] = Math.cos(angle) * radius;
      coords[idx * 3 + 1] = Math.sin(angle) * radius;
      coords[idx * 3 + 2] = zBase + (Math.random() - 0.5) * 0.08;
      idx++;
    }
  }

  // 6 Curved Diaphragm Blades bridging outer & inner rings
  const bladePts = count - idx;
  const numBlades = 6;
  const ptsPerBlade = Math.floor(bladePts / numBlades);

  for (let b = 0; b < numBlades; b++) {
    const baseAngle = (b / numBlades) * Math.PI * 2;
    const take = b === numBlades - 1 ? count - idx : ptsPerBlade;

    for (let p = 0; p < take; p++) {
      const t = p / take;
      const angle = baseAngle + t * 1.15;
      const rad = 0.8 + t * (2.2 - 0.8);
      const z = -0.28 + t * 0.58;

      coords[idx * 3] = Math.cos(angle) * rad;
      coords[idx * 3 + 1] = Math.sin(angle) * rad;
      coords[idx * 3 + 2] = z;
      idx++;
    }
  }

  return coords;
}

/**
 * 7. Vertical Neural Stream / Flowing Line (During scroll between sections)
 */
export function generateStreamLine(count: number = TOTAL_POINTS, height: number = 7.5): Float32Array {
  const coords = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = i / count;
    const y = (t - 0.5) * height;
    const radius = 0.10 + Math.sin(t * Math.PI * 10) * 0.06;
    const angle = t * Math.PI * 22;
    coords[i * 3] = Math.cos(angle) * radius;
    coords[i * 3 + 1] = y;
    coords[i * 3 + 2] = Math.sin(angle) * radius;
  }
  return coords;
}
