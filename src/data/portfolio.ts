import type { Project, SkillGroup } from '../types/portfolio'

export const portfolio = {
  name: 'Christian Paul Perez',
  headline: 'Aspiring Software Test Engineer',
  biography: "I'm an aspiring software test engineer focused on making web and mobile applications reliable and easy to use. Through academic projects, I've practiced functional and regression testing, UI checks, test case execution, and clear bug reporting.",
  linkedinUrl: 'https://www.linkedin.com/in/christian-paul-perez-591592379/',
  githubUrl: 'https://github.com/chantottt',
  email: 'christianpaulperez362@gmail.com',
  phone: '09460468338',
  resumePath: '/resume.pdf',
  profileImagePath: '/profile/christian-paul-perez.jpg',
  availability: '', // TODO: Add an accurate availability statement if desired.
  contactHeading: "Let's make software work better.",
  contactMessage: "I'm looking for opportunities to grow in software testing and quality assurance. I'd welcome a conversation about how I can help your team find issues and improve the user experience.",
  about: {
    introduction: "I care about what happens when real people use a product, especially where the expected path breaks down.",
    paragraphs: [
      "My academic project work has included manual and functional testing, regression checks, UI and responsiveness reviews, test case execution, and bug reporting across web and mobile applications.",
      "Working with development teams has helped me understand how features fit together and communicate findings clearly. I'm building on that experience as I pursue a career in software testing and quality assurance.",
    ],
  },
  projects: [
    {
      id: 'peakpickle', name: 'PeakPickle',
      title: 'PeakPickle: Pickleball Court Reservation & Management System',
      date: 'September 2026 – October 2026',
      role: 'Project Lead / Full-Stack Developer',
      description: 'A full-stack pickleball management web application designed to streamline court reservations, player management, queues, match tracking, rankings, and club operations.',
      summary: 'A court management platform where I contributed to development, debugging, and final testing.',
      categories: ['Full-Stack'],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'Axios', 'React Hook Form', 'Zod'],
      features: ['Role-based member and administrator dashboards', 'Court reservation and availability management', 'Booking conflict prevention', 'Queue management and waiting-time estimates', 'Singles and doubles match workflows', 'Rule-based player matching', 'Player rankings and match statistics', 'RESTful APIs and database integration', 'Authentication and authorization', 'Responsive web interface'],
      contributions: ['Led project planning and development coordination', 'Worked on full-stack application development', 'Developed frontend and backend functionalities', 'Integrated APIs and database operations', 'Participated in debugging, testing, and final project delivery'],
      theme: 'pickle', screenshots: [
        {
                'src': '/projects/peakpickle/homepage.png',
                'alt': 'PeakPickle homepage introducing court reservations, the live queue, and player activity.',
                'caption': 'Homepage & court reservations',
                'width': 1917,
                'height': 875
        },
        {
                'src': '/projects/peakpickle/member-dashboard.png',
                'alt': 'PeakPickle member dashboard showing player statistics, queue entries, and upcoming reservations.',
                'caption': 'Member dashboard & activity',
                'width': 1917,
                'height': 866
        },
        {
                'src': '/projects/peakpickle/admin-dashboard.png',
                'alt': 'PeakPickle administrator dashboard showing player counts, open courts, court usage, and live court status.',
                'caption': 'Administrator dashboard',
                'width': 1917,
                'height': 880
        },
        {
                'src': '/projects/peakpickle/court-management.png',
                'alt': 'PeakPickle court management screen showing court availability, opening hours, queue size, and reservation actions.',
                'caption': 'Court management',
                'width': 1913,
                'height': 876
        },
        {
                'src': '/projects/peakpickle/live-queue.png',
                'alt': 'PeakPickle live queue screen showing waiting players, estimated wait times, and match controls.',
                'caption': 'Live queue management',
                'width': 1917,
                'height': 878
        },
        {
                'src': '/projects/peakpickle/player-rankings.png',
                'alt': 'PeakPickle player rankings table showing wins, losses, completed matches, and win rates.',
                'caption': 'Player rankings',
                'width': 1912,
                'height': 861
        }
],
    },
    {
      id: 'mantuntamu', name: 'MantunTamu',
      title: 'MantunTamu: AI-Driven Apartment Management System',
      date: 'February 2026 – Present',
      role: 'QA Tester / Technical Documentation / Frontend Support',
      description: 'An AI-driven apartment and coworking management web application featuring property discovery, booking management, AI-assisted search, chatbot capabilities, and administrative workflows.',
      summary: 'Testing the details behind a smoother apartment discovery and management experience.',
      categories: ['Quality Assurance', 'Frontend'],
      technologies: ['ASP.NET Core MVC', '.NET 8', 'PostgreSQL', 'Python FastAPI', 'Gemini API', 'Azure'],
      features: ['Property discovery', 'Booking management', 'AI-assisted search and chatbot capabilities', 'Administrative workflows'],
      contributions: ['Functional and manual system testing', 'UI/UX and responsiveness testing', 'Bug identification and reporting', 'Regression testing', 'Technical and thesis documentation', 'Minor frontend interface improvements', 'Collaboration with the development team'],
      scopeNote: 'My role focused on quality assurance, documentation, and frontend support. The technologies listed describe the project stack; I did not lead its full-stack or AI development.',
      theme: 'apartment', featured: true, screenshots: [
        { src: '/projects/mantuntamu/homepage.jpeg', alt: 'MantunTamu homepage showing apartment and coworking search over a map.', caption: 'Homepage & property search', width: 1920, height: 945 },
        { src: '/projects/mantuntamu/apartment-booking.jpeg', alt: 'MantunTamu apartment booking page showing visit scheduling, lease details, and payment information.', caption: 'Apartment booking', width: 1920, height: 945 },
        { src: '/projects/mantuntamu/apartment-details.jpeg', alt: 'MantunTamu apartment details page showing property photos, monthly rent, amenities, and a rent request action.', caption: 'Apartment details', width: 1920, height: 945 },
      ],
    },
    {
      id: 'ma-ano-ulam', name: 'Ma! Ano Ulam?',
      title: 'Ma! Ano Ulam? – Mobile Recipe & Meal Planning Application',
      date: 'May 2026',
      role: 'Quality Assurance Tester',
      description: 'A Flutter-based meal planning and recipe application that uses Firebase and TheMealDB to support recipe discovery, saved meals, weekly meal plans, and cooking assistance.',
      summary: 'Validating recipe discovery, saved meals, and weekly plans for a mobile cooking companion.',
      categories: ['Quality Assurance'],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'TheMealDB REST API'],
      features: ['Recipe discovery and search', 'Saved meals', 'Weekly meal plans', 'Cooking assistance'],
      contributions: ['Functional application testing', 'Authentication workflow testing', 'Recipe search and meal planning testing', 'Data persistence validation', 'UI/UX testing', 'Bug reporting and regression testing'],
      scopeNote: 'I contributed as a quality assurance tester. Flutter, Dart, and Firebase are the application technologies, not a claim of development contributions.',
      theme: 'meal', screenshots: [
        { src: '/projects/ma-ano-ulam/recipe-discovery.jpg', alt: 'Ma! Ano Ulam? recipe discovery screen showing search, meal categories, and recipe cards.', caption: 'Recipe discovery', width: 896, height: 1980 },
        { src: '/projects/ma-ano-ulam/meal-planning.jpg', alt: 'Ma! Ano Ulam? meal-plan generation screen with start date, number of days, preferred category, and meal slots.', caption: 'Meal planning', width: 896, height: 1980 },
        { src: '/projects/ma-ano-ulam/login.jpg', alt: 'Ma! Ano Ulam? login screen with email and password fields and a registration link.', caption: 'Login & authentication', width: 896, height: 1980 },
        { src: '/projects/ma-ano-ulam/cooking-timers.jpg', alt: 'Ma! Ano Ulam? cooking timers screen with actions to create reusable timers.', caption: 'Cooking timers', width: 896, height: 1980 },
      ],
    },
    {
      id: 'findit', name: 'FindIT',
      title: 'FindIT: Community Lost & Found Management System',
      date: 'September 2025 – October 2025',
      role: 'Frontend Developer / QA Tester',
      description: 'A community lost-and-found management platform developed for Barangay Lakandula, helping residents report lost or found items, submit claims, and interact with barangay administrators.',
      summary: 'Testing and refining item-reporting and claim workflows for a community platform.',
      categories: ['Frontend', 'Quality Assurance'],
      technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Leaflet.js', 'Nominatim API', 'Google Gemini API'],
      features: ['Lost and found item reporting', 'Resident claims', 'Barangay administrator workflows'],
      contributions: ['Frontend interface development', 'Responsive layout improvements', 'Resident and administrator interface support', 'Functional testing of reporting and claim workflows', 'UI/UX testing', 'Bug identification and reporting', 'System integration and debugging support'],
      scopeNote: 'My contributions were frontend development and quality assurance. The PHP backend and API implementations were outside my confirmed development scope.',
      theme: 'find', screenshots: [
        { src: '/projects/findit/map-view.jpg', alt: 'FindIT homepage showing an interactive map with found-item markers and community item listings.', caption: 'Map & community item listings', width: 1280, height: 609 },
        { src: '/projects/findit/found-items.jpg', alt: 'FindIT found-item listings showing a wallet, an identification card, motor keys, and the item-claiming section.', caption: 'Found items & claiming information', width: 1280, height: 613 },
        { src: '/projects/findit/missing-items.jpg', alt: 'FindIT reported missing-item listings showing wallets and wireless earbuds.', caption: 'Reported missing items', width: 1280, height: 606 },
      ],
    },
  ] satisfies Project[],
  skillGroups: [
    {
      id: 'qa', title: 'Quality Assurance', description: 'Checking behavior and documenting findings.',
      skills: [{name:'Manual Testing',icon:'check'},{name:'Functional Testing',icon:'check'},{name:'Regression Testing',icon:'check'},{name:'UI/UX Testing',icon:'layout'},{name:'Test Case Execution',icon:'check'},{name:'Bug Reporting',icon:'bug'},{name:'Playwright',icon:'test'},{name:'Supertest',icon:'test'}],
    },
    {
      id: 'frontend', title: 'Frontend Technologies', description: 'Technical context for testing responsive interfaces.',
      skills: [{name:'React',icon:'react'},{name:'TypeScript',icon:'typescript'},{name:'JavaScript',icon:'javascript'},{name:'HTML5',icon:'html5'},{name:'CSS3',icon:'css3'},{name:'Tailwind CSS',icon:'tailwindcss'},{name:'Vite',icon:'vite'},{name:'Responsive Web Design',icon:'layout'}],
    },
    {
      id: 'backend', title: 'Backend & API Context', description: 'Understanding services behind the user workflow.',
      skills: [{name:'Node.js',icon:'nodedotjs'},{name:'Express.js',icon:'express'},{name:'REST APIs',icon:'api'},{name:'PHP',icon:'php',exposure:true}],
    },
    {
      id: 'database', title: 'Databases', description: 'Data models and reliable foundations.',
      skills: [{name:'MongoDB',icon:'mongodb'},{name:'MongoDB Atlas',icon:'mongodb'},{name:'Mongoose',icon:'database'},{name:'Firebase / Firestore',icon:'firebase',exposure:true},{name:'PostgreSQL',icon:'postgresql',exposure:true}],
    },
    {
      id: 'tools', title: 'Tools & Collaboration', description: 'Better software through teamwork.',
      skills: [{name:'Git',icon:'git'},{name:'GitHub',icon:'github'},{name:'VS Code',icon:'code'},{name:'Agile/Scrum',icon:'team'},{name:'Technical Documentation',icon:'document'},{name:'Project Coordination',icon:'team'}],
    },
  ] satisfies SkillGroup[],
}
export const navigation = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' }, { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' }, { id: 'contact', label: 'Contact' },
] as const
export const projectFilters = ['All', 'Quality Assurance', 'Frontend', 'Full-Stack'] as const
