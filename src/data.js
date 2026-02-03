
export const clubsData = [
  {
    name: "Aeromodeling Club",
    description: "Aeromodelling Club, IIT Kanpur has been innovating new concept planes since 2003 and ever since then there was no turning back, with time the projects have improved, new conceptual airplanes have been made here and it has set its own benchmark at the world level (especially at SAE Aero). Summer project provides the first step to students to convert their innovations, their new ideas and their imaginations into reality, a working model. Similar work has been done this year, many new planes have been made and tested effectively.",
    icon: "🌐",
    projectCount: 9,
    id: "aero"
  },
   {
    name: "Astronomy Club",
    description: "Build autonomous robots and explore the fascinating world of robotics and automation.",
    icon: "🤖",
    projectCount: 8,
    id: "astro"
  },
  {
    name: "Brain and Cognitive Science Club",
    description: "The Brain & Cognitive Science Club (BCS IITK) is a student led community dedicated to explore the intersection of machine learning and neuroscience. Our work spans over a vast range of domains - from Computer Vision and Natural Language Processing to Neuroimaging, Brain mapping, Spiking Neural Networks and Brain-computer interfaces (BCIs). We also have an EEG device and an eye tracker using which we have built various interesting projects.",
    icon: "💻",
    projectCount: 12,
    id: "bcs"
  },
  {
    name: "Electronics Club",
    description: "Dive into theoretical computer science, algorithms, and computational complexity.",
    icon: "🧮",
    projectCount: 6,
    id: "electronics"
  },
  {
    name: "Finance and Analytics Club",
    description: "Design circuits, work with microcontrollers, and create innovative electronic systems.",
    icon: "⚡",
    projectCount: 10,
    id: "fac"
  },
  {
    name: "Game Development Club",
    description: "Explore aerospace engineering through UAV design and aerodynamics research.",
    icon: "✈️",
    projectCount: 5,
    id: "gdc"
  },
  {
     name: "Programming Club",
    description: "Master programming languages and develop software solutions for real-world problems.",
    icon: "💻",
    projectCount: 12,
    id: "programming"
  },
  {
     name: "Robotics Club",
    description: "Build autonomous robots and explore the fascinating world of robotics and automation.",
    icon: "🤖",
    projectCount: 8,
    id: "robo" 
  }
  
  
];






export const projectsData = [
  {
    title: "Autonomous Drone Navigation",
    club: "Robotics Club",
    description: "Build an AI-powered drone that can navigate using computer vision and machine learning algorithms.",
    duration: "8 weeks",
    difficulty: "advanced",
    tags: ["Python", "OpenCV", "Machine Learning", "ROS"],
    mentor1: "Dr. Rajesh Kumar",
    contact1:"98XXXXXXXX",
    mentor2: "Dr. Alex Johnson",
    contact2:"98XXXXXXXX",
    mentor3: "Dr. Alex stokesss",
    contact3:"98XXXXXXXX",
    
    
    objectives: [
      "Understand the basics of drone mechanics and flight control",
      "Integrate sensors for obstacle detection",
      "Implement real-time computer vision-based navigation",
      "Train machine learning models for autonomous decisions",
      "Deploy code on onboard systems"
    ],
    weekwiseExecution: [
      {
        week: "Week 1",
        plan: "Introduction to drone architecture and control systems.",
        resources: [
          "https://dronetutorials.com/architecture",
          "https://youtube.com/intro-to-drones"
        ]
      },
      {
        week: "Week 2",
        plan: "Sensor integration and calibration (e.g., LiDAR, IMU).",
        resources: [
          "https://docs.arduino.cc/built-in-examples",
          "https://medium.com/sensor-calibration"
        ]
      },
      {
        week: "Week 3",
        plan: "Setting up onboard computing environment and ROS basics.",
        resources: [
          "https://wiki.ros.org/",
          "https://github.com/ros/ros_tutorials"
        ]
      },
      {
        week: "Week 4",
        plan: "Implementing basic object detection using OpenCV.",
        resources: [
          "https://docs.opencv.org/",
          "https://opencv-tutorial.readthedocs.io/"
        ]
      },
      {
        week: "Week 5",
        plan: "Integrating vision with control for obstacle avoidance.",
        resources: [
          "https://arxiv.org/abs/vision-nav-control",
          "https://youtube.com/integrated-drone-control"
        ]
      },
      {
        week: "Week 6",
        plan: "Training ML models for autonomous flight decisions.",
        resources: [
          "https://scikit-learn.org/",
          "https://keras.io/guides/"
        ]
      },
      {
        week: "Week 7",
        plan: "Testing and debugging in simulated environments.",
        resources: [
          "https://gazebosim.org/",
          "https://github.com/ros-simulation/gazebo_ros_pkgs"
        ]
      },
      {
        week: "Week 8",
        plan: "Final integration and real-world testing.",
        resources: [
          "https://realflight.com/",
          "https://dronetestingchecklist.com/"
        ]
      }
    ],
    methodology: "This project combines robotics, computer vision, and machine learning. The drone is equipped with sensors and a camera. It processes visual input using OpenCV and makes navigation decisions based on trained models. The Robot Operating System (ROS) is used for real-time control and data management.",
    result: {
      summary: "Successfully created a prototype of an autonomous drone that can avoid obstacles and navigate indoors.",
      githubRepo: "https://github.com/user/drone-project",
      demoLink: "https://youtu.be/drone-demo-video",
      images: [
        "https://domain.com/uploads/drone1.jpg",
        "https://domain.com/uploads/drone2.jpg"
      ]
    },
    coverImage: "https://scitechdaily.com/images/Drone-Over-Disaster-Area-777x518.jpg",
    futureProspects: "This project lays the groundwork for fully autonomous UAV systems in environments like warehouses, disaster zones, and precision agriculture. Future work can involve swarm coordination, real-time cloud communication, and deployment in GPS-denied areas."
  },
  {
    title: "E-commerce Platform",
    club: "Programming Club",
    description: "Build a full-stack e-commerce platform with payment integration, user authentication, and inventory management.",
    duration: "10 weeks",
    difficulty: "intermediate",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    mentor: "Prof. Anita Sharma"
  },
  {
    title: "Quantum Computing Simulator",
    club: "BCS Club",
    description: "Create a quantum computing simulator to understand quantum algorithms and their applications.",
    duration: "12 weeks",
    difficulty: "advanced",
    tags: ["Python", "Quantum Computing", "Linear Algebra", "Qiskit"],
    mentor: "Dr. Vikram Singh"
  },
  {
    title: "IoT Home Automation",
    club: "Electronics Club",
    description: "Design and implement a smart home system using IoT devices and mobile app control.",
    duration: "6 weeks",
    difficulty: "beginner",
    tags: ["Arduino", "IoT", "Mobile App", "Sensors"],
    mentor: "Prof. Priya Gupta"
  },
  {
    title: "Weather Prediction System",
    club: "Aero Club",
    description: "Develop a machine learning model to predict weather patterns using atmospheric data.",
    duration: "8 weeks",
    difficulty: "intermediate",
    tags: ["Python", "Machine Learning", "Data Analysis", "Meteorology"],
    mentor: "Dr. Suresh Patel"
  },
  {
    title: "Social Media Analytics",
    club: "Web Development",
    description: "Create a web application that analyzes social media trends and user behavior patterns.",
    duration: "9 weeks",
    difficulty: "intermediate",
    tags: ["React", "Python", "Data Visualization", "APIs"],
    mentor: "Prof. Kavya Reddy"
  }
];