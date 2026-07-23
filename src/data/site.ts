/**
 * Central source of truth for all text, links, and structured data on the
 * landing page. Edit this file to update copy without touching components.
 */

export const site = {
  name: 'TensorMesh',
  domain: 'www.tensor-mesh.com',
  // Browser-tab / search-result title (keep ≤ 60 chars so Google shows it
  // in full). The suffix disambiguates us from the unrelated AI-inference
  // company at tensormesh.ai in search results.
  seoTitle: 'TensorMesh | PyTorch-Native Finite Element Library',
  // Meta description (~150 chars) shown under the title in search results.
  seoDescription:
    'Open-source finite element (FEM) library built on PyTorch — GPU-accelerated assembly, autograd through the solver, 50+ examples. Apache-2.0, by ETH Zürich CAMLab.',
  tagline:
    'A fast, differentiable, JIT-free, debugging-friendly finite element library for PyTorch.',
  shortDescription:
    'PyTorch-native FEM with GPU-accelerated assembly, autograd through the solver, and a Pythonic weak-form API — built at ETH CAMLab.',
};

export const links = {
  github: 'https://github.com/camlab-ethz/TensorMesh',
  docs: 'https://docs.tensor-mesh.com',
  examples: 'https://docs.tensor-mesh.com/example_gallery/',
  discord: 'https://discord.gg/EC9kbHSnrx',
  discussions: 'https://github.com/camlab-ethz/TensorMesh/discussions',
  issues: 'https://github.com/camlab-ethz/TensorMesh/issues',
  email: 'mailto:shizheng.wen@sam.math.ethz.ch',
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
    command: 'pip install tensormesh-fem',
    href: links.docs + '/install.html',
  },
  {
    command: 'git clone https://github.com/camlab-ethz/TensorMesh',
    href: links.github,
  },
];

// Release badge shown above the hero logo. Update on every release.
export const heroRelease = {
  version: 'v0.2.0',
  summary: 'Mixed multi-field assembly, distributed FEM & open-domain waves',
  href: links.github + '/releases/tag/v0.2.0',
};

// Quick-fact strip at the bottom of the hero. Keep to four items.
export const heroStats = [
  { value: '50+', label: 'runnable examples' },
  { value: '11', label: 'problem categories' },
  { value: '6', label: 'sparse-solver backends' },
  { value: '10×', label: 'GPU speedup vs CPU FEM' },
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
    title: 'GPU-Native & Differentiable',
    description:
      'Built on PyTorch — move the entire FEM workflow to GPU with one line. Autograd flows seamlessly through assembly and solve for end-to-end differentiable PDE pipelines.',
  },
  {
    icon: 'bolt',
    title: 'Tensorized Assembly',
    description:
      'A fully tensorized Map-Reduce algorithm powered by TensorGalerkin fuses element-wise ops into monolithic GPU kernels — order-of-magnitude speedups over CPU-based FEM stacks.',
  },
  {
    icon: 'terminal',
    title: 'JIT-Free & Debugging-Friendly',
    description:
      'Eager execution with no compilation overhead. Dynamic meshes, adaptive refinement, and interactive workflows just work — no recompilation latency, no opaque traces.',
  },
  {
    icon: 'elements',
    title: 'Element & Mesh Support',
    description:
      'Triangular, tetrahedral, pyramid, and prismatic elements. Automated mesh generation for common geometries with seamless Gmsh and VTK-HDF5 I/O.',
  },
  {
    icon: 'solvers',
    title: 'Flexible Solvers',
    description:
      'Powered by torch-sla — linear, nonlinear, and eigenvalue solvers across CPU/GPU backends with autograd, batched solves, and multi-GPU scaling.',
  },
  {
    icon: 'python',
    title: 'Pythonic API',
    description:
      'Custom weak forms in pure Python — no DSL, no form compiler. If you can write PyTorch, you can write FEM.',
  },
];

// ---------------------------------------------------------------------------
// M3 — Gallery & Benchmarks data
// ---------------------------------------------------------------------------

// Bento layout: each row of the lg grid is one `wide: true` card (2 cols —
// reserved for the panoramic multi-panel figures, aspect ≥ 2:1) plus two
// normal cards. Keep the W,n,n / n,n,W zigzag when reordering so rows stay
// balanced. `tag` renders as a small category chip on the image.
export const gallery = [
  {
    src: '/assets/phononic_band_structure.png',
    kind: 'image' as const,
    wide: true,
    tag: 'Wave',
    title: 'Phononic crystals',
    caption: 'Bloch–Floquet band structure; mean error 0.08% vs COMSOL.',
    href: links.docs + '/example_gallery/phononic_crystal.html',
  },
  {
    src: '/assets/poisson_3d_half_from_cut.png',
    kind: 'image' as const,
    tag: 'Poisson',
    title: '3D Poisson',
    caption: 'Tetrahedral mesh, cut view of the scalar field.',
    href: links.docs + '/example_gallery/poisson.html',
  },
  {
    src: '/assets/Allen-Cahn.gif',
    kind: 'animation' as const,
    tag: 'Diffusion',
    title: 'Allen–Cahn phase field',
    caption: 'Nonlinear time evolution with Newton iteration per step.',
    href: links.docs + '/example_gallery/diffusion.html',
  },
  {
    src: '/assets/wave.gif',
    kind: 'animation' as const,
    tag: 'Wave',
    title: 'Wave equation',
    caption: 'Explicit central-difference time integration.',
    href: links.docs + '/example_gallery/wave.html',
  },
  {
    src: '/assets/hyperelastic_rubber.png',
    kind: 'image' as const,
    tag: 'Solid',
    title: 'Hyperelastic rubber',
    caption: 'Large-deformation solid mechanics with a Newton solver.',
    href: links.docs + '/example_gallery/solid/index.html',
  },
  {
    src: '/assets/optical_ring_resonator.png',
    kind: 'image' as const,
    wide: true,
    tag: 'Wave',
    title: 'Open-domain waves',
    caption: 'Waveguide-coupled silicon microdisk with PML absorbing layers.',
    href: links.docs + '/example_gallery/open_domain_wave.html',
  },
  {
    src: '/assets/stokes_taylor_hood.png',
    kind: 'image' as const,
    wide: true,
    tag: 'Fluid',
    title: 'Taylor–Hood Stokes',
    caption: 'Stabilization-free mixed P2–P1 assembly with optimal convergence.',
    href: links.docs + '/example_gallery/fluid/stokes_taylor_hood.html',
  },
  {
    src: '/assets/vibration_cylinder_modes.png',
    kind: 'image' as const,
    tag: 'Solid',
    title: 'Modal analysis',
    caption: 'Natural frequencies and mode shapes of a cantilever cylinder.',
    href: links.docs + '/example_gallery/modal_analysis.html',
  },
  {
    src: '/assets/magnetostatic_field.png',
    kind: 'image' as const,
    tag: 'Maxwell',
    title: 'Magnetostatics',
    caption: '3D magnetic field around a current-carrying wire (stabilized nodal curl–curl).',
    href: links.docs + '/example_gallery/maxwell.html',
  },
  {
    src: '/assets/tensormesh_optimization.gif',
    kind: 'animation' as const,
    tag: 'Inverse design',
    title: 'Topology optimization',
    caption: 'Compliance minimization via the Optimality Criteria method.',
    href: links.docs + '/example_gallery/inverse_design.html',
  },
  {
    src: '/assets/poisson_galerkin_loss.png',
    kind: 'image' as const,
    tag: 'ML',
    title: 'Physics-informed learning',
    caption: 'A network trained to minimize the assembled Galerkin residual.',
    href: links.docs + '/example_gallery/physics_informed.html',
  },
  {
    src: '/assets/cavity_results.png',
    kind: 'image' as const,
    wide: true,
    tag: 'Fluid',
    title: 'Lid-driven cavity',
    caption: 'Incompressible Navier–Stokes with Taylor–Hood (P2–P1) mixed elements.',
    href: links.docs + '/example_gallery/fluid/index.html',
  },
];

export const benchmarks = {
  competitors: ['FEniCS', 'Firedrake', 'MFEM', 'scikit-fem', 'JAX-FEM', 'torch-fem'],
  // Each card pairs the solved field (`vis`, PyVista render — what was
  // computed) with the timing plot (`src` — how fast). Same figures as
  // docs/performance/benchmarks.html.
  plots: [
    {
      src: '/assets/all_frameworks_time_combined_poisson_3d.png',
      vis: '/assets/benchmark_vis_poisson_3d.webp',
      visAlt: 'Solved 3D Poisson field on a tetrahedral mesh (PyVista render)',
      title: '3D Poisson — total time vs DOFs',
      caption:
        'Left: the solved field on the tetrahedral benchmark mesh. Right: wall-clock time for every framework, CPU and CUDA — TensorMesh (CUDA) scales linearly past 10⁶ DOFs.',
    },
    {
      src: '/assets/all_frameworks_time_combined_elasticity_3d.png',
      vis: '/assets/benchmark_vis_elasticity_3d.webp',
      visAlt: 'Solved 3D elasticity displacement field with fixed supports and surface traction',
      title: '3D Linear elasticity — total time vs DOFs',
      caption:
        'Left: displacement magnitude under surface traction with fixed supports. Right: the same timing comparison on this vector-valued problem — CUDA backends widen the lead on larger meshes.',
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
u = condenser.recover(K_.solve(b_, verbose=True))
`;

// ---------------------------------------------------------------------------
// M4 — Examples gallery (11 categories)
// ---------------------------------------------------------------------------

// Order kept in lockstep with the README "Examples" table. Counts are the
// number of runnable scripts in each examples/ subfolder; bump as it grows.
export const exampleCategories = [
  {
    label: 'Basics',
    icon: 'basics',
    description: 'Mesh viz, basis functions, element gallery.',
    count: '4 examples',
    href: links.docs + '/example_gallery/basics.html',
  },
  {
    label: 'Poisson',
    icon: 'poisson',
    description: '2D/3D Poisson, batched RHS, h-adaptivity.',
    count: '3 examples',
    href: links.docs + '/example_gallery/poisson.html',
  },
  {
    label: 'Diffusion',
    icon: 'diffusion',
    description: 'Heat equation and Allen–Cahn phase field.',
    count: '5 examples',
    href: links.docs + '/example_gallery/diffusion.html',
  },
  {
    label: 'Wave',
    icon: 'wave',
    description: 'Time-domain wave, Helmholtz, phononic band structures, PML & ports.',
    count: '8 examples',
    href: links.docs + '/example_gallery/wave.html',
  },
  {
    label: 'Solid',
    icon: 'solid',
    description: 'Hyperelasticity, contact, plasticity, geomechanics, modal analysis.',
    count: '9 examples',
    href: links.docs + '/example_gallery/solid/index.html',
  },
  {
    label: 'Fluid',
    icon: 'fluid',
    description: 'Taylor–Hood Stokes, lid-driven cavity, cylinder flow, Rayleigh–Bénard, Taylor–Green.',
    count: '8 examples',
    href: links.docs + '/example_gallery/fluid/index.html',
  },
  {
    label: 'Magnetostatics',
    icon: 'magnetostatics',
    description: '3D Maxwell — field around a wire via nodal curl–curl.',
    count: '1 example',
    href: links.docs + '/example_gallery/maxwell.html',
  },
  {
    label: 'Inverse design',
    icon: 'inverse',
    description: 'Coefficient ID and density-based topology optimization, via autograd.',
    count: '4 examples',
    href: links.docs + '/example_gallery/inverse_design.html',
  },
  {
    label: 'Physics-informed',
    icon: 'physics',
    description: 'Train a network to minimize the assembled Galerkin residual.',
    count: '1 example',
    href: links.docs + '/example_gallery/physics_informed.html',
  },
  {
    label: 'Dataset',
    icon: 'dataset',
    description: 'Batch mesh & field generation for ML training.',
    count: '3 examples',
    href: links.docs + '/example_gallery/dataset.html',
  },
  {
    label: 'Distributed',
    icon: 'distributed',
    description: 'Multi-GPU assembly, mesh partitioning, graph coloring.',
    count: '4 examples',
    // The gallery chapter returns once the multi-GPU runs are published;
    // until then the user-guide chapter is the canonical reference.
    href: links.docs + '/user_guide/distributed.html',
  },
];

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
      { label: 'Releases', href: links.github + '/releases' },
      { label: 'Contributing', href: links.contributing },
    ],
  },
];
