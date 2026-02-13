import chatBotProject from '../../assets/Chatbot-project.png'
import taskManagementProject from '../../assets/task-management-project.png'
import portfolioProject from '../../assets/portfolio-project.png'

export const projects = [
  {
    id: crypto.randomUUID(),
    name: "ChatBot Project",
    siteUrl: "https://chatbot-project-delta-dun.vercel.app/",
    imageUrl: chatBotProject,
    description: `Simple AI Chatbot created with React stack,

Responsive UI: Designed a mobile-first interface using CSS Flexbox for seamless usability across devices,

State Management: Developed complex CRUD operations with React Hooks to handle message requests between user and chatbot,

Custom Simple AI: Engineered and integrated a small light-weight custom AI Chatbot, 

Algorithm Design: Implemented a custom priority-sorting algorithm allowing users to dynamically reorder tasks based on urgency.`,
    gitHubUrl: "https://github.com/BugHunterExtraordinaire/chatbot-project.git"
  },
  {
    id: crypto.randomUUID(),
    name: "Task Management Dashboard",
    siteUrl: "https://to-do-list-project-ten-chi.vercel.app/",
    imageUrl: taskManagementProject,
    description: `Engineered a persistent task management application focused on workflow optimization,

State Management: Developed complex CRUD operations with React Hooks to handle task creation, deletion, and real-time status updates,

Algorithm Design: Implemented a custom priority-sorting algorithm allowing users to dynamically reorder tasks based on urgency,

Data Persistence: Integrated localStorage API to retain user data across sessions, ensuring 100% data reliability,

Responsive UI: Designed a mobile-first interface using CSS Flexbox for seamless usability across devices.`,
    gitHubUrl: "https://github.com/BugHunterExtraordinaire/to-do-list-project.git"
  },
  {
    id: crypto.randomUUID(),
    name: "Portfolio Website",
    siteUrl: "/",
    imageUrl: portfolioProject,
    description: `Architected a high-performance personal portfolio website using a modern React ecosystem to demonstrate technical proficiency,

    Component Architecture: Built a modular React application using reusable functional components to ensure scalability and maintainable code structure,

    Styling Engine: Utilized Tailwind CSS utility classes to rapidly develop a custom, design-system-compliant interface without writing redundant CSS files,

    Interactive UX: Implemented complex animations and transitions to create a dynamic, engaging user experience without compromising performance,

    Performance Optimization: Achieved a high Lighthouse score by leveraging code-splitting and optimizing asset loading for minimal Time-to-Interactive.`,
    gitHubUrl: "https://github.com/BugHunterExtraordinaire/portfolio-website.git"
  }
]