  export const commonRoadmaps = [
    {
      title: "FrontEnd Developer",
      description: "Learn HTML, CSS, JavaScript, and modern frameworks like React.",
      imageSrc: "/Front-End Dev.png",
      roadmap: {
        beginner: [
          {
            title: "HTML Basics",
            description: "Understand the structure of web pages.",
            content: ["Tags", "Elements", "Attributes"],
            prerequisites: [],
          },
          {
            title: "CSS Fundamentals",
            description: "Learn to style web pages.",
            content: ["Selectors", "Flexbox", "Grid"],
            prerequisites: ["HTML Basics"],
          },
        ],
        intermediate: [
          {
            title: "JavaScript Essentials",
            description: "Add interactivity to websites.",
            content: ["Variables", "DOM", "Events"],
            prerequisites: ["CSS Fundamentals"],
          },
        ],
        advanced: [
          {
            title: "React Framework",
            description: "Build dynamic user interfaces.",
            content: ["Components", "Hooks", "State Management"],
            prerequisites: ["JavaScript Essentials"],
          },
        ],
      },
    },
    {
      title: "BackEnd Developer",
      description: "Master servers, databases, and API design.",
      imageSrc: "/Back-end dev.png",
      roadmap: {
        beginner: [
          {
            title: "Node.js Basics",
            description: "Intro to Node and NPM.",
            content: ["NPM Init", "Basic Modules"],
            prerequisites: [],
          },
          {
            title: "Express.js",
            description: "Create your first web server.",
            content: ["Routing", "Middleware"],
            prerequisites: ["Node.js Basics"],
          },
        ],
        intermediate: [
          {
            title: "Databases",
            description: "Store and manage data.",
            content: ["MongoDB", "PostgreSQL"],
            prerequisites: ["Express.js"],
          },
        ],
        advanced: [
          {
            title: "Authentication & Security",
            description: "Secure your APIs.",
            content: ["JWT", "OAuth2"],
            prerequisites: ["Databases"],
          },
        ],
      },
    },
    {
      title: "FullStack Developer",
      description: "Combine front-end and back-end skills.",
      imageSrc: "/Full-Stack dev.png",
      roadmap: {
        beginner: [
          {
            title: "HTML, CSS, JS",
            description: "Core web development trio.",
            content: ["HTML", "CSS", "JS Basics"],
            prerequisites: [],
          },
        ],
        intermediate: [
          {
            title: "Back-End Setup",
            description: "Servers & Databases.",
            content: ["Express", "MongoDB"],
            prerequisites: ["HTML, CSS, JS"],
          },
        ],
        advanced: [
          {
            title: "Deployment & DevOps",
            description: "Deploy full-stack apps.",
            content: ["CI/CD", "Cloud Providers"],
            prerequisites: ["Back-End Setup"],
          },
        ],
      },
    },
    {
      title: "Data Scientist",
      description: "Dive into data analysis and ML.",
      imageSrc: "/Data scientist.png",
      roadmap: {
        beginner: [
          {
            title: "Python Basics",
            description: "Learn Python syntax.",
            content: ["Variables", "Loops"],
            prerequisites: [],
          },
        ],
        intermediate: [
          {
            title: "Data Analysis",
            description: "Work with Pandas and NumPy.",
            content: ["Pandas", "NumPy"],
            prerequisites: ["Python Basics"],
          },
        ],
        advanced: [
          {
            title: "Machine Learning",
            description: "Build predictive models.",
            content: ["scikit-learn", "TensorFlow"],
            prerequisites: ["Data Analysis"],
          },
        ],
      },
    },
    {
      title: "DevOps Engineer",
      description: "Automate, deploy, monitor apps.",
      imageSrc: "/Dev-Ops.png",
      roadmap: {
        beginner: [
          {
            title: "Linux & Shell",
            description: "Basics of Linux OS.",
            content: ["CLI", "Shell Scripts"],
            prerequisites: [],
          },
        ],
        intermediate: [
          {
            title: "CI/CD Pipelines",
            description: "Automate your deployments.",
            content: ["GitHub Actions", "Jenkins"],
            prerequisites: ["Linux & Shell"],
          },
        ],
        advanced: [
          {
            title: "Containers & Orchestration",
            description: "Run scalable apps.",
            content: ["Docker", "Kubernetes"],
            prerequisites: ["CI/CD Pipelines"],
          },
        ],
      },
    },
    {
      title: "Mobile Developer",
      description: "Build native & cross-platform apps.",
      imageSrc: "/mobile dev.png",
      roadmap: {
        beginner: [
          {
            title: "JavaScript & ES6",
            description: "Modern JS for mobile frameworks.",
            content: ["ES6 Syntax", "Modules"],
            prerequisites: [],
          },
        ],
        intermediate: [
          {
            title: "React Native",
            description: "Build cross-platform apps.",
            content: ["Components", "Navigation"],
            prerequisites: ["JavaScript & ES6"],
          },
        ],
        advanced: [
          {
            title: "Native Modules",
            description: "Bridge native code when needed.",
            content: ["iOS & Android Modules"],
            prerequisites: ["React Native"],
          },
        ],
      },
    },
  ];
