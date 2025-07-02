const metadata = [
  {
    id: 1,
    type: "case-study",
    title: "CosmicVue",
    subtitle: "Award-Winning Astronomical Data Visualization",
    date: "2024-10-15",
    readTime: "12 min read",
    tags: ["React", "Three.js", "NASA APIs", "WebGL", "Space Technology"],
    problem:
      "Astronomical data visualization tools are often limited to static 2D representations, making it difficult for researchers and enthusiasts to understand spatial relationships and orbital mechanics of Near-Earth Objects. Traditional visualization methods lack real-time data integration and immersive 3D experiences.",
    solution:
      "Developed an immersive web application that transforms NASA's astronomical data into stunning 3D visualizations with real-time tracking capabilities. Implemented scientifically accurate orbital mechanics using Three.js and seamless NASA API integration for live data feeds.",
    approach:
      "Built with React for component architecture, Three.js for 3D rendering, and NASA APIs for real-time data. Implemented advanced shaders for celestial rendering, physics-based orbital calculations, and responsive design for cross-platform accessibility.",
    challenges: [
      "Handling large astronomical datasets efficiently",
      "Optimizing 3D performance across different devices",
      "Ensuring scientific accuracy of orbital mechanics",
      "Integrating multiple NASA API endpoints with rate limiting",
    ],
    results:
      "Global Finalist recognition in 2024 NASA International Space Apps Challenge, demonstrating excellence in space technology innovation. Achieved smooth 60fps performance on mobile devices with complex 3D scenes.",
    learnings:
      "Importance of scientific accuracy in data visualization, performance optimization for complex 3D scenes, and the value of real-time data integration in educational applications.",
    technologies: [
      "React",
      "Three.js",
      "NASA APIs",
      "JavaScript",
      "CSS3",
      "WebGL",
      "Responsive Design",
    ],
    metrics: {
      before: {
        "Static Data": "Yes",
        "3D Visualization": "No",
        "Real-time": "No",
      },
      after: {
        "Live NASA Data": "Yes",
        "Immersive 3D": "Yes",
        "Award Winner": "Global Finalist",
      },
    },
    projectUrl: "https://cosmicvue.netlify.app/",
    githubUrl: "https://github.com/KhamessiTaha/CosmoArchitects",
    featured: true,
    status: "Completed",
  },
  {
    id: 2,
    type: "case-study",
    title: "EternaVerseApp",
    subtitle: "Procedural Space Simulation Game",
    date: "2024-09-20",
    readTime: "15 min read",
    tags: ["Phaser.js", "React", "Node.js", "MongoDB", "Game Development"],
    problem:
      "Traditional space games lack realistic astrophysics principles and meaningful procedural generation. Most games oversimplify cosmic mechanics, leading to unrealistic gameplay experiences that don't educate players about actual space physics.",
    solution:
      "Created a groundbreaking space simulation game combining procedural generation with real astrophysics principles. Players navigate dynamically generated galaxies while managing cosmic anomalies through scientifically accurate gravitational mechanics.",
    approach:
      "Utilized Phaser.js for game engine optimization, React/Vite for modern frontend architecture, Node.js/Express for multiplayer backend, and MongoDB for persistent universe states. Implemented realistic gravitational physics and particle systems.",
    challenges: [
      "Balancing realistic physics with engaging gameplay",
      "Optimizing procedural generation algorithms",
      "Implementing multiplayer synchronization",
      "Creating adaptive difficulty systems",
    ],
    results:
      "Successfully created an educational space simulation with realistic physics. Currently in beta testing with positive feedback on both gameplay mechanics and educational value.",
    learnings:
      "Complex game state management, real-time multiplayer architecture, and the importance of balancing realism with fun in educational games.",
    technologies: ["Phaser.js", "React/Vite", "Node.js/Express", "MongoDB"],
    metrics: {
      before: {
        "Physics Accuracy": "Low",
        Multiplayer: "No",
        "Procedural Gen": "Basic",
      },
      after: {
        "Real Physics": "Yes",
        Multiplayer: "Live",
        "Dynamic Universe": "Advanced",
      },
    },
    githubUrl: "https://github.com/KhamessiTaha/EternaVerseApp",
    featured: true,
    status: "Beta Testing",
  },
  {
    id: 3,
    type: "case-study",
    title: "CarVision",
    subtitle: "AI-Powered Automotive Analysis Platform",
    date: "2024-08-10",
    readTime: "14 min read",
    tags: [
      "TensorFlow",
      "Flutter",
      "Computer Vision",
      "Machine Learning",
      "Mobile Development",
    ],
    problem:
      "Manual vehicle assessment for market value prediction is time-consuming and subjective. Traditional methods lack accuracy and require expert knowledge, making vehicle valuation inaccessible to average consumers.",
    solution:
      "Developed an intelligent platform using computer vision and machine learning for instant vehicle classification and market value prediction. Custom-trained neural networks process vehicle images with high accuracy.",
    approach:
      "Implemented transfer learning with TensorFlow for vehicle classification, built Flutter mobile app for real-time camera integration, and created Node.js backend for scalable data processing and API management.",
    challenges: [
      "Training accurate models with limited datasets",
      "Optimizing mobile performance for real-time processing",
      "Handling various lighting conditions and camera angles",
      "Ensuring offline functionality",
    ],
    results:
      "Achieved 94% accuracy in vehicle classification and within 15% error margin for price predictions. Successfully deployed alpha version with offline processing capabilities.",
    learnings:
      "Importance of diverse training data, mobile optimization strategies for ML models, and user experience design for AI-powered applications.",
    technologies: [
      "TensorFlow",
      "Flutter",
      "Node.js",
      "Computer Vision",
      "Transfer Learning",
      "Machine Learning",
      "REST APIs",
    ],
    metrics: {
      before: {
        "Manual Assessment": "Hours",
        Accuracy: "70%",
        Accessibility: "Low",
      },
      after: {
        "Instant Analysis": "Seconds",
        "AI Accuracy": "94%",
        "Mobile Access": "Yes",
      },
    },
    githubUrl: "https://github.com/KhamessiTaha/CarVisionProject",
    featured: true,
    status: "Alpha Version",
  },
  {
    id: 4,
    type: "case-study",
    title: "DeepLearning Quantum Fluctuation",
    subtitle: "Physics-Informed Neural Networks for Cosmology",
    date: "2024-07-25",
    readTime: "18 min read",
    tags: [
      "PyTorch",
      "Physics-Informed NNs",
      "Cosmology",
      "Research",
      "Deep Learning",
    ],
    problem:
      "Traditional Boltzmann solvers for analyzing cosmic microwave background (CMB) data are computationally expensive and limited in detecting subtle non-Gaussian anomalies that could reveal new physics beyond the standard ΛCDM model.",
    solution:
      "Developed a deep learning framework combining Physics-Informed Neural Networks, Vision Transformers, and Generative Models to reconstruct primordial quantum fluctuations from CMB and large-scale structure data.",
    approach:
      "Three-phase methodology: baseline CMB analysis, physics-informed learning with embedded inflationary equations, and bispectrum analysis for non-Gaussian detection. Used hybrid neural architectures for cosmological parameter estimation.",
    challenges: [
      "Integrating complex physics equations into neural networks",
      "Handling high-dimensional cosmological data",
      "Ensuring scientific rigor in AI-physics hybrid models",
      "Validating results against established cosmological frameworks",
    ],
    results:
      "Successfully implemented PINN framework for cosmological analysis, targeting ΛCDM deviations with improved computational efficiency. Research documentation prepared for arXiv submission.",
    learnings:
      "Intersection of AI and theoretical physics, importance of physics constraints in neural network training, and challenges of scientific validation in AI research.",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Physics-Informed NNs (PINNs)",
      "Vision Transformers",
      "Cosmological Analysis",
      "Scientific Computing",
    ],
    metrics: {
      before: {
        "Traditional Solvers": "Slow",
        "Anomaly Detection": "Limited",
        Flexibility: "Low",
      },
      after: {
        "AI Framework": "Fast",
        "Deep Analysis": "Advanced",
        Adaptability: "High",
      },
    },
    githubUrl: "https://github.com/KhamessiTaha/PlanckDeep",
    featured: true,
    status: "Research Phase",
  },
  {
    id: 5,
    type: "case-study",
    title: "CCEditor",
    subtitle: "Real-time Collaborative Coding Platform",
    date: "2024-06-15",
    readTime: "10 min read",
    tags: ["React", "Firebase", "WebSocket", "CodeMirror", "Real-time"],
    problem:
      "Existing collaborative coding platforms lack seamless real-time synchronization and comprehensive features for educational environments. Many solutions have high latency, limited language support, or poor user experience for pair programming sessions.",
    solution:
      "Built a sophisticated real-time collaborative coding platform with multi-language syntax highlighting, intelligent code completion, and instant synchronization. Integrated advanced features like live cursor tracking and comprehensive chat functionality.",
    approach:
      "Leveraged React for component architecture, Firebase real-time database for synchronization, WebSocket optimization for minimal latency, and CodeMirror for advanced code editing features with customizable themes.",
    challenges: [
      "Implementing conflict resolution for simultaneous edits",
      "Optimizing real-time synchronization performance",
      "Managing user sessions and permissions",
      "Ensuring code integrity across multiple users",
    ],
    results:
      "Successfully deployed stable platform with sub-100ms synchronization latency. Currently used for pair programming sessions and educational purposes with positive user feedback.",
    learnings:
      "Real-time collaboration complexity, importance of conflict resolution algorithms, and user experience considerations for multi-user environments.",
    technologies: [
      "React",
      "Firebase",
      "WebSocket",
      "CodeMirror",
      "Real-time Sync",
      "PWA",
    ],
    metrics: {
      before: { Collaboration: "Async", Latency: "High", Features: "Basic" },
      after: {
        "Real-time": "Yes",
        Latency: "<100ms",
        "Full-featured": "Yes",
      },
    },
    projectUrl: "https://cceditor-e1b05.web.app/",
    githubUrl: "https://github.com/KhamessiTaha/CCE",
    featured: true,
    status: "Live Production",
  },
  {
    id: 6,
    type: "case-study",
    title: "ParticleSimulator",
    subtitle: "Advanced Physics Simulation Engine",
    date: "2024-05-20",
    readTime: "11 min read",
    tags: [
      "JavaScript",
      "Canvas API",
      "Physics Engine",
      "WebGL",
      "Simulation",
    ],
    problem:
      "Educational physics simulations are often oversimplified or require expensive software. Students and educators need accessible, interactive tools to visualize complex particle interactions and fluid dynamics principles.",
    solution:
      "Created an advanced real-time physics simulation engine modeling complex particle interactions including powder, liquid, gas, and solid states with realistic physical properties and thermodynamics.",
    approach:
      "Built with optimized JavaScript and Canvas API, implemented accurate collision detection, thermodynamics calculations, and pressure systems. Added customizable gravity and temperature controls for educational experimentation.",
    challenges: [
      "Optimizing performance for thousands of particles",
      "Implementing accurate physics calculations in JavaScript",
      "Creating intuitive user interactions",
      "Maintaining real-time performance across devices",
    ],
    results:
      "Successfully deployed interactive physics sandbox with realistic particle behaviors. Maintained 60fps performance with 5000+ particles and comprehensive physics interactions.",
    learnings:
      "Performance optimization for intensive calculations, physics simulation accuracy, and importance of educational accessibility in scientific tools.",
    technologies: [
      "JavaScript",
      "Canvas API",
      "Physics Engine",
      "Real-time Rendering",
      "WebGL",
    ],
    metrics: {
      before: {
        "Static Examples": "Yes",
        Interactivity: "Limited",
        Performance: "Poor",
      },
      after: {
        "Real-time Physics": "Yes",
        "Full Control": "Yes",
        "60fps": "5000+ particles",
      },
    },
    githubUrl: "https://github.com/KhamessiTaha/ParticleSimulator",
    featured: false,
    status: "Educational Tool",
  },
  {
    id: 7,
    type: "case-study",
    title: "HTRU2 Pulsar Detection",
    subtitle: "Machine Learning Research in Radio Astronomy",
    date: "2024-04-30",
    readTime: "16 min read",
    tags: [
      "Python",
      "Machine Learning",
      "Research",
      "SVM",
      "SHAP",
      "Astronomy",
    ],
    problem:
      "Manual classification of pulsar candidates in radio astronomy data is extremely time-consuming and prone to human error. Traditional methods require extensive expert review, creating bottlenecks in astronomical research workflows.",
    solution:
      "Developed a comprehensive ML pipeline benchmarking 10 algorithms with advanced class imbalance handling and SHAP explainable AI for pulsar classification in HTRU2 dataset, achieving state-of-the-art performance.",
    approach:
      "Implemented end-to-end pipeline with feature engineering, class imbalance techniques, hyperparameter optimization, and explainable AI. Used SVM optimization with scientific validation and statistical analysis.",
    challenges: [
      "Handling severe class imbalance in astronomical data",
      "Ensuring scientific interpretability of ML models",
      "Achieving high precision for rare pulsar signals",
      "Validating results with domain experts",
    ],
    results:
      "Achieved state-of-the-art performance with ROC AUC: 0.9708, identified excess kurtosis as most discriminative feature, and reduced manual review by 90%. Research ready for arXiv submission.",
    learnings:
      "Importance of domain knowledge in feature selection, class imbalance strategies for scientific data, and explainable AI requirements for research applications.",
    technologies: [
      "Python",
      "Scikit-learn",
      "SHAP",
      "Pandas",
      "NumPy",
      "SVM Optimization",
      "Statistical Analysis",
      "Research Documentation",
    ],
    metrics: {
      before: {
        "Manual Review": "100%",
        Accuracy: "Variable",
        Efficiency: "Low",
      },
      after: {
        Automated: "90%",
        "ROC AUC": "0.9708",
        "Review Time": "10x faster",
      },
    },
    githubUrl: "https://github.com/KhamessiTaha/HRTU2-Pulsar-Detection",
    featured: false,
    status: "Research Complete",
  },
  {
    id: 8,
    type: "case-study",
    title: "ALPR System",
    subtitle: "Automatic License Plate Recognition",
    date: "2024-03-25",
    readTime: "9 min read",
    tags: ["OpenCV", "TensorFlow", "Computer Vision", "YOLO", "OCR"],
    problem:
      "Traditional license plate recognition systems struggle with varying lighting conditions, multiple plate formats, and real-time processing requirements for traffic monitoring applications.",
    solution:
      "Developed comprehensive ALPR system combining YOLO object detection for plate localization with custom OCR models for character recognition, featuring advanced preprocessing and multi-angle detection.",
    approach:
      "Implemented YOLO for accurate plate detection, custom OCR with TensorFlow for character recognition, OpenCV for image preprocessing including noise reduction and perspective correction.",
    challenges: [
      "Handling diverse lighting conditions",
      "Supporting multiple plate formats",
      "Optimizing for real-time processing",
      "Maintaining accuracy across different camera angles and distances",
    ],
    results:
      "Achieved high accuracy across various conditions with real-time processing capabilities. Successfully deployed for traffic monitoring with batch processing support.",
    learnings:
      "Importance of robust preprocessing in computer vision, combining multiple detection approaches, and optimization strategies for real-time applications.",
    technologies: [
      "OpenCV",
      "TensorFlow",
      "Python",
      "Computer Vision",
      "Neural Networks",
      "YOLO",
    ],
    metrics: {
      before: {
        "Format Support": "Limited",
        Lighting: "Poor",
        Speed: "Slow",
      },
      after: {
        "Multi-format": "Yes",
        "All Conditions": "Robust",
        "Real-time": "Optimized",
      },
    },
    githubUrl: "https://github.com/KhamessiTaha/ALPR",
    featured: false,
    status: "Deployed",
  },
  {
    id: 9,
    type: "case-study",
    title: "PetMatch",
    subtitle: "Intelligent Pet Adoption Platform",
    date: "2024-02-28",
    readTime: "8 min read",
    tags: ["Angular", "PHP", "Node.js", "MySQL", "Matching Algorithms"],
    problem:
      "Traditional pet adoption processes are inefficient and often result in mismatched adoptions, leading to high return rates and poor outcomes for both pets and families. Manual matching is time-consuming and subjective.",
    solution:
      "Created comprehensive pet adoption platform with sophisticated matching algorithms analyzing personality traits, lifestyle preferences, living situations, and care capabilities for optimal human-pet partnerships.",
    approach:
      "Built with Angular for modern frontend, PHP/Node.js hybrid backend architecture, MySQL for data management, and custom matching algorithms for compatibility analysis.",
    challenges: [
      "Developing accurate matching algorithms",
      "Creating comprehensive user and pet profiles",
      "Integrating with shelter management systems",
      "Ensuring scalable architecture for multiple organizations",
    ],
    results:
      "Successfully implemented intelligent matching system with comprehensive adoption workflow management and integrated communication tools for shelters and adopters.",
    learnings:
      "Complex algorithm development for matching systems, importance of user experience in sensitive adoption processes, and scalable architecture for multi-tenant applications.",
    technologies: [
      "Angular",
      "PHP",
      "Node.js",
      "MySQL",
      "Matching Algorithms",
      "REST APIs",
    ],
    metrics: {
      before: {
        "Manual Matching": "Yes",
        "Success Rate": "Variable",
        Efficiency: "Low",
      },
      after: {
        "AI Matching": "Yes",
        "Optimized Pairs": "High",
        Automated: "Streamlined",
      },
    },
    githubUrl: "https://github.com/KhamessiTaha/MiniProjeWeb",
    featured: false,
    status: "Production Ready",
  },
  {
    id: 10,
    type: "blog",
    title: "Building Award-Winning Space Applications",
    subtitle: "Lessons from NASA Space Apps Challenge",
    date: "2024-11-15",
    readTime: "8 min read",
    tags: ["NASA", "Space Technology", "Competition", "Innovation"],
    summary:
      "Insights and lessons learned from developing CosmicVue, the Global Finalist project in NASA's International Space Apps Challenge 2024, covering technical decisions, team collaboration, and innovation strategies.",
    keyPoints: [
      "Choosing the right visualization technologies for space data",
      "Integrating real-time NASA APIs effectively",
      "Performance optimization for complex 3D astronomical scenes",
      "Team collaboration strategies for hackathon success",
      "Scientific accuracy vs. user experience balance",
    ],
  },
  {
    id: 11,
    type: "blog",
    title: "Physics-Informed Neural Networks in Practice",
    subtitle: "Bridging AI and Scientific Computing",
    date: "2024-10-20",
    readTime: "12 min read",
    tags: ["PINNs", "Scientific Computing", "Deep Learning", "Physics"],
    summary:
      "Deep dive into implementing Physics-Informed Neural Networks for cosmological research, exploring the challenges and opportunities of combining domain knowledge with deep learning architectures.",
    keyPoints: [
      "Understanding the theoretical foundations of PINNs",
      "Implementing physics constraints in neural network training",
      "Challenges in scientific validation of AI models",
      "Performance comparison with traditional solvers",
      "Future directions for AI in scientific research",
    ],
  },
  {
    id: 12,
    type: "blog",
    title: "Real-time Collaboration Architecture",
    subtitle: "Building Scalable Multi-user Applications",
    date: "2024-09-10",
    readTime: "10 min read",
    tags: ["WebSocket", "Real-time", "Architecture", "Collaboration"],
    summary:
      "Technical insights from building CCEditor and EternaVerseApp, exploring different approaches to real-time collaboration, conflict resolution, and performance optimization strategies.",
    keyPoints: [
      "Choosing between WebSocket and Firebase for real-time sync",
      "Implementing operational transformation for conflict resolution",
      "Performance optimization for multi-user environments",
      "State management in collaborative applications",
      "User experience considerations for real-time features",
    ],
  },
];

export default metadata;