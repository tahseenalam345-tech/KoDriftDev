import * as THREE from "three";

export const TOTAL_POINTS = 3800;

// 1. PERFECT STRICT GRID TYPOGRAPHY (Auto-fitted, uniform stride, zero distortion)
export function sampleTextCoordinates(
  text: string,
  count: number,
  isMobile: boolean
): Float32Array {
  const coords = new Float32Array(count * 3);
  if (typeof window === "undefined") return coords;

  const canvas = document.createElement("canvas");
  const cw = isMobile ? 1280 : 2048;
  const ch = 512;
  canvas.width = cw;
  canvas.height = ch;
  const ctx = canvas.getContext("2d");
  if (!ctx) return coords;

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, cw, ch);
  ctx.fillStyle = "#FFFFFF";

  const isMultiLine = text.includes("WELCOME");
  const line1 = isMultiLine ? "HI, WELCOME TO" : text;
  const line2 = isMultiLine ? "KODRIFTDEV" : "";

  let fontSize = isMobile ? 86 : 124;
  ctx.font = `900 ${fontSize}px 'Manrope', 'Inter', 'Arial Black', sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const maxW = isMultiLine
    ? Math.max(ctx.measureText(line1).width, ctx.measureText(line2).width)
    : ctx.measureText(text).width;

  if (maxW > cw * 0.86) {
    fontSize = Math.floor(fontSize * (cw * 0.86) / maxW);
    ctx.font = `900 ${fontSize}px 'Manrope', 'Inter', 'Arial Black', sans-serif`;
  }

  if (isMultiLine) {
    const offset = fontSize * 0.62;
    ctx.fillText(line1, cw / 2, ch / 2 - offset);
    ctx.fillText(line2, cw / 2, ch / 2 + offset);
  } else {
    ctx.fillText(text, cw / 2, ch / 2);
  }

  const imgData = ctx.getImageData(0, 0, cw, ch);
  const validPixels: [number, number][] = [];

  const step = 4;
  for (let y = 0; y < ch; y += step) {
    for (let x = 0; x < cw; x += step) {
      const idx = (y * cw + x) * 4;
      if (imgData.data[idx] > 110) {
        validPixels.push([x - cw / 2, -(y - ch / 2)]);
      }
    }
  }

  const totalValid = validPixels.length;
  if (totalValid === 0) return coords;

  const scale = isMobile ? 0.0036 : 0.0050;
  const stride = totalValid / count;

  for (let i = 0; i < count; i++) {
    const idx = Math.floor(i * stride) % totalValid;
    const p = validPixels[idx];
    coords[i * 3] = p[0] * scale;
    coords[i * 3 + 1] = p[1] * scale;
    coords[i * 3 + 2] = (Math.random() - 0.5) * 0.03;
  }

  return coords;
}

// 2. High-Definition 3D Pac-Man
export function generatePacman(count: number, mouthOpen: number, radius = 0.58): Float32Array {
  const coords = new Float32Array(count * 3);
  let pIdx = 0;

  const eyeCount = 80;
  const eyeRadius = radius * 0.14;
  const eyeCenter = new THREE.Vector3(radius * 0.25, radius * 0.65, radius * 0.55);

  for (let i = 0; i < eyeCount; i++) {
    const u = Math.random() * 2 * Math.PI;
    const v = Math.acos(2 * Math.random() - 1);
    const r = eyeRadius * Math.cbrt(Math.random());
    coords[i * 3] = eyeCenter.x + r * Math.sin(v) * Math.cos(u);
    coords[i * 3 + 1] = eyeCenter.y + r * Math.sin(v) * Math.sin(u);
    coords[i * 3 + 2] = eyeCenter.z + r * Math.cos(v);
  }
  pIdx = eyeCount;

  const mouthLimit = (0.25 + mouthOpen * 0.65) * Math.PI;

  while (pIdx < count) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    const xDir = Math.cos(theta) * Math.sin(phi);
    const yDir = Math.sin(theta) * Math.sin(phi);
    const angle = Math.atan2(yDir, xDir);

    if (Math.abs(angle) > mouthLimit * 0.5 || xDir < 0) {
      const r = radius * Math.cbrt(0.5 + 0.5 * Math.random());
      coords[pIdx * 3] = r * Math.sin(phi) * Math.cos(theta);
      coords[pIdx * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[pIdx * 3 + 2] = r * Math.cos(phi);
      pIdx++;
    }
  }
  return coords;
}

// 3. Web Development: 3D Isometric Wireframe Cube
export function generateWireframeCube(count: number, size = 1.6): Float32Array {
  const coords = new Float32Array(count * 3);
  const h = size / 2;
  for (let i = 0; i < count; i++) {
    const edge = Math.floor(Math.random() * 12);
    const t = Math.random() * size - h;
    let x = 0, y = 0, z = 0;
    switch (edge) {
      case 0: x = t; y = h; z = h; break;
      case 1: x = t; y = -h; z = h; break;
      case 2: x = t; y = h; z = -h; break;
      case 3: x = t; y = -h; z = -h; break;
      case 4: x = h; y = t; z = h; break;
      case 5: x = -h; y = t; z = h; break;
      case 6: x = h; y = t; z = -h; break;
      case 7: x = -h; y = t; z = -h; break;
      case 8: x = h; y = h; z = t; break;
      case 9: x = -h; y = h; z = t; break;
      case 10: x = h; y = -h; z = t; break;
      case 11: x = -h; y = -h; z = t; break;
    }
    coords[i * 3] = x + (Math.random() - 0.5) * 0.04;
    coords[i * 3 + 1] = y + (Math.random() - 0.5) * 0.04;
    coords[i * 3 + 2] = z + (Math.random() - 0.5) * 0.04;
  }
  return coords;
}

// 4. Software Development: 3-Tier Layered Server Stack
export function generateSoftwareStack(count: number, width = 1.8, depth = 1.4): Float32Array {
  const coords = new Float32Array(count * 3);
  const hw = width / 2;
  const hd = depth / 2;
  const layers = [-0.65, 0.0, 0.65];

  for (let i = 0; i < count; i++) {
    const seg = Math.random();
    if (seg < 0.8) {
      const layerY = layers[Math.floor(Math.random() * 3)];
      coords[i * 3] = (Math.random() - 0.5) * width;
      coords[i * 3 + 1] = layerY + (Math.random() - 0.5) * 0.08;
      coords[i * 3 + 2] = (Math.random() - 0.5) * depth;
    } else {
      const cx = Math.random() < 0.5 ? -hw * 0.85 : hw * 0.85;
      const cz = Math.random() < 0.5 ? -hd * 0.85 : hd * 0.85;
      coords[i * 3] = cx + (Math.random() - 0.5) * 0.06;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      coords[i * 3 + 2] = cz + (Math.random() - 0.5) * 0.06;
    }
  }
  return coords;
}

// 5. App Development: 3D Smartphone Device Chassis
export function generatePhoneFrame(count: number, w = 0.70, h = 1.25, d = 0.14): Float32Array {
  const coords = new Float32Array(count * 3);
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;

  for (let i = 0; i < count; i++) {
    const seg = Math.random();
    if (seg < 0.45) {
      const side = Math.random();
      coords[i * 3] = side < 0.5 ? (Math.random() < 0.5 ? -hw : hw) : Math.random() * w - hw;
      coords[i * 3 + 1] = side < 0.5 ? Math.random() * h - hh : (Math.random() < 0.5 ? -hh : hh);
      coords[i * 3 + 2] = hd;
    } else if (seg < 0.75) {
      const side = Math.random();
      coords[i * 3] = side < 0.5 ? (Math.random() < 0.5 ? -hw : hw) : Math.random() * w - hw;
      coords[i * 3 + 1] = side < 0.5 ? Math.random() * h - hh : (Math.random() < 0.5 ? -hh : hh);
      coords[i * 3 + 2] = -hd;
    } else if (seg < 0.88) {
      coords[i * 3] = (Math.random() - 0.5) * 0.35;
      coords[i * 3 + 1] = hh - 0.2;
      coords[i * 3 + 2] = hd + 0.02;
    } else {
      coords[i * 3] = (Math.random() - 0.5) * (w * 0.8);
      coords[i * 3 + 1] = (Math.random() - 0.5) * (h * 0.8);
      coords[i * 3 + 2] = 0;
    }
  }
  return coords;
}

// 6. AI Automation: 3D Revolving Neural Torus
export function generateNeuralTorus(count: number, R = 1.05, r = 0.38): Float32Array {
  const coords = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;
    coords[i * 3] = (R + r * Math.cos(v)) * Math.cos(u);
    coords[i * 3 + 1] = (R + r * Math.cos(v)) * Math.sin(u);
    coords[i * 3 + 2] = r * Math.sin(v);
  }
  return coords;
}

// 7. AI Photography: 3D Stepped Aperture Rings
export function generateApertureRings(count: number): Float32Array {
  const coords = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const ring = Math.floor(Math.random() * 3);
    const r = 0.35 + ring * 0.38;
    const angle = Math.random() * Math.PI * 2;
    const zDepth = (ring - 1) * 0.22;
    coords[i * 3] = Math.cos(angle) * r;
    coords[i * 3 + 1] = Math.sin(angle) * r;
    coords[i * 3 + 2] = zDepth + (Math.random() - 0.5) * 0.04;
  }
  return coords;
}

// 8. Default Volumetric Sphere
export function generateVolumetricSphere(count: number, radius = 1.4): Float32Array {
  const coords = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(0.2 + 0.8 * Math.random());
    coords[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    coords[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    coords[i * 3 + 2] = r * Math.cos(phi);
  }
  return coords;
}

// 9. Web Development: 3D Holographic Code Tag </ >
export function generateCodeTag(count: number, scale = 0.85): Float32Array {
  const coords = new Float32Array(count * 3);
  const leftCount = Math.floor(count * 0.32);
  const slashCount = Math.floor(count * 0.26);
  const rightCount = Math.floor(count * 0.32);
  const sparkCount = count - leftCount - slashCount - rightCount;

  let idx = 0;

  // Left Chevron '<'
  // Apex at (-0.95 * scale, 0), top at (-0.45 * scale, 0.72 * scale), bottom at (-0.45 * scale, -0.72 * scale)
  for (let i = 0; i < leftCount; i++) {
    const isTop = Math.random() < 0.5;
    const t = Math.random();
    const x = isTop
      ? -0.95 * scale + t * 0.50 * scale
      : -0.95 * scale + t * 0.50 * scale;
    const y = isTop ? t * 0.72 * scale : -t * 0.72 * scale;
    const z = (Math.random() - 0.5) * 0.28 * scale;
    // Slight line thickness
    const rOffset = (Math.random() - 0.5) * 0.05 * scale;
    coords[idx * 3] = x + rOffset;
    coords[idx * 3 + 1] = y + rOffset;
    coords[idx * 3 + 2] = z;
    idx++;
  }

  // Forward Slash '/'
  // From (-0.16 * scale, -0.80 * scale) to (0.16 * scale, 0.80 * scale)
  for (let i = 0; i < slashCount; i++) {
    const t = Math.random() * 2 - 1; // -1 to 1
    const x = t * 0.18 * scale;
    const y = t * 0.80 * scale;
    const z = (Math.random() - 0.5) * 0.28 * scale;
    const rOffset = (Math.random() - 0.5) * 0.05 * scale;
    coords[idx * 3] = x + rOffset;
    coords[idx * 3 + 1] = y + rOffset;
    coords[idx * 3 + 2] = z;
    idx++;
  }

  // Right Chevron '>'
  // Apex at (0.95 * scale, 0), top at (0.45 * scale, 0.72 * scale), bottom at (0.45 * scale, -0.72 * scale)
  for (let i = 0; i < rightCount; i++) {
    const isTop = Math.random() < 0.5;
    const t = Math.random();
    const x = isTop
      ? 0.95 * scale - t * 0.50 * scale
      : 0.95 * scale - t * 0.50 * scale;
    const y = isTop ? t * 0.72 * scale : -t * 0.72 * scale;
    const z = (Math.random() - 0.5) * 0.28 * scale;
    const rOffset = (Math.random() - 0.5) * 0.05 * scale;
    coords[idx * 3] = x + rOffset;
    coords[idx * 3 + 1] = y + rOffset;
    coords[idx * 3 + 2] = z;
    idx++;
  }

  // Floating tech sparks & vertex halos
  const vertices = [
    [-0.95 * scale, 0],
    [-0.45 * scale, 0.72 * scale],
    [-0.45 * scale, -0.72 * scale],
    [-0.18 * scale, -0.80 * scale],
    [0.18 * scale, 0.80 * scale],
    [0.95 * scale, 0],
    [0.45 * scale, 0.72 * scale],
    [0.45 * scale, -0.72 * scale],
  ];

  while (idx < count) {
    const v = vertices[Math.floor(Math.random() * vertices.length)];
    const r = Math.random() * 0.12 * scale;
    const ang = Math.random() * 2 * Math.PI;
    coords[idx * 3] = v[0] + Math.cos(ang) * r;
    coords[idx * 3 + 1] = v[1] + Math.sin(ang) * r;
    coords[idx * 3 + 2] = (Math.random() - 0.5) * 0.35 * scale;
    idx++;
  }

  return coords;
}

// 10. Software Development: 3D Mechanical Gear Icon
export function generateGear(
  count: number,
  outerRadius = 0.72,
  innerRadius = 0.28,
  numTeeth = 8,
  depth = 0.20
): Float32Array {
  const coords = new Float32Array(count * 3);
  const rRoot = outerRadius * 0.75;
  const rTip = outerRadius * 1.12;
  const rAxle = innerRadius * 0.50;

  for (let i = 0; i < count; i++) {
    const section = Math.random();

    if (section < 0.55) {
      // Outer Teeth & Rim Perimeter
      const theta = Math.random() * 2 * Math.PI;
      const toothAngle = (2 * Math.PI) / numTeeth;
      const phase = ((theta % toothAngle) + toothAngle) % toothAngle;
      const norm = phase / toothAngle; // 0 to 1

      let r: number;
      if (norm < 0.45) {
        // Tooth crest
        r = rTip - Math.random() * 0.08;
      } else if (norm < 0.55) {
        // Tooth descending flank
        const t = (norm - 0.45) / 0.10;
        r = rTip - t * (rTip - rRoot);
      } else if (norm < 0.90) {
        // Root valley
        r = rRoot + Math.random() * 0.06;
      } else {
        // Tooth ascending flank
        const t = (norm - 0.90) / 0.10;
        r = rRoot + t * (rTip - rRoot);
      }

      coords[i * 3] = Math.cos(theta) * r;
      coords[i * 3 + 1] = Math.sin(theta) * r;
      coords[i * 3 + 2] = (Math.random() - 0.5) * depth;
    } else if (section < 0.75) {
      // Annular Rim Surface (between innerRadius and rRoot)
      const theta = Math.random() * 2 * Math.PI;
      const r = innerRadius + Math.random() * (rRoot - innerRadius);
      coords[i * 3] = Math.cos(theta) * r;
      coords[i * 3 + 1] = Math.sin(theta) * r;
      coords[i * 3 + 2] = (Math.random() < 0.5 ? -1 : 1) * (depth / 2) + (Math.random() - 0.5) * 0.04;
    } else if (section < 0.88) {
      // 4 Connecting Spokes
      const spoke = Math.floor(Math.random() * 4);
      const baseAngle = spoke * (Math.PI / 2);
      const r = innerRadius + Math.random() * (rRoot - innerRadius);
      const w = (Math.random() - 0.5) * 0.14;
      coords[i * 3] = r * Math.cos(baseAngle) - w * Math.sin(baseAngle);
      coords[i * 3 + 1] = r * Math.sin(baseAngle) + w * Math.cos(baseAngle);
      coords[i * 3 + 2] = (Math.random() - 0.5) * (depth * 0.9);
    } else {
      // Central Hub / Axle Hole
      const theta = Math.random() * 2 * Math.PI;
      const r = rAxle + Math.random() * (innerRadius - rAxle);
      coords[i * 3] = Math.cos(theta) * r;
      coords[i * 3 + 1] = Math.sin(theta) * r;
      coords[i * 3 + 2] = (Math.random() - 0.5) * (depth * 1.15);
    }
  }

  return coords;
}

// 11. AI Automation: 3D Neural Processor / AI Microchip
export function generateAiChip(count: number, size = 0.82, depth = 0.15): Float32Array {
  const coords = new Float32Array(count * 3);
  const half = size / 2;
  const dieHalf = half * 0.46;
  const pinCountPerSide = 6;
  const pinLength = 0.16 * size;

  for (let i = 0; i < count; i++) {
    const part = Math.random();

    if (part < 0.45) {
      // Main Silicon Package Body (Square Slab with bevel)
      const edge = Math.random();
      if (edge < 0.4) {
        // Perimeter edges
        const side = Math.floor(Math.random() * 4);
        const t = (Math.random() - 0.5) * size;
        if (side === 0) { coords[i * 3] = t; coords[i * 3 + 1] = half; }
        else if (side === 1) { coords[i * 3] = t; coords[i * 3 + 1] = -half; }
        else if (side === 2) { coords[i * 3] = half; coords[i * 3 + 1] = t; }
        else { coords[i * 3] = -half; coords[i * 3 + 1] = t; }
        coords[i * 3 + 2] = (Math.random() - 0.5) * depth;
      } else {
        // Top and bottom faces
        coords[i * 3] = (Math.random() - 0.5) * size;
        coords[i * 3 + 1] = (Math.random() - 0.5) * size;
        coords[i * 3 + 2] = (Math.random() < 0.5 ? -half : half) * (depth / size) + (Math.random() - 0.5) * 0.03;
      }
    } else if (part < 0.70) {
      // Raised Neural Core / Die in Center
      const isPerimeter = Math.random() < 0.5;
      if (isPerimeter) {
        const side = Math.floor(Math.random() * 4);
        const t = (Math.random() - 0.5) * 2 * dieHalf;
        if (side === 0) { coords[i * 3] = t; coords[i * 3 + 1] = dieHalf; }
        else if (side === 1) { coords[i * 3] = t; coords[i * 3 + 1] = -dieHalf; }
        else if (side === 2) { coords[i * 3] = dieHalf; coords[i * 3 + 1] = t; }
        else { coords[i * 3] = -dieHalf; coords[i * 3 + 1] = t; }
        coords[i * 3 + 2] = depth / 2 + 0.04;
      } else {
        // AI Die internal grid / circuitry
        const cross = Math.random() < 0.5;
        if (cross) {
          coords[i * 3] = (Math.random() - 0.5) * 2 * dieHalf;
          coords[i * 3 + 1] = (Math.random() - 0.5) * 0.06;
        } else {
          coords[i * 3] = (Math.random() - 0.5) * 0.06;
          coords[i * 3 + 1] = (Math.random() - 0.5) * 2 * dieHalf;
        }
        coords[i * 3 + 2] = depth / 2 + 0.05 + (Math.random() - 0.5) * 0.02;
      }
    } else {
      // IC Connection Pins on all 4 sides
      const side = Math.floor(Math.random() * 4);
      const pinIndex = Math.floor(Math.random() * pinCountPerSide);
      // Evenly distribute pins along the edge
      const step = (size * 0.78) / (pinCountPerSide - 1);
      const pinOffset = -size * 0.39 + pinIndex * step;
      const t = Math.random() * pinLength;

      if (side === 0) {
        // Top pins
        coords[i * 3] = pinOffset + (Math.random() - 0.5) * 0.03;
        coords[i * 3 + 1] = half + t;
      } else if (side === 1) {
        // Bottom pins
        coords[i * 3] = pinOffset + (Math.random() - 0.5) * 0.03;
        coords[i * 3 + 1] = -half - t;
      } else if (side === 2) {
        // Right pins
        coords[i * 3] = half + t;
        coords[i * 3 + 1] = pinOffset + (Math.random() - 0.5) * 0.03;
      } else {
        // Left pins
        coords[i * 3] = -half - t;
        coords[i * 3 + 1] = pinOffset + (Math.random() - 0.5) * 0.03;
      }
      coords[i * 3 + 2] = (Math.random() - 0.5) * 0.04;
    }
  }

  return coords;
}

// 12. AI Product Photography: 3D Camera Body with Lens Barrel & Aperture
export function generateAiCamera(
  count: number,
  width = 0.95,
  height = 0.65,
  depth = 0.28
): Float32Array {
  const coords = new Float32Array(count * 3);
  const hw = width / 2;
  const hh = height / 2;
  const hd = depth / 2;
  const lensCenter = [-0.10, -0.02];
  const lensRadius = 0.26;
  const lensDepth = 0.30;

  for (let i = 0; i < count; i++) {
    const part = Math.random();

    if (part < 0.40) {
      // Main Camera Body Box
      const side = Math.random();
      if (side < 0.5) {
        // Face boundaries
        coords[i * 3] = (Math.random() - 0.5) * width;
        coords[i * 3 + 1] = (Math.random() - 0.5) * height;
        coords[i * 3 + 2] = Math.random() < 0.5 ? -hd : hd;
      } else {
        // Perimeter edges with right-side hand grip
        const isX = Math.random() < 0.5;
        const xVal = isX ? (Math.random() - 0.5) * width : (Math.random() < 0.5 ? -hw : hw);
        const yVal = !isX ? (Math.random() - 0.5) * height : (Math.random() < 0.5 ? -hh : hh);
        // Grip protrusion
        const gripBonus = xVal > hw * 0.6 ? 0.08 : 0;
        coords[i * 3] = xVal;
        coords[i * 3 + 1] = yVal;
        coords[i * 3 + 2] = (Math.random() - 0.5) * depth + gripBonus;
      }
    } else if (part < 0.75) {
      // Cylindrical Lens Barrel & Aperture Rings
      const ang = Math.random() * 2 * Math.PI;
      const lensType = Math.random();

      if (lensType < 0.45) {
        // Barrel cylinder wall
        const z = hd + Math.random() * lensDepth;
        coords[i * 3] = lensCenter[0] + Math.cos(ang) * lensRadius;
        coords[i * 3 + 1] = lensCenter[1] + Math.sin(ang) * lensRadius;
        coords[i * 3 + 2] = z;
      } else if (lensType < 0.75) {
        // Front glass & stepped aperture rings
        const ring = Math.floor(Math.random() * 3);
        const r = 0.16 + ring * 0.12;
        coords[i * 3] = lensCenter[0] + Math.cos(ang) * r;
        coords[i * 3 + 1] = lensCenter[1] + Math.sin(ang) * r;
        coords[i * 3 + 2] = hd + lensDepth + (Math.random() - 0.5) * 0.03;
      } else {
        // Center aperture iris blades
        const r = Math.random() * 0.15;
        coords[i * 3] = lensCenter[0] + Math.cos(ang) * r;
        coords[i * 3 + 1] = lensCenter[1] + Math.sin(ang) * r;
        coords[i * 3 + 2] = hd + lensDepth - 0.06;
      }
    } else if (part < 0.88) {
      // Top Viewfinder / Prism Pyramid
      const t = Math.random();
      const topW = 0.45 * (1 - t * 0.3);
      coords[i * 3] = lensCenter[0] + (Math.random() - 0.5) * topW;
      coords[i * 3 + 1] = hh + t * 0.28;
      coords[i * 3 + 2] = (Math.random() - 0.5) * (depth * 0.85);
    } else if (part < 0.95) {
      // Shutter Button & Control Dial on Right Top
      const isShutter = Math.random() < 0.6;
      const r = (isShutter ? 0.08 : 0.11) * Math.random();
      const ang = Math.random() * 2 * Math.PI;
      const btnX = isShutter ? hw * 0.72 : hw * 0.38;
      coords[i * 3] = btnX + Math.cos(ang) * r;
      coords[i * 3 + 1] = hh + (isShutter ? 0.15 : 0.10) * Math.random();
      coords[i * 3 + 2] = isShutter ? hd * 0.2 : -hd * 0.2;
    } else {
      // Front Flash & Sensor Window
      const r = Math.random() * 0.07;
      const ang = Math.random() * 2 * Math.PI;
      coords[i * 3] = -hw * 0.75 + Math.cos(ang) * r;
      coords[i * 3 + 1] = hh * 0.65 + Math.sin(ang) * r;
      coords[i * 3 + 2] = hd + 0.02;
    }
  }

  return coords;
}