/**
 * Central source of truth for all text, links, and structured data on the
 * landing page. Edit this file to update copy without touching components.
 */

export const site = {
  name: 'TensorMesh',
  domain: 'www.tensor-mesh.com',
  tagline:
    'A fast, differentiable, JIT-free, debugging-friendly finite element library for PyTorch.',
  shortDescription:
    'PyTorch-native FEM with GPU-accelerated assembly, autograd through the solver, and a Pythonic weak-form API — built at ETH CAMLab.',
};

export const links = {
  github: 'https://github.com/camlab-ethz/TensorMesh',
  docs: 'https://docs.tensor-mesh.com',
  examples: 'https://docs.tensor-mesh.com/example_gallery/',
  discord: 'https://discord.gg/qgZhyVh2',
  discussions: 'https://github.com/camlab-ethz/TensorMesh/discussions',
  issues: 'https://github.com/camlab-ethz/TensorMesh/issues',
  email: 'mailto:tensormesh.dev@gmail.com',
  benchRepo: 'https://github.com/camlab-ethz/tensormesh-bench',
  license: 'https://github.com/camlab-ethz/TensorMesh/blob/main/LICENSE',
  contributing:
    'https://github.com/camlab-ethz/TensorMesh/blob/main/CONTRIBUTING.md',
  paper: 'https://arxiv.org/abs/2602.05052',
};

// Hero CTAs come in two rows:
//   - heroPrimaryCTAs : destination buttons (where to go) — prominent solid buttons
//   - heroCommandCTAs : copy-to-clipboard commands (what to type) — mono terminal style
export const heroPrimaryCTAs = [
  {
    label: 'GITHUB',
    href: links.github,
    kind: 'github' as const,
  },
  {
    label: 'DOCUMENTATION',
    href: links.docs,
    kind: 'docs' as const,
  },
];

export const heroCommandCTAs = [
  {
    command: 'pip install tensor-mesh',
    href: links.docs + '/install.html',
  },
  {
    command: 'git clone https://github.com/camlab-ethz/TensorMesh',
    href: links.github,
  },
];

// ---------------------------------------------------------------------------
// M2 sections
// ---------------------------------------------------------------------------

export const backers = [
  {
    name: 'CAMLab — Computational and Applied Mathematics Lab',
    logo: '/assets/affiliations/CAMLab_logo.png',
    href: 'https://camlab.ethz.ch/',
  },
  {
    name: 'ETH AI Center',
    logo: '/assets/affiliations/eth_ai_center_logo.png',
    href: 'https://ai.ethz.ch/',
  },
  {
    name: 'ETH Zürich',
    logo: '/assets/affiliations/eth-logo-pos.png',
    href: 'https://ethz.ch/',
  },
];

export const features = [
  {
    icon: 'gpu',
    title: 'GPU-native',
    description:
      'Assemble matrices and run solvers on the same device as your model. No host↔device shuffling, no batched-tensor gymnastics.',
  },
  {
    icon: 'autograd',
    title: 'Differentiable end-to-end',
    description:
      'Autograd flows through assembly, boundary conditions, and the linear solver via adjoint backends. Train networks on FEM solutions directly.',
  },
  {
    icon: 'bolt',
    title: 'JIT-free, eager-first',
    description:
      'Pure eager PyTorch — no compile step, no graph-tracing surprises. Drop a breakpoint anywhere, inspect any tensor.',
  },
  {
    icon: 'python',
    title: 'Pythonic API',
    description:
      'Write weak forms as plain Python with NumPy-flavored einsum. No DSL, no symbolic engine to learn.',
  },
  {
    icon: 'elements',
    title: '7 element types · order 4',
    description:
      'Lines, triangles, quads, tetrahedra, hexahedra, pyramids, prisms — all supported up to geometric order 4, with mixed meshes out of the box.',
  },
  {
    icon: 'solvers',
    title: '7 solver backends',
    description:
      'SciPy, PyTorch, Eigen, cuDSS, CuPy, PETSc, AMG — swap with one argument to match problem size and hardware.',
  },
];

export const getStarted = [
  {
    label: 'Install',
    description:
      'One pip command and you are running. Optional extras for PETSc, CuPy, and a torch-sla GPU backend.',
    command: 'pip install tensor-mesh',
    href: links.docs + '/install.html',
    cta: 'Install guide →',
  },
  {
    label: 'Read the docs',
    description:
      'User guide, API reference, performance benchmarks, and a runnable example gallery — bilingual EN/中文.',
    href: links.docs,
    cta: 'Open docs →',
  },
  {
    label: 'Explore examples',
    description:
      '20+ runnable examples across Poisson, diffusion, wave, fluid, solid, topology optimization, and distributed assembly.',
    href: links.examples,
    cta: 'Open example gallery →',
  },
];

// ---------------------------------------------------------------------------
// M3 — Gallery & Benchmarks data
// ---------------------------------------------------------------------------

export const gallery = [
  {
    src: '/assets/heat.gif',
    kind: 'animation' as const,
    title: 'Heat equation',
    caption: 'Implicit time-stepping on a triangular mesh.',
    href: links.docs + '/example_gallery/diffusion.html',
  },
  {
    src: '/assets/wave.gif',
    kind: 'animation' as const,
    title: 'Wave equation',
    caption: 'Explicit central-difference scheme.',
    href: links.docs + '/example_gallery/wave.html',
  },
  {
    src: '/assets/allen_cahn.gif',
    kind: 'animation' as const,
    title: 'Allen–Cahn phase field',
    caption: 'Nonlinear diffusion, two phases.',
    href: links.docs + '/example_gallery/diffusion.html',
  },
  {
    src: '/assets/cavity_results.png',
    kind: 'image' as const,
    title: 'Lid-driven cavity',
    caption: 'Steady Navier–Stokes at Re = 1000.',
    href: links.docs + '/example_gallery/fluid/index.html',
  },
  {
    src: '/assets/hyperelastic_rubber.png',
    kind: 'image' as const,
    title: 'Hyperelastic rubber',
    caption: 'Finite-strain Neo-Hookean solid.',
    href: links.docs + '/example_gallery/solid/index.html',
  },
  {
    src: '/assets/poisson_h_adaptivity.png',
    kind: 'image' as const,
    title: 'h-adaptive Poisson',
    caption: 'Mesh refinement driven by error estimator.',
    href: links.docs + '/example_gallery/poisson.html',
  },
];

export const benchmarks = {
  competitors: ['FEniCS', 'Firedrake', 'MFEM', 'scikit-fem', 'JAX-FEM', 'torch-fem'],
  plots: [
    {
      src: '/assets/comparison_asm_3d_time.png',
      title: 'Assembly time — 3D Poisson',
      caption:
        'Wall-clock time for stiffness assembly on tetrahedral meshes of increasing size.',
    },
    {
      src: '/assets/comparison_asm_3d_memory.png',
      title: 'Peak memory — 3D Poisson',
      caption: 'Resident memory during assembly on the same problems.',
    },
  ],
  fullBenchUrl: links.docs + '/performance/benchmarks.html',
};

// Source code shown in the CodeDemo section. Kept here so non-code edits
// (typos, version bumps) don't require touching the component.
export const quickstartCode = `import math
import torch
from tensormesh import ElementAssembler, NodeAssembler, Mesh, Condenser

# 1. Triangular mesh of the unit square.
mesh = Mesh.gen_rectangle(chara_length=0.05)

# 2. Stiffness weak form:  a(u, v) = ∫ ∇u · ∇v dΩ
class LaplaceAssembler(ElementAssembler):
    def forward(self, gradu, gradv):
        return gradu @ gradv

# 3. Load weak form:  l(v) = ∫ f v dΩ
class SourceAssembler(NodeAssembler):
    def forward(self, v, f):
        return f * v

# 4. Source term, evaluated at every mesh node.
x, y = mesh.points[:, 0], mesh.points[:, 1]
f_vals = 2 * math.pi**2 * torch.sin(math.pi * x) * torch.sin(math.pi * y)

# 5. Assemble.
K = LaplaceAssembler.from_mesh(mesh)()
b = SourceAssembler.from_mesh(mesh)(point_data={"f": f_vals})

# 6. Apply Dirichlet BCs via static condensation, then solve.
condenser = Condenser(mesh.boundary_mask)
K_, b_ = condenser(K, b)
u = condenser.recover(K_.solve(b_))
`;

// ---------------------------------------------------------------------------
// Community
// ---------------------------------------------------------------------------

export const communityChannels = [
  {
    label: 'Join Discord',
    subtitle: 'Real-time help & discussions',
    href: links.discord,
    icon: 'discord',
    // Discord brand blurple — used as the icon tile background.
    iconBg: 'bg-[#5865F2]',
    iconColor: 'text-white',
  },
  {
    label: 'GitHub Discussions',
    subtitle: 'Searchable Q&A knowledge base',
    href: links.discussions,
    icon: 'discussions',
    iconBg: 'bg-tmblue-soft',
    iconColor: 'text-tmblue',
  },
  {
    label: 'GitHub Issues',
    subtitle: 'Bug reports & feature requests',
    href: links.issues,
    icon: 'issues',
    iconBg: 'bg-ink',
    iconColor: 'text-white',
  },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footerLinks = [
  {
    heading: 'Project',
    items: [
      { label: 'Documentation', href: links.docs },
      { label: 'GitHub', href: links.github },
      { label: 'License (Apache 2.0)', href: links.license },
    ],
  },
  {
    heading: 'Community',
    items: [
      { label: 'Discussions', href: links.discussions },
      { label: 'Issues', href: links.issues },
      { label: 'Discord', href: links.discord },
    ],
  },
  {
    heading: 'More',
    items: [
      { label: 'Examples', href: links.examples },
      { label: 'Benchmarks', href: links.benchRepo },
      { label: 'Contributing', href: links.contributing },
    ],
  },
];
