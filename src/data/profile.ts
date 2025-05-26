export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  tagline: string;
  profileImage: string;
  resumeUrl: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter?: string;
  };
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  achievements: Achievement[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 1-5
  icon?: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
  url?: string;
}

export const profile: Profile = {
  name: "Sarah Chen",
  title: "Senior Software Engineer",
  location: "San Francisco Bay Area",
  email: "sarah.chen@example.com",
  phone: "+1 (555) 123-4567",
  bio: "Passionate software engineer with 8+ years of experience in full-stack development, cloud architecture, and team leadership. Specialized in building scalable web applications and microservices. Strong advocate for clean code, test-driven development, and mentoring junior developers.",
  tagline: "Crafting elegant solutions for complex challenges",
  profileImage: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/sarahchen",
    github: "https://github.com/sarahchen",
    twitter: "https://twitter.com/sarahchen"
  },
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2013",
      endDate: "2015",
      description: "Focus on Distributed Systems and Cloud Computing. Graduate Research Assistant in Distributed Systems Lab."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of Washington",
      location: "Seattle, WA",
      startDate: "2009",
      endDate: "2013",
      description: "Minor in Mathematics. Dean's List all semesters. Led UW ACM chapter."
    }
  ],
  experience: [
    {
      position: "Senior Software Engineer",
      company: "CloudScale Solutions",
      location: "San Francisco, CA",
      startDate: "2020",
      endDate: "Present",
      description: "Lead engineer for cloud-native applications and distributed systems, focusing on scalability and reliability.",
      achievements: [
        "Architected and implemented microservices platform serving 2M+ daily users",
        "Reduced cloud infrastructure costs by 40% through optimization",
        "Led migration from monolith to microservices architecture",
        "Mentored team of 5 junior developers in best practices"
      ],
      technologies: ["Go", "Kubernetes", "AWS", "gRPC", "PostgreSQL", "Redis", "Terraform"]
    },
    {
      position: "Software Engineer",
      company: "TechStart Inc",
      location: "Seattle, WA",
      startDate: "2015",
      endDate: "2020",
      description: "Full-stack developer for enterprise SaaS applications, specializing in real-time data processing and analytics.",
      achievements: [
        "Built real-time analytics dashboard processing 500K events/second",
        "Improved application performance by 60% through caching and optimization",
        "Implemented CI/CD pipeline reducing deployment time by 75%",
        "Led adoption of TypeScript and React across frontend teams"
      ],
      technologies: ["TypeScript", "React", "Node.js", "Python", "MongoDB", "Docker", "Jenkins"]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Go", proficiency: 5 },
        { name: "TypeScript", proficiency: 5 },
        { name: "Python", proficiency: 4 },
        { name: "Java", proficiency: 4 },
        { name: "Rust", proficiency: 3 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", proficiency: 5 },
        { name: "Kubernetes", proficiency: 5 },
        { name: "Docker", proficiency: 4 },
        { name: "Terraform", proficiency: 4 },
        { name: "CI/CD", proficiency: 5 }
      ]
    },
    {
      category: "Databases & Caching",
      skills: [
        { name: "PostgreSQL", proficiency: 5 },
        { name: "MongoDB", proficiency: 4 },
        { name: "Redis", proficiency: 4 },
        { name: "Elasticsearch", proficiency: 3 },
        { name: "Cassandra", proficiency: 3 }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React", proficiency: 5 },
        { name: "Node.js", proficiency: 5 },
        { name: "GraphQL", proficiency: 4 },
        { name: "gRPC", proficiency: 4 },
        { name: "WebSocket", proficiency: 4 }
      ]
    }
  ],
  achievements: [
    {
      title: "Tech Lead of the Year",
      date: "2022",
      description: "Recognized for exceptional leadership in modernizing legacy systems and mentoring junior developers.",
      url: "https://cloudscale.com/awards/2022"
    },
    {
      title: "Patent: Distributed System for Real-time Data Processing",
      date: "2021",
      description: "Co-invented a novel approach to processing real-time data streams in distributed systems. Patent No. US 12345678.",
      url: "https://patents.google.com/"
    },
    {
      title: "Conference Speaker",
      date: "2020-Present",
      description: "Regular speaker at GopherCon and KubeCon, sharing insights on microservices architecture and cloud-native development.",
      url: "https://conferences.example.com/speakers/sarah-chen"
    },
    {
      title: "Open Source Contribution",
      date: "2019-Present",
      description: "Major contributor to Kubernetes and Go cloud libraries. Created popular open-source tools for cloud-native development.",
      url: "https://github.com/sarahchen"
    }
  ]
};