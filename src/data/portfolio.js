/**
 * Centralized Portfolio Data Configuration
 * 
 * Instructions:
 * Replace any placeholder values (e.g. "[YOUR FULL NAME]", "[Your University Name]", etc.)
 * with your actual details. Links that remain empty or placeholders will gracefully
 * show inactive/placeholder states without breaking the UI.
 */

export const personalData = {
  name: "Santosh Kumar Panda",
  initials: "SP",
  title: "Aspiring Full Stack Developer",
  educationDegree: "B.Tech CSE (Artificial Intelligence & Machine Learning)",
  currentYear: "Second Year",
  location: "India",
  status: "Currently learning, building, and experimenting.",
  availability: "Open to collaborative projects & discussions",
  // Attach your photo here: place an image file (e.g. photo.jpg) in the 'public' folder and set avatarUrl: "/photo.jpg"
  // or use an external URL. If left empty, an artistic dark tech avatar will be displayed automatically.
  avatarUrl: "https://gietuerp.in/Student/GetStudentImage?rollno=25CSEAIML085",
  
  hero: {
    badge: "PORTFOLIO / 2026",
    headlineLine1: "Curious by nature.",
    headlineLine2: "Building with purpose.",
    intro: "I'm a Computer Science student exploring software development, modern web experiences, and artificial intelligence.",
    primaryCta: "Explore My Work",
    secondaryCta: "Let's Connect",
  },

  about: {
    heading: "A little about me.",
    narrative: [
      "I'm a curious developer who enjoys building thoughtful digital experiences, exploring modern web technologies, and discovering practical applications of artificial intelligence. I believe in learning by building and turning ideas into meaningful projects.",
      "Currently in my second year of Computer Science and Engineering with a focus on AI & ML, I divide my time between mastering core computer science foundations and experimenting with the modern web stack. My focus is on creating clean, intuitive interfaces powered by dependable architectures.",
      "Whether it's designing clean user flows, writing backend APIs, or unpacking machine learning models, I approach every challenge with curiosity, attention to detail, and a commitment to writing readable, maintainable code."
    ],
    highlights: [
      { label: "Degree", value: "B.Tech in Computer Science & Engineering" },
      { label: "Specialization", value: "Artificial Intelligence & Machine Learning" },
      { label: "Academic Stage", value: "Second Year Undergraduate" },
      { label: "Location", value: "India" },
      { label: "Current Focus", value: "Full-Stack Development & AI Integration" },
      { label: "Philosophy", value: "Learn by building, question by experimenting" },
    ],
    interests: [
      "Building useful web applications",
      "Learning frontend and backend development",
      "Understanding databases and APIs",
      "Exploring artificial intelligence and machine learning",
      "Turning ideas into practical projects"
    ]
  },

  skills: {
    heading: "Technical skills and creative thinking.",
    subtitle: "A structured overview of the tools, languages, and technologies I work with as I build and learn.",
    groups: [
      {
        id: "frontend",
        number: "01",
        category: "FRONTEND",
        description: "Crafting structured, responsive, and accessible user interfaces with clean components and styling.",
        technologies: [
          { name: "HTML5", highlight: true },
          { name: "CSS3", highlight: true },
          { name: "JavaScript", highlight: true },
          { name: "React", highlight: true },
          { name: "Bootstrap", highlight: false }
        ]
      },
      {
        id: "backend",
        number: "02",
        category: "BACKEND",
        description: "Developing lightweight REST APIs, managing request pipelines, and connecting server logic.",
        technologies: [
          { name: "Node.js", highlight: true },
          { name: "Express.js", highlight: true }
        ]
      },
      {
        id: "database",
        number: "03",
        category: "DATABASE",
        description: "Structuring relational schemas, writing queries, and managing persistent data storage.",
        technologies: [
          { name: "MySQL", highlight: true }
        ]
      },
      {
        id: "ai-prog",
        number: "04",
        category: "PROGRAMMING & AI",
        description: "Core algorithms, logical problem-solving, and foundational machine learning principles.",
        technologies: [
          { name: "Python", highlight: true },
          { name: "AI/ML Fundamentals", highlight: true }
        ]
      }
    ]
  },

  projects: {
    heading: "Selected work.",
    subtitle: "A collection of projects through which I explore ideas, develop my skills, and learn by building.",
    items: [
      {
        id: "nexus-erp",
        number: "01",
        title: "Nexus ERP",
        category: "Student Management System",
        tagline: "Academic Portal & Resource Hub",
        description: "A student-focused ERP application designed to organize academic information and provide access to attendance, marks, fees, timetables, and notices.",
        technologies: ["React", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MySQL"],
        featured: true,
        status: "Active Project",
        links: {
          github: "https://github.com/pandasantoshkumar2005-lab/Student-ERP-Project-React", // Add GitHub URL when ready e.g., "https://github.com/..."
          live: "",   // Add Live URL when ready e.g., "https://..."
        },
        previewType: "erp-dashboard",
      },
      {
        id: "weather-forecasting Website",
        number: "02",
        title: "Weather Forecasting Website",
        category: "Web Application",
        tagline: "Real-Time Meteorological Interface",
        description: "A responsive weather application that displays current weather information and forecasts through an external weather API.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Weather API"],
        featured: false,
        status: "Completed",
        links: {
          github: "https://github.com/pandasantoshkumar2005-lab/weather-project",
          live: "",
        },
        previewType: "weather-widget",
      },
      {
        id: "nexacart",
        number: "03",
        title: "Nexacart",
        category: "Web Developement",
        tagline: "Smart Online Shopping Platform",
        description:"NexaCart is a modern e-commerce platform designed to deliver a seamless online shopping experience. Discover products across multiple categories, explore personalized recommendations, manage shopping carts, save favorites, and track orders through an intuitive and responsive interface.",

        technologies: ["React","JavaScript","Node.js","Express.js","MySQL","Bootstrap"],

        featured: true,
        status: "In Development",
        isExploring: false,
        links: {
          github: "",
          live: "",
        },
        previewType: "ecommerce",
      }
    ]
  },

  education: {
    heading: "Academic foundations.",
    subtitle: "How structured coursework informs my engineering practice and analytical thinking.",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "[Your University / College Name]",
    academicYear: "Second Year (2024 – 2028)",
    location: "India",
    narrative: "My academic curriculum provides a rigorous theoretical backbone—spanning algorithmic problem solving, computational complexity, relational databases, and mathematical foundations for machine learning. This formal knowledge grounds my personal projects in sound architectural principles and disciplined engineering.",
    coreAreas: [
      { title: "Data Structures & Algorithms", desc: "Foundational problem solving, complexity analysis, and efficient code structures." },
      { title: "Object-Oriented Programming", desc: "Design modularity, abstractions, inheritance, and maintainable software patterns." },
      { title: "Database Management Systems", desc: "Relational modeling, normalization, indexing, and SQL transaction integrity." },
      { title: "Mathematics for Machine Learning", desc: "Linear algebra, probability, discrete structures, and multivariate calculus." },
      { title: "AI & Knowledge Systems", desc: "Search algorithms, heuristic strategies, and introductory neural architectures." }
    ]
  },

  journey: {
    heading: "Milestones that reflect my learning journey.",
    subtitle: "An authentic timeline of skills acquired, architectures explored, and ongoing engineering milestones.",
    milestones: [
      {
        step: "01",
        title: "Core Web Foundations & Semantic Markup",
        focus: "HTML5, CSS3 & Responsive Design",
        description: "Began by understanding DOM mechanics, responsive mobile-first layouts, and accessible semantic structures for modern browsers."
      },
      {
        step: "02",
        title: "Interactive Programming & Modern JavaScript",
        focus: "ES6+, Asynchronous JS & APIs",
        description: "Deepened command of JavaScript—event handling, promises, async/await, and integrating dynamic REST APIs into web clients."
      },
      {
        step: "03",
        title: "Component-Driven Architecture with React",
        focus: "React & State Management",
        description: "Transitioned to building scalable, single-page user interfaces with React, reusable functional components, and modular styling."
      },
      {
        step: "04",
        title: "Server-Side Development with Node.js & Express",
        focus: "Node.js, Express & REST Services",
        description: "Stepped into backend development: authoring RESTful endpoints, managing middleware, routing, and handling HTTP requests."
      },
      {
        step: "05",
        title: "Relational Data Modeling with MySQL",
        focus: "MySQL, Schema Design & CRUD Operations",
        description: "Integrated persistent storage into applications, designing relational databases, foreign keys, and performant SQL queries."
      },
      {
        step: "06",
        title: "Artificial Intelligence & Machine Learning",
        focus: "Python, Statistical Learning & Model Concepts",
        description: "Currently exploring Python for data processing, foundational ML algorithms, and practical applications combining web interfaces with intelligent systems."
      }
    ]
  },

  contact: {
    heading: "Let's connect.",
    subtitle: "Have an interesting idea, a project to discuss, or an opportunity to collaborate? I'd be happy to connect.",
    email: "your.email@example.com", // Replace with your real email
    github: "https://github.com/[your-username]", // Replace with your GitHub profile
    linkedin: "https://linkedin.com/in/[your-username]", // Replace with your LinkedIn profile
    location: "India",
    note: "Feel free to reach out via email or connect through my profiles below."
  },

  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ]
};
