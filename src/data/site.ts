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
  examples: 'https://github.com/camlab-ethz/TensorMesh/tree/main/examples',
  discord: 'https://discord.gg/tensormesh',
  discussions: 'https://github.com/camlab-ethz/TensorMesh/discussions',
  issues: 'https://github.com/camlab-ethz/TensorMesh/issues',
  benchRepo: 'https://github.com/camlab-ethz/tensormesh-bench',
  license: 'https://github.com/camlab-ethz/TensorMesh/blob/main/LICENSE',
  contributing:
    'https://github.com/camlab-ethz/TensorMesh/blob/main/CONTRIBUTING.md',
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
