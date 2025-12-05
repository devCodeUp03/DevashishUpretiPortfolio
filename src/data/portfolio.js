export const personalInfo = {
    name: "Devashish Upreti",
    role: "Software Engineer",
    bio: "I am Devashish Upreti, a Software Engineer currently working as an Intern at Yuga Yatra Retail Pvt. Ltd. With a strong foundation in the MERN stack, C/C++, and TypeScript, I specialize in building scalable web applications. My experience ranges from crafting responsive frontends with React and Tailwind CSS to architecting robust backends using Node.js and MongoDB.",
    location: "Thamel, Kathmandu",
    email: "devashup68@gmail.com",
    socials: {
        github: "https://github.com/devCodeUp03", // Update with real link
        linkedin: "https://www.linkedin.com/in/devashish-upreti-427311235/", // Update with real link
        whatsapp: "https://wa.me/9779810148768"
    }
};

export const skills = [
    {
        category: "Languages",
        items: ["C", "C++", "JavaScript", "TypeScript", "LaTeX"],
        icon: "Code"
    },
    {
        category: "Web Development",
        items: ["HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express.js"],
        icon: "Globe"
    },
    {
        category: "Databases & Tools",
        items: ["SQL", "MongoDB", "Git", "Postman", "VS Code", "Cursor AI", "Canva"],
        icon: "Database"
    }
];

export const education = [
    {
        school: "Amrit Science Campus",
        degree: "BSc CSIT (Bachelor of Science in Computer Science and Information Technology)",
        year: "2022 - 2026",
        location: "Thamel, Kathmandu"
    }
];

export const experience = [
    {
        company: "Yuga Yatra Retail Pvt. Ltd",
        role: "Software Engineer Intern",
        period: "Dec 1, 2025 - Present",
        description: "Contributing to impactful, real-world projects in a collaborative environment."
    }
];

export const projects = [
    {
        title: "Kapada",
        description: "Full-stack e-commerce platform using MERN stack. Features authentication, product browsing, cart, secure payments, and an Admin Dashboard.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop",
        category: "Full Stack",
        technologies: ["React", "Vite", "Tailwind", "Node.js", "Express", "MongoDB", "JWT", "Axios", "Stripe API"],
        links: {
            frontend: "https://github.com/devCodeUp03/kapada-frontend", // Add your Frontend GitHub Link
            backend: "#", // Add your Backend GitHub Link
            admin: "#",   // Add your Admin GitHub Link
            live: "https://kapada-frontend.vercel.app/"     // Add Live Demo Link if available
        }
    },
    {
        title: "UnwindCabins",
        description: "Full-stack travel site for cabin discovery and bookings. Implemented CRUD, JWT auth, and Redux Toolkit for state management.",
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop",
        technologies: ["React", "Tailwind", "Redux Toolkit", "REST APIs", "Authentication"],
        category: "Full Stack",
        links: {
            frontend: "https://github.com/devCodeUp03/unwindcabins-frontend", // Add your Frontend GitHub Link
            backend: "#", // Add your Backend GitHub Link
            live: "https://unwindcabins.netlify.app/"     // Add Live Demo Link if available
        }
    }
];

export const testimonials = [
    {
        name: "Project Supervisor",
        role: "Senior Dev",
        text: "Devashish shows great promise and technical understanding of the MERN stack.",
        rating: 5
    }
];
