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

// Order and content kept in lockstep with the README "Examples" table so
// the landing page and the GitHub README always show the same showcase.
export const gallery = [
  {
    src: '/assets/poisson_3d_half_from_cut.png',
    kind: 'image' as const,
    title: '3D Poisson',
    caption: 'Tetrahedral mesh, cut view of the scalar field.',
    href: links.docs + '/example_gallery/poisson.html',
  },
  {
    src: '/assets/Allen-Cahn.gif',
    kind: 'animation' as const,
    title: 'Allen–Cahn phase field',
    caption: 'Nonlinear time evolution with Newton iteration per step.',
    href: links.docs + '/example_gallery/diffusion.html',
  },
  {
    src: '/assets/wave.gif',
    kind: 'animation' as const,
    title: 'Wave equation',
    caption: 'Explicit central-difference time integration.',
    href: links.docs + '/example_gallery/wave.html',
  },
  {
    src: '/assets/cavity_results.png',
    kind: 'image' as const,
    title: 'Lid-driven cavity',
    caption: 'Incompressible Navier–Stokes; velocity field and streamlines.',
    href: links.docs + '/example_gallery/fluid/index.html',
  },
  {
    src: '/assets/hyperelastic_rubber.png',
    kind: 'image' as const,
    title: 'Hyperelastic rubber',
    caption: 'Large-deformation solid mechanics with a Newton solver.',
    href: links.docs + '/example_gallery/solid/index.html',
  },
  {
    src: '/assets/tensormesh_optimization.gif',
    kind: 'animation' as const,
    title: 'Topology optimization',
    caption: 'Compliance minimization via the Optimality Criteria method.',
    href: links.docs + '/example_gallery/solid/index.html',
  },
];

export const benchmarks = {
  competitors: ['FEniCS', 'Firedrake', 'MFEM', 'scikit-fem', 'JAX-FEM', 'torch-fem'],
  plots: [
    {
      src: '/assets/all_frameworks_time_combined_poisson_3d.png',
      title: '3D Poisson — total time vs DOFs',
      caption:
        'Wall-clock time on tetrahedral meshes for every framework, CPU and CUDA. TensorMesh (CUDA) scales linearly past 10⁶ DOFs.',
    },
    {
      src: '/assets/all_frameworks_time_combined_elasticity_3d.png',
      title: '3D Linear elasticity — total time vs DOFs',
      caption:
        'Same comparison on a vector-valued elasticity problem. CUDA backends widen the lead on larger meshes.',
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
// M4 — Examples gallery (8 categories)
// ---------------------------------------------------------------------------

// Each category links to its docs section. Counts come from a manual sweep
// of the examples/ folder; bump them as the gallery grows.
export const exampleCategories = [
  {
    label: 'Basics',
    icon: 'basics',
    description: 'Mesh viz, basis functions, element gallery.',
    count: '1 example',
    href: links.docs + '/example_gallery/basics.html',
  },
  {
    label: 'Poisson',
    icon: 'poisson',
    description: '2D/3D Poisson, batched RHS, h-adaptivity.',
    count: '3+ examples',
    href: links.docs + '/example_gallery/poisson.html',
  },
  {
    label: 'Diffusion',
    icon: 'diffusion',
    description: 'Heat equation and Allen–Cahn phase field.',
    count: '2 examples',
    href: links.docs + '/example_gallery/diffusion.html',
  },
  {
    label: 'Wave',
    icon: 'wave',
    description: 'Explicit central-difference time integration.',
    count: '1 example',
    href: links.docs + '/example_gallery/wave.html',
  },
  {
    label: 'Fluid',
    icon: 'fluid',
    description: 'Lid-driven cavity, cylinder flow, Rayleigh–Bénard, Taylor–Green.',
    count: '4 examples',
    href: links.docs + '/example_gallery/fluid/index.html',
  },
  {
    label: 'Solid',
    icon: 'solid',
    description: 'Hyperelasticity, contact, plasticity, large deformation.',
    count: '7 examples',
    href: links.docs + '/example_gallery/solid/index.html',
  },
  {
    label: 'Dataset',
    icon: 'dataset',
    description: 'Batch mesh & field generation for ML training.',
    count: '1 example',
    href: links.docs + '/example_gallery/dataset.html',
  },
  {
    label: 'Distributed',
    icon: 'distributed',
    description: 'Multi-GPU assembly and mesh partitioning.',
    count: '1 example',
    href: links.docs + '/example_gallery/distributed.html',
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
      { label: 'Contributing', href: links.contributing },
    ],
  },
];
