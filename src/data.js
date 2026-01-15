export const clubsData = [
  {
    id: "aero",
    name: "Aeromodeling Club",
    description:
      "The Aeromodelling Club at IIT Kanpur, established in 2003, has been at the forefront of this innovation, creating new conceptual aircraft and setting global benchmarks, especially in SAE Aero. The club's summer projects provide students the opportunity to turn their ideas into working models. In 2018,students developed a composite aircraft for DRDO under expert guidance, further pushing the boundaries of aeromodelling.",
    logo: "/aeroIcon.png",
    projectCount: 9,
  },

  {
    name: "Astronomy Club",
    description:
      "Astronomy Club, IIT Kanpur, founded in 1975, is a vibrant community open to all curious minds across disciplines. The club offers diverse activities and advanced resources to explore the universe, making it a place where curiosity and science come together to unravel cosmic mysteries.",
    logo: "/astroIcon.png",
    projectCount: 8,
    id: "astro",
  },
  {
    name: "Brain and Cognitive Science Club",
    description:
      "Brain and Cognitive Science Club, IIT Kanpur engages members with monthly journal discussions, expert talks, and hands-on workshops. The club supports diverse semester projects—from replicating studies to exploring new ideas—fostering learning, curiosity, and research skills across all levels.",
    logo: "/bcsIcon.png",
    projectCount: 12,
    id: "bcs",
  },
  {
    name: "Electronics Club",
    description:
      "Electronics Club, IIT Kanpur is a student-driven community passionate about electronics and technology. The club offers hands-on projects, workshops, and competitions, welcoming beginners and experts alike to learn, innovate, and collaborate.",
    logo: "/electroIcon.png",
    projectCount: 6,
    id: "electronics",
  },
  {
    name: "Finance and Analytics Club",
    description:
      "Finace and Analytics Club , IIT Kanpur ever since its formation in 2020 ,has been aiming to prepare IITK for corporate & research-based financial problems grounded in quantitative & visualization methods.",
    logo: "/facIcon.png",
    projectCount: 10,
    id: "fac",
  },
  {
    name: "Game Development Club",
    description:
      "Game Development Club, IIT Kanpur is a lively community passionate about creating games. The club hosts bootcamps, summer and winter projects, and competes in national events like Inter-IIT Tech Meet and game jams, providing a supportive space for both beginners and experienced developers to learn and innovate",
    logo: "/gameIcon.png",
    projectCount: 5,
    id: "gdc",
  },
  {
    name: "Programming Club",
    description:
      "Programming Club is a community of IITK students who are highly enthusiastic about development, algorithms, security, ML, and all other aspects of programming.",
    logo: "/pclubIcon.png",
    projectCount: 12,
    id: "programming",
  },
  {
    name: "Robotics Club",
    description:
      "Robotics Club, IIT Kanpur, brings together students passionate about designing, building, and programming robots. Offering workshops, mentorship, and access to tools, the club supports members of all levels in exploring mechanical design, electronics, and coding through projects and competitions.",
    logo: "/roboIcon.png",
    projectCount: 8,
    id: "robo",
  },

  // Societies Projects
  {
    name: "DesCon Society",
    description:
      "Design and Construction Society (DesCon), IIT Kanpur explores emerging tech in design and construction from 3D modeling and structural simulations to immersive VR and 3D-printed homes. Through hands-on projects, DesCon blends creativity with technology, pushing the boundaries of modern construction and innovation.",
    logo: "/desconIcon.png",
    projectCount: 8,
    id: "desCon",
  },
  {
    name: "IITK Consulting Group",
    description:
      "IIT Kanpur Consulting Group (ICG), established in 2018, tackles real-world challenges through data-driven ML, AI, and strategic consulting. Collaborating with social and government bodies, ICG works across sectors like healthcare, agriculture, and education, while also addressing campus-level issues. Guided by faculty and mentored by top consulting alumni, the group blends innovation with impact to drive meaningful change.",
    logo: "/consultIcon.png",
    projectCount: 8,
    id: "consult",
  },
  {
    name: "SciMathSoc",
    description:
      "SciMathSoc, IIT Kanpur is a student-led initiative that blends science and math through discussions, competitions, and hands-on projects. Inspired by The Old Science Coffee House, the society fosters curiosity, creative problem-solving, and a love for deep ideas—welcoming everyone from passionate mathematicians to curious minds.",
    logo: "sciSocIcon.png",
    projectCount: 8,
    id: "sciSoc",
  },
];

export const projectsData = [
  {
    title: "Autonomous Drone Navigation",
    club: "Robotics Club",
    description:
      "Build an AI-powered drone that can navigate using computer vision and machine learning algorithms.",
    duration: "8 weeks",
    difficulty: "advanced",
    tags: ["Python", "OpenCV", "Machine Learning", "ROS"],
    mentor1: "Dr. Rajesh Kumar",
    contact1: "98XXXXXXXX",
    mentor2: "Dr. Rajkumar war",
    contact2: "98XXXXXXXX",
    mentor3: "Dr. Alex stokesss",
    contact3: "98XXXXXXXX",

    objectives: [
      "Understand the basics of drone mechanics and flight control",
      "Integrate sensors for obstacle detection",
      "Implement real-time computer vision-based navigation",
      "Train machine learning models for autonomous decisions",
      "Deploy code on onboard systems",
    ],
    weekwiseExecution: [
      {
        week: "Week 1",
        plan: "Introduction to drone architecture and control systems.",
        resources: [
          "https://dronetutorials.com/architecture",
          "https://youtube.com/intro-to-drones",
        ],
      },
      {
        week: "Week 2",
        plan: "Sensor integration and calibration (e.g., LiDAR, IMU).",
        resources: [
          "https://docs.arduino.cc/built-in-examples",
          "https://medium.com/sensor-calibration",
        ],
      },
      {
        week: "Week 3",
        plan: "Setting up onboard computing environment and ROS basics.",
        resources: [
          "https://wiki.ros.org/",
          "https://github.com/ros/ros_tutorials",
        ],
      },
      {
        week: "Week 4",
        plan: "Implementing basic object detection using OpenCV.",
        resources: [
          "https://docs.opencv.org/",
          "https://opencv-tutorial.readthedocs.io/",
        ],
      },
      {
        week: "Week 5",
        plan: "Integrating vision with control for obstacle avoidance.",
        resources: [
          "https://arxiv.org/abs/vision-nav-control",
          "https://youtube.com/integrated-drone-control",
        ],
      },
      {
        week: "Week 6",
        plan: "Training ML models for autonomous flight decisions.",
        resources: ["https://scikit-learn.org/", "https://keras.io/guides/"],
      },
      {
        week: "Week 7",
        plan: "Testing and debugging in simulated environments.",
        resources: [
          "https://gazebosim.org/",
          "https://github.com/ros-simulation/gazebo_ros_pkgs",
        ],
      },
      {
        week: "Week 8",
        plan: "Final integration and real-world testing.",
        resources: [
          "https://realflight.com/",
          "https://dronetestingchecklist.com/",
        ],
      },
    ],
    methodology:
      "This project combines robotics, computer vision, and machine learning. The drone is equipped with sensors and a camera. It processes visual input using OpenCV and makes navigation decisions based on trained models. The Robot Operating System (ROS) is used for real-time control and data management.",
    result: {
      summary:
        "Successfully created a prototype of an autonomous drone that can avoid obstacles and navigate indoors.",
      githubRepo: "https://github.com/user/drone-project",
      demoLink: "https://youtu.be/drone-demo-video",
      images: [
        "https://domain.com/uploads/drone1.jpg",
        "https://domain.com/uploads/drone2.jpg",
      ],
    },
    coverImage:
      "https://scitechdaily.com/images/Drone-Over-Disaster-Area-777x518.jpg",
    futureProspects:
      "This project lays the groundwork for fully autonomous UAV systems in environments like warehouses, disaster zones, and precision agriculture. Future work can involve swarm coordination, real-time cloud communication, and deployment in GPS-denied areas.",
  },
  {
    title: "E-commerce Platform",
    club: "Programming Club",
    description:
      "Build a full-stack e-commerce platform with payment integration, user authentication, and inventory management.",
    duration: "10 weeks",
    difficulty: "intermediate",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    mentor: "Prof. Anita Sharma",
  },
  {
    title: "Quantum Computing Simulator",
    club: "BCS Club",
    description:
      "Create a quantum computing simulator to understand quantum algorithms and their applications.",
    duration: "12 weeks",
    difficulty: "advanced",
    tags: ["Python", "Quantum Computing", "Linear Algebra", "Qiskit"],
    mentor: "Dr. Vikram Singh",
  },
  {
    title: "IoT Home Automation",
    club: "Electronics Club",
    description:
      "Design and implement a smart home system using IoT devices and mobile app control.",
    duration: "6 weeks",
    difficulty: "beginner",
    tags: ["Arduino", "IoT", "Mobile App", "Sensors"],
    mentor: "Prof. Priya Gupta",
  },
  {
    title: "Weather Prediction System",
    club: "Aero Club",
    description:
      "Develop a machine learning model to predict weather patterns using atmospheric data.",
    duration: "8 weeks",
    difficulty: "intermediate",
    tags: ["Python", "Machine Learning", "Data Analysis", "Meteorology"],
    mentor: "Dr. Suresh Patel",
  },
  {
    title: "Social Media Analytics",
    club: "Web Development",
    description:
      "Create a web application that analyzes social media trends and user behavior patterns.",
    duration: "9 weeks",
    difficulty: "intermediate",
    tags: ["React", "Python", "Data Visualization", "APIs"],
    mentor: "Prof. Kavya Reddy",
  },
];
