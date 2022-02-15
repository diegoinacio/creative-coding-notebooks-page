export const HEADER = {
  title: `Creative Coding Notebooks`,
  description: `An authorial collection of <span class="creative-coding">Creative Coding</span> <span class="notebooks">notebooks</span>.`,
};

export const INDEX = [
  // ! Generative
  {
    id: "Generative",
    name: "Generative",
    description:
      "Procedural generation, algorithmic design, graphics programming, creative imaging ..",
    notebooks: [
      {
        id: "wall-of-letters",
        name: "Wall of Letters",
        description:
          "A responsive experiment with character styling and layout.",
      },
      {
        id: "imgFX_pseudoHalftone",
        name: "Pseudo-Halftone",
        description:
          "Image effect algorithm that mimics the appearance of the halftone technique.",
      },
      {
        id: "imgFX_scatterCircles",
        name: "Circle Scatter Diagram",
        description:
          "Image effect algorithm that scatters raster circles (with anti-aliasing).",
      },
      {
        id: "imgFX_scatterSquares",
        name: "Square Scatter Diagram",
        description: "Image effect algorithm that scatters raster squares.",
      },
      {
        id: "imgFX_segments",
        name: "Segments",
        description:
          "Image effect algorithm that simulates small filaments inspired by old watch LCDs.",
      },
      {
        id: "imgFX_strings",
        name: "Strings",
        description:
          "Image effect algorithm that traces lines with radius variation.",
      },
      {
        id: "imgFX_tracing",
        name: "Diagonal Tracing",
        description:
          "Image effect algorithm that produces stylized diagonal stripes with color conditionals.",
      },
      {
        id: "imgFX_voronoi",
        name: "Voronoi Diagram",
        description:
          "Image effect algorithm that produces different results based on different distance metrics.",
      },
      {
        id: "svg-gargantua",
        name: "Gargantua",
        description:
          "A stylized representation of the <em>Gargantua</em> black hole in <em>SVG graphics</em>.",
      },
    ],
  },
  // ! Simulation
  {
    id: "Simulation",
    name: "Simulation",
    description:
      "Physics, nonlinear systems, dynamics, chaotic stuff, natural phenomena ..",
    notebooks: [
      {
        id: "cellularAutomaton1D",
        name: "Cellular Automaton 1D",
        description:
          "Implementation of an uni-dimensional cellular automata of binary values.",
      },
      {
        id: "cellularAutomaton2D",
        name: "Cellular Automaton 2D",
        description:
          "Implementation of a bi-dimensional cellular automata of binary values.",
      },
      {
        id: "mandelbrot-set",
        name: "Mandelbrot Set",
        description:
          "A very basic implementation of <em>mandelbrot set</em> algorithm with some performance improvements.",
      },
      {
        id: "reactionDiffusion",
        name: "Reaction Diffusion",
        description:
          "Implementation of a reaction-diffusion system based on <em>Gray Scott's</em> model.",
      },
    ],
  },
  // ! M.L. + A.I.
  {
    id: "ML-and-AI",
    name: "M.L. + A.I.",
    description:
      "Experiments involving <em>machine learning</em>, <em>artificial intelligence</em> and so on.",
    notebooks: [
      {
        id: "image_approximation_deepNN",
        name: "Image Approximation",
        description:
          "Image approximation and upscaling interpolation using <em>deep Neural Network</em>.",
      },
      {
        id: "pixel-art-depixelization-deepNN",
        name: "Depixelizing Pixel Art",
        description:
          "A pretty naive approach for <em>upscalling</em> and <em>depixelizing</em> a very low-res <em>pixel art</em> using <em>deep Neural Network</em>.",
      },
    ],
  },
  // ! Sound Design
  {
    id: "Sound-Design",
    name: "Sound Design",
    description:
      "Algorithmic composition, audio programming, sound effects, audio synthesis ..",
    notebooks: [
      {
        id: "waveform_sinusoidal",
        name: "Sinusoidal Periodic Waveform",
        description:
          "Overview about <em>sinusoidal periodic waveform</em> or <em>sine wave</em> function.",
      },
      {
        id: "waveform_non-sinusoidal",
        name: "Non-Sinusoidal Periodic Waveform",
        description:
          "Overview about <em>non-sinusoidal periodic waveforms</em>.",
      },
      {
        id: "waveform_noise",
        name: "Color of Noise",
        description:
          "Overview and implementing of <em>noise</em> function focused on its <em>power spectrum</em>.",
      },
      {
        id: "musical-notes-physics",
        name: "The physics of musical notes",
        description:
          "A brief overview of how to calculate the frequency of notes and their wavelengths.",
      },
    ],
  },
  // ! Computer Graphics
  {
    id: "Computer-Graphics",
    name: "Computer Graphics",
    description:
      "Demonstrations and studies involving some quite important topics about <em>computer graphics</em>.",
    notebooks: [
      {
        id: "2DTransformation_Matrix",
        name: "2D Transformation Matrices",
        description:
          "Overview and application of bi-dimensional transformation matrices.",
      },
      {
        id: "3DTransformation_Matrix",
        name: "3D Transformation Matrices",
        description:
          "Overview and application of tri-dimensional transformation matrices.",
      },
      {
        id: "ray-intersection_sphere",
        name: "Ray-Sphere Intersection",
        description: "Implementation of ray-sphere intersection algorithm.",
      },
      {
        id: "ray-intersection_triangle",
        name: "Ray-Triangle Intersection",
        description: "Implementation of ray-triangle intersection algorithm.",
      },
    ],
  },
  // ! Tips & Tricks
  {
    id: "Tips-and-Tricks",
    name: "Tips & Tricks",
    description:
      "A gathering of <em>Tips & Tricks</em> involving any supporting information for <em>creative coding</em> in general.",
    notebooks: [
      {
        id: "web-scraping",
        name: "Web Scraping",
        description: "Some demonstrations of how to scrape data on the web.",
      },
      {
        id: "basics_Numba",
        name: "Basics [Numba]",
        description:
          "Basic functions and operations using Numba, to high perform Python applications.",
      },
      {
        id: "matplotlib_animation",
        name: "Matplotlib Animation",
        description:
          "Exporting animated visualizations using Python and Matplotlib.",
      },
      {
        id: "audio_libraries",
        name: "Python Audio Libraries",
        description:
          "Brief overview about some of the main python libraries which promote input and output of digital audio files.",
      },
      {
        id: "image_libraries",
        name: "Python Image Libraries",
        description:
          "Brief overview about some of the main python libraries which promote input and output of digital image files.",
      },
    ],
  },
];
