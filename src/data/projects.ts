export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  role: string;
  outcomes: string[];
  featured: boolean;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'other';
}

export const projects: Project[] = [
  {
    id: "cloud-platform",
    title: "Cloud-Native Platform",
    description: "Scalable microservices platform handling millions of daily transactions with high availability and fault tolerance.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    technologies: ["Go", "Kubernetes", "gRPC", "PostgreSQL", "Redis", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/sarahchen/cloud-platform",
    problem: "Legacy monolithic system couldn't scale to handle growing user base and was difficult to maintain.",
    solution: "Designed and implemented a microservices architecture using Go and Kubernetes, with comprehensive monitoring and auto-scaling.",
    role: "Lead Architect and Developer responsible for system design, implementation, and team coordination.",
    outcomes: [
      "Successfully handles 2M+ daily users with 99.99% uptime",
      "Reduced deployment time from hours to minutes",
      "40% reduction in infrastructure costs",
      "Improved system reliability and maintainability"
    ],
    featured: true,
    category: "backend"
  },
  {
    id: "realtime-analytics",
    title: "Real-time Analytics Dashboard",
    description: "High-performance analytics platform processing 500K events per second with real-time visualization.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    technologies: ["TypeScript", "React", "WebSocket", "Node.js", "Redis", "ClickHouse"],
    demoUrl: "https://analytics-demo.example.com",
    githubUrl: "https://github.com/sarahchen/realtime-analytics",
    problem: "Existing analytics solution couldn't handle real-time data processing and visualization requirements.",
    solution: "Built a streaming analytics platform using WebSocket for real-time updates and ClickHouse for fast data processing.",
    role: "Full-stack Developer leading both frontend and backend implementation.",
    outcomes: [
      "Processes 500K events/second with sub-second latency",
      "Reduced data processing time by 80%",
      "Improved decision-making with real-time insights",
      "95% user satisfaction rate"
    ],
    featured: true,
    category: "fullstack"
  },
  {
    id: "kubernetes-operator",
    title: "Custom Kubernetes Operator",
    description: "Automated deployment and management of complex applications in Kubernetes clusters.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    technologies: ["Go", "Kubernetes", "Operator SDK", "Custom Resources", "YAML"],
    githubUrl: "https://github.com/sarahchen/k8s-operator",
    problem: "Manual deployment and management of applications in Kubernetes was error-prone and time-consuming.",
    solution: "Developed a custom Kubernetes operator to automate application lifecycle management.",
    role: "Lead Developer responsible for operator design and implementation.",
    outcomes: [
      "Reduced deployment errors by 90%",
      "Automated recovery from common failure scenarios",
      "Simplified application management",
      "Adopted by 50+ organizations"
    ],
    featured: true,
    category: "backend"
  },
  {
    id: "distributed-cache",
    title: "Distributed Caching System",
    description: "High-performance distributed cache with automatic sharding and failover capabilities.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
    technologies: ["Go", "Redis", "Raft Consensus", "Protocol Buffers"],
    githubUrl: "https://github.com/sarahchen/distributed-cache",
    problem: "Single-node caching solution became a bottleneck for scaling applications.",
    solution: "Implemented a distributed caching system with consistent hashing and automatic failover.",
    role: "System Architect and Core Developer.",
    outcomes: [
      "Achieved sub-millisecond response times",
      "Handles 1M+ operations per second",
      "Automatic recovery from node failures",
      "Zero downtime during scaling operations"
    ],
    featured: false,
    category: "backend"
  },
  {
    id: "cloud-cost-optimizer",
    title: "Cloud Cost Optimization Tool",
    description: "ML-powered tool for optimizing cloud resource utilization and costs.",
    image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg",
    technologies: ["Python", "TensorFlow", "AWS SDK", "Flask", "React"],
    demoUrl: "https://cost-optimizer.example.com",
    githubUrl: "https://github.com/sarahchen/cloud-optimizer",
    problem: "Organizations struggling with rising cloud costs and inefficient resource utilization.",
    solution: "Built an ML model to predict resource needs and automatically adjust cloud resources.",
    role: "Project Lead and ML Engineer.",
    outcomes: [
      "Average 35% reduction in cloud costs",
      "90% accuracy in resource prediction",
      "Automated scaling based on ML predictions",
      "Implemented in 20+ organizations"
    ],
    featured: true,
    category: "fullstack"
  }
];